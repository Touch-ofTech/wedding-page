import { useTranslation } from 'react-i18next';
import { CardContainer } from '../../components/cardContainer/CardContainer';
import { Container } from '../../components';
import { EVENT } from '../../utils/data';
import './Dress.scss';

export const Dress = () => {
  const [t] = useTranslation('global');

  return (
    <Container id='dress'>
      <CardContainer>
        <div className="header--form-container">
          <h1 className="dress-header">{t('message.code')}</h1>
          <span className="card-text">{t('message.code-text')}</span>
          <span className="card-text">{EVENT.dress}</span>
        </div>
        <div className="header--form-container">
          <h1 className="dress-header">{t('message.dress_present_type')}</h1>
          <span className="card-text">{EVENT.present}</span>
          <span className="card-text">{t('message.dress_present')}</span>
        </div>
      </CardContainer>
    </Container>
  );
};
