import { useTranslation } from 'react-i18next';
import dress from '../../assets/dress_code.svg';
import './Dress.scss';
import { CardContainer } from '../../components/cardContainer/CardContainer';
import { Card } from '../../components/card/Card';

export const Dress = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div className="dress-code-container">
      <CardContainer>
        <div className="header--form-container">
          <h1 className="dress-header">{t('message.code')}</h1>
          <span className="card-text">{t('message.code-text')}</span>
          <span className="card-text">No vestidos verdes ni blancos</span>
        </div>
        <div className="header--form-container">
          <h1 className="dress-header">Tipo de Regalo</h1>
          <span className="card-text">
          Transferencia y Sobres 🎁.
          </span>
          <span className="card-text">Lo más importante es tu presencia.</span>
        </div>
        {/* <div className="bottom-container">
          <img src={dress} alt="dress" className="dress-img" />
          </div> */}
      </CardContainer>
    </div>
  );
};
