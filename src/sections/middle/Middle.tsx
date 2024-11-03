import { useTranslation } from 'react-i18next';
import { useCountDown } from '../../hooks/useCountDown';
import './Middle.scss';

export const Middle = () => {
  const [t, i18n] = useTranslation('global');

  const { secondsState, daysState, hoursState, minutesState } = useCountDown("jan 25 2025 18:00:00");
  return (
    <section className="middle-container" id="middle">
      <div className="middle-top-container">
        <img
          src="https://i.ibb.co/94Ygw0q/daniela-elias19.jpg"
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
        <h1 className="middle-middle-header">{t('message.parents')}</h1>
        <span className="middle-middle-location">
         Nombre de los Padres
        </span>
      </div>
      <div className="middle-middle-container">
        <h1 className="middle-middle-header">{t('message.godparents')}</h1>
        <span className="middle-middle-location">
        Nombre de los Padrinos
        </span>
      </div>
      <div className="middle-middle-container">
        <h1 className="middle-middle-header">{t('message.ceremony')}</h1>
        {/* <span className="middle-middle-location">
          Templo de nuestra señora de la Prueba
        </span> */}
        <span className="middle-middle-address">
          {t('message.direction')}📍
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">05:30 pm</span>
          <a
            href="https://www.google.com/maps/place/Dos+Vistas+Jard%C3%ADn/@19.1999837,-103.7229745,15z/data=!4m2!3m1!1s0x0:0x14a4dceb36ab7767?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            className="middle-link"
          >
            <span className="middle-middle-bottom-link">
              {t('message.takeme')}
            </span>
          </a>
        </div>
        <h1 className="middle-middle-header">{t('message.party')}</h1>
        {/* <span className="middle-middle-location">
        Dos Vistas Jardín
        </span> */}
        <span className="middle-middle-address">
          {t('message.direction')}📍
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">7:00 pm</span>
          <a
            href="https://www.google.com/maps/place/Dos+Vistas+Jard%C3%ADn/@19.1999837,-103.7229745,15z/data=!4m2!3m1!1s0x0:0x14a4dceb36ab7767?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            className="middle-link"
          >
            <span className="middle-middle-bottom-link">
              {t('message.takeme')}
            </span>
          </a>
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
