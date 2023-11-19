import { useTranslation } from 'react-i18next';
import dress from '../../assets/dress_code.svg';
import './Dress.scss';

export const Dress = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className="dress-code-container" id="form">
      <div className="card-dress-container">
        <div className="header--form-container">
          <h1 className="dress-header">{t('message.code')}</h1>
          <span className="card-text">{t('message.code-text')}</span>
        </div>
        <div className="header--form-container">
          <h1 className="dress-header">Tipo de Regalo</h1>
          <span className="card-text">Libre</span>
        </div>
        {/* <div className="bottom-container">
          <img src={dress} alt="dress" className="dress-img" />
        </div> */}
      </div>
    </section>
  );
};
