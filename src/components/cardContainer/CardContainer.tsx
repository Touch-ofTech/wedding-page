import { PropsWithChildren } from 'react';
import { Slide } from 'react-awesome-reveal';
import './CardContainer.scss';

export const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Slide triggerOnce>
      <div className="card_section_container">{children}</div>
    </Slide>
  );
};
