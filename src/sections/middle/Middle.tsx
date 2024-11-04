import { useTranslation } from 'react-i18next';
import { Container, Counter } from '../../components';
import { EVENT } from '../../utils/data';
import './Middle.scss';

export const Middle = () => {
  const [t] = useTranslation('global');

  return (
    <Container id="middle">
      <div className="middle-top-container">
        <img
          src="https://i.ibb.co/94Ygw0q/daniela-elias19.jpg"
          alt="novios"
          className="middle-top-profile-img"
        />
        <div className="middle-top-middle-container">
          <h1 className="middle-top-middle-header">{EVENT.saveTitle}</h1>
          <h1 className="middle-top-middle-description">
            {t('message.primary')}🍾
          </h1>
        </div>
      </div>

      <div className="parent-container">
        <div className="middle-middle-container">
          <h1 className="cursive-header">{t('message.parents')}</h1>
          {EVENT.parents.map((parent) => (
            <span className="regular-paragraph" key={parent.name}>
              {parent.name}
            </span>
          ))}
        </div>
        <div className="middle-middle-container">
          <h1 className="cursive-header">{t('message.godparents')}</h1>
          {EVENT.godFathers.map((parent) => (
            <span className="regular-paragraph" key={parent.name}>
              {parent.name}
            </span>
          ))}
        </div>
      </div>
      <div className="middle-middle-container">
        <h1 className="cursive-header">{t('message.ceremony')}</h1>
        {/* <span className="regular-paragraph">
          Templo de nuestra señora de la Prueba
        </span> */}
        <span className="middle-middle-address">
          {t('message.direction')}📍
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">
            {EVENT.ceremonyTime}
          </span>
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
        <h1 className="cursive-header">{t('message.party')}</h1>
        {/* <span className="regular-paragraph">
        Dos Vistas Jardín
        </span> */}
        <span className="middle-middle-address">
          {t('message.direction')}📍
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">{EVENT.partyTime}</span>
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
        <Counter />
      </div>
    </Container>
  );
};
