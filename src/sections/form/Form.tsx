import { useState } from 'react';
import { db } from '../../firebase';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ref, set } from 'firebase/database';
import { CardContainer } from '../../components/cardContainer/CardContainer';
import { Container } from '../../components';
import './Form.scss';

export const Form = () => {
  const [t] = useTranslation('global');

  const [formData, setFormData] = useState({
    nombre: '',
    invitados: '',
    confirmado: true,
  });

  const onchange = (e: any) => {
    setFormData((pre) => {
      return {
        ...pre,
        [e.target.name]:
          e.target.name === 'confirmado'
            ? !formData.confirmado
            : e.target.value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = `${formData.nombre}_${Date.now()}_${
      formData.invitados
    }`.replace(/ +/g, '_');
    try {
      if (formData.confirmado && formData.invitados === '0')
        throw Error('confirmation_error_message');
      set(ref(db, `confirmation_boda_danny_elias/${userId}`), {
        ...formData,
        invitados: formData.confirmado ? formData.invitados : 0,
      });
      toast.success(
        formData.confirmado
          ? t('message.confirmation_message', {
              couple: t('message.header_title'),
            })
          : t('message.confirmation_message_reject'),
        {
          duration: 5000,
          position: 'top-center',
        }
      );
      // @ts-ignore
      // const docRef = await addDoc(collection(db, 'PruebaToday'), {
      //   nombre: formData.nombre,
      //   invitados: formData.confirmado ? formData.invitados : 0,
      //   confirmado: formData.confirmado,
      // });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(t(`message.${[error.message]}`), {
          duration: 5000,
          position: 'top-center',
        });
      }
    }
  };

  return (
    <Container id="form">
      <CardContainer>
        <div className="form_header_container">
          <h1 className="form-header">{t('message.confirm')}</h1>
          <span className="error-text">{t('message.event')}</span>
        </div>
        <form className="form_container" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="form__input--container">
            {t('message.form_name_label')}
            <input
              className="textbox"
              type="text"
              placeholder={t('message.form_name_placeholder')}
              name="nombre"
              onChange={(e) => onchange(e)}
              value={formData.nombre}
              id="nombre"
            />
          </label>
          <label htmlFor="invitados" className="form__input--container">
            {t('message.form_guest_label')}
            <input
              className="textbox"
              type="number"
              placeholder={t('message.form_guest_placeholder')}
              name="invitados"
              disabled={!formData.confirmado}
              onChange={(e) => onchange(e)}
              value={formData.invitados}
              id="invitados"
            />
          </label>
          <label htmlFor="" className="form__input--container check">
            {t('message.form_not_attending')}
            <input
              className="form__box-check"
              type="checkbox"
              placeholder="Ingresar Numero.."
              name="confirmado"
              onChange={(e) => onchange(e)}
              checked={!formData.confirmado}
              value={formData.confirmado as unknown as string}
            />
          </label>
          <button
            type="submit"
            className="confirm-button"
            disabled={
              formData.confirmado
                ? formData.nombre.length === 0 ||
                  formData.invitados.length === 0 ||
                  formData.invitados === '0'
                : formData.nombre === ''
            }
          >
            {t('message.submit')}
          </button>
        </form>
      </CardContainer>
    </Container>
  );
};
