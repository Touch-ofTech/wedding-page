import { PropsWithChildren } from 'react';
import './Container.scss';

interface Props extends PropsWithChildren {
  id: string;
}

export const Container = ({ id, children }: Props) => {
  return (
    <section className="container" id={id}>
      <div className="content">{children}</div>
    </section>
  );
};
