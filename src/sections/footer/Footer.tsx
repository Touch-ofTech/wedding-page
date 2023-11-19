import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/card/Card";
import { CardInt } from "../../interfaces";
import { cardItems } from "../../utils/data";
import "./Footer.scss";

export const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="footer-container">
      <span className="footer-header">{t("message.recomendations")}</span>
      <span className="footer-subtext">{t("message.posible")}</span>
      <div className="footer-grid-container">
        {cardItems.map((item: CardInt, i) => (
          <Card key={i} card={item} />
        ))}
      </div>
    </section>
  );
};
