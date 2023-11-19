# terraform backend and provider

terraform {

  backend "s3" {
    bucket = "mievento-party-terraform"
    key    = "state/links.tfstate"
    region = "us-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      environment = var.environment
      application = "tot-links"
    }
  }
}

# account id

data "aws_caller_identity" "current" {}

# s3 website bucket

resource "aws_s3_bucket" "website_hosting_bucket" {
  bucket = var.domain_name
}

# s3 website bucket public access block

resource "aws_s3_bucket_public_access_block" "website_hosting_bucket_public_access_block" {
  bucket = aws_s3_bucket.website_hosting_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# s3 website bucket ownership controls

resource "aws_s3_bucket_ownership_controls" "website_hosting_bucket_ownership_controls" {
  bucket = aws_s3_bucket.website_hosting_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# s3 website bucket encryption

resource "aws_s3_bucket_server_side_encryption_configuration" "website_hosting_bucket_encryption" {
  bucket = aws_s3_bucket.website_hosting_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# upload files to s3

resource "null_resource" "sync_s3_files" {
  provisioner "local-exec" {
    command = "aws s3 cp ../dist/ s3://${aws_s3_bucket.website_hosting_bucket.id}/ --recursive --sse=AES256"
  }
  triggers = {
    always_run = timestamp()
  }
}

# cloudfront origin access crontrol (OAC), and cloudfront access identity (OAI)

resource "aws_cloudfront_origin_access_control" "website_cloudfront_oac" {
  name                              = "${var.cluster_name}-cloudfront-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# cloudfront distribution

resource "aws_cloudfront_distribution" "website_cloudfront_distribution" {

  depends_on = [
    aws_cloudfront_origin_access_control.website_cloudfront_oac,
  ]

  origin {
    domain_name              = aws_s3_bucket.website_hosting_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.website_cloudfront_oac.id
    origin_id                = "${var.cluster_name}-s3-origin-oac"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [
    var.domain_name,
  ]

  custom_error_response {
    error_code            = 403
    response_code         = 200
    error_caching_min_ttl = 10
    response_page_path    = "/index.html"
  }

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${var.cluster_name}-s3-origin-oac"
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/${var.certificate_id}"
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}

# cloudfront distribution access to website hosting bucket

data "aws_iam_policy_document" "allow_access_from_cloudfront_to_s3" {
  statement {

    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.website_hosting_bucket.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values = [
        aws_cloudfront_distribution.website_cloudfront_distribution.arn
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.website_hosting_bucket.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront_to_s3.json
}
