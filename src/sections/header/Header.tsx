import React from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../assets/icon-arrow-light.svg';
import './Header.scss';

export const Header = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className="header-container">
      <div className="header-label-container">
        <h1 className="header-title">{t('message.header_title')}</h1>
        <h3 className="header-subtitle">
          {t('message.month')} 25,2025.
        </h3>
        <a href="#middle">
          <img src={arrow} alt="arrow" className="header-mobile-arrow" />
        </a>
      </div>
      {/* <img src="https://i.ibb.co/hsnH3kW/pexels-jonathan-borba-9714788.jpg" alt="weeding" className="header-img" /> */}
    </section>
  );
};
