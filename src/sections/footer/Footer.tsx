import { useTranslation } from 'react-i18next';
import tot from '../../assets/TouchofTech.n.png';
import './Footer.scss';
import { socials } from '../../utils/data';

export const Footer = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className="footer-container">
      <div className="logo-container">
        <img src={tot} alt="logo" className="logo" />
        <span> &copy; 2023</span>
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
