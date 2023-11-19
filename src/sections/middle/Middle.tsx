import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCountDown } from '../../hooks/useCountDown';
// import el from '../../assets/el.jpg'
// import ella from ''
import './Middle.scss';
import {db} from '../../firebase';

export const Middle = () => {
  const [t, i18n] = useTranslation('global');



  const { secondsState, daysState, hoursState, minutesState } = useCountDown();
  return (
    <section className="middle-container" id="middle">
      <div className="middle-top-container">
        <img
          src="https://i.ibb.co/Sd3GXsb/f1f7d213-e4a0-4a48-b9db-87f04c72051e.jpg"
          alt="novia"
          className="middle-top-profile-img"
        />
        <div className="middle-top-middle-container">
          <h1 className="middle-top-middle-header">Save The Date</h1>
          <h1 className="middle-top-middle-description">
            {t('message.primary')}🍾
          </h1>
        </div>
        {/* <img
          src="https://i.ibb.co/NsC9DbM/el.jpg"
          alt="novio"
          className="middle-top-profile-img"
        /> */}
      </div>
      {/* <div className="middle-top-container">
        <img
          src="https://i.ibb.co/WKbYLsB/ellla.jpg"
          alt="novia"
          className="middle-top-profile-img"
        />
        <div className="middle-top-middle-container">
          <h1 className="middle-top-middle-header">Save The Date</h1>
          <h1 className="middle-top-middle-description">
            {t('message.primary')}🍾
          </h1>
        </div>
        <img
          src="https://i.ibb.co/NsC9DbM/el.jpg"
          alt="novio"
          className="middle-top-profile-img"
        />
      </div> */}
      <div className="middle-middle-container">
        <h1 className="middle-middle-header">{t('message.ceremony')}</h1>
        <span className="middle-middle-location">
          Templo de nuestra señora de la Candelaria en el Trapiche
        </span>
        <span className="middle-middle-address">
          {t('message.direction')}📍
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">6:00 pm</span>
          <a
            href="https://maps.app.goo.gl/4QdXBtDJPHERgSAw9"
            target="_blank"
            className="middle-link"
          >
            <span className="middle-middle-bottom-link">
              {t('message.takeme')}
            </span>
          </a>
        </div>
        <h1 className="middle-middle-header">{t('message.party')}</h1>
        <span className="middle-middle-location">
          Rancho los Padilla en el Manrique
        </span>
        {/* <span className="middle-middle-address">
          {t('message.direction')}📍
        </span> */}
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">7:30 pm</span>
          {/* <a
            href="https://goo.gl/maps/8twwiu7y39Yob1Vc7"
            target="_blank"
            className="middle-link"
          >
            <span className="middle-middle-bottom-link">
              {t('message.takeme')}
            </span>
          </a> */}
        </div>
        <div className="middle-count-container">
          <span className="middle-count-header">{t('message.left')}</span>
          <div className="count-label-container">
            <span className="middle-count-text">{daysState}</span>
            <span className="middle-count-subtext">{t('message.days')}</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{hoursState}</span>
            <span className="middle-count-subtext">{t('message.hours')}</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{minutesState}</span>
            <span className="middle-count-subtext">{t('message.minutes')}</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{secondsState}</span>
            <span className="middle-count-subtext">{t('message.seconds')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
