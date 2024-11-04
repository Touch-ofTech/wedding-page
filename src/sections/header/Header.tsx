import { useTranslation } from 'react-i18next';
import arrow from '../../assets/icon-arrow-light.svg';
import { EVENT, MONTHS } from '../../utils/data';
import { monthsTranslations } from '../../types';
import './Header.scss';

export const Header = () => {
  const [t, { language }] = useTranslation('global');

  return (
    <section className="header-container">
      <div className="header-label-container">
        <h1 className="header-title">{t('message.header_title')}</h1>
        <h3 className="header-subtitle">
          {t('message.date', {
            month:
              MONTHS[EVENT.month as keyof typeof MONTHS][
                language as keyof monthsTranslations
              ],
            date: '25,2025.',
          })}
        </h3>
        <a href="#middle">
          <img src={arrow} alt="arrow" className="header-mobile-arrow" />
        </a>
      </div>
    </section>
  );
};
