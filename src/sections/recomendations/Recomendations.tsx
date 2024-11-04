import { Card } from '../../components/card/Card';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components';
import { Slide } from 'react-awesome-reveal';
import './Recomendations.scss';

const items = [
  {
    url: 'https://www.google.com/travel/search?q=hospedaje%20colima&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72420596%2C72421566%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72499705%2C72602734%2C72614662%2C72616120%2C72619927%2C72628720%2C72640790%2C72647020%2C72648289%2C72658035%2C72671093%2C72686036%2C72729615%2C72749231%2C72758705%2C72789811%2C72794407&hl=es-419&gl=mx&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QCxgbEgcI6A8QCxgcGAEyAhAAKgcKBToDTVhO&qs=CAE4BkIJEaSbZ5DClWAeQgkRVR0FtTulDE1CCRGr4W4VR41C61pNMkuqAUgQASoNIglob3NwZWRhamUoDjIfEAEiG7gXyausd93R178VJvgwocJHRdNrtk-RCV6eFTIUEAIiEGhvc3BlZGFqZSBjb2xpbWE&ap=aAE&ictx=111&ved=0CAAQ5JsGahcKEwiwysHUo8GJAxUAAAAAHQAAAAAQBw',
    buttonLabel: 'Seleccionar',
    img: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hospedaje',
    button: true,
    id: 1,
  },
  {
    url: 'https://visitacolima.mx/conoce-colima/colima',
    buttonLabel: 'Seleccionar',
    img: 'https://i0.wp.com/turismoconsabor.com/wp-content/uploads/2024/09/colima.jpg?fit=925%2C540&ssl=1',
    title: 'Qué hacer en Coilima.',
    button: true,

    id: 2,
  },
];

export const Recomendations = () => {
  const { t } = useTranslation('global');
  return (
    <Container id="recomendations">
      <Slide triggerOnce>
        <div className="grid_container">
          <h1 className="header">{t('message.header_recommendations')}</h1>
          <div className="grid_card_container">
            {items.map((item) => (
              <Card card={item} />
            ))}
          </div>
        </div>
      </Slide>
    </Container>
  );
};
