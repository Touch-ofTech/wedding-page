import tot from '../../assets/TouchofTech.n.png';
import { socials } from '../../utils/data';
import './Footer.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="footer-container">
      <div className="logo-container">
        <img src={tot} alt="logo" className="logo" />
        <span> &copy; {year}</span>
      </div>

      <div className="love">
        <span>
          Made with ❤️ by{' '}
          <a href="https://links.touchof.tech/" target="_blank">
            ToT
          </a>
        </span>
      </div>
      <div className="icons">
        {socials.map((red) => (
          <a href={red.url} key={red.id} target="_blank">
            <img src={red.icon} alt={red.id} className="socials__img" />
          </a>
        ))}
      </div>
    </section>
  );
};
