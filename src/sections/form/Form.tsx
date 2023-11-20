import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import './Form.scss';

export const Form = () => {
  const [t, i18n] = useTranslation('global');

  const [formData, setFormData] = useState({
    nombre: '',
    invitados: '',
    confirmado: true,
  });

  const [confirmed, setConfirmed] = useState(false);

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

  const updateConfirm = async () => {
    try {
      // @ts-ignore
      const docRef = await addDoc(collection(db, 'kimberly'), {
        nombre: formData.nombre,
        invitados: formData.confirmado ? formData.invitados : 0,
        confirmado: formData.confirmado,
      });

      toast.success(
        `${
          formData.confirmado
            ? 'Haz confirmado ir a la boda de Isaura & Alfonso! ♥️'
            : 'Gracias por tu respuesta.'
        }`,
        {
          duration: 5000,
          position: 'top-center',
        }
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <section className="form-container" id="form">
      <div className="card-form-container">
        <div className="header--form-container">
          <h1 className="form-header">{t('message.confirm')}</h1>
        </div>
        <div className="form__confirmation--inputs">
          <label htmlFor="" className="form__input--container">
            Nombre Invitado
            <input
              className="textbox"
              type="text"
              placeholder="Ingresar Nombre.."
              name="nombre"
              onChange={(e) => onchange(e)}
              value={formData.nombre}
            />
          </label>
          <label htmlFor="" className="form__input--container">
            Acompañantes
            <input
              className="textbox"
              type="number"
              placeholder="Ingresar Numero.."
              name="invitados"
              disabled={!formData.confirmado}
              onChange={(e) => onchange(e)}
              value={formData.invitados}
            />
          </label>
          <label htmlFor="" className="form__input--container check">
            No asistiré
            <input
              className="form__box-check"
              type="checkbox"
              placeholder="Ingresar Numero.."
              name="confirmado"
              onChange={(e) => onchange(e)}
              checked={!formData.confirmado}
              // @ts-ignore
              value={formData.confirmado}
            />
          </label>
        </div>

        <button
          type="submit"
          className="confirm-button"
          onClick={updateConfirm}
          disabled={
            formData.confirmado
              ? formData.nombre.length === 0 || formData.invitados.length === 0
              : formData.nombre === ''
          }
        >
          {confirmed ? t('message.submit') : t('message.submit')}
        </button>
      </div>
    </section>
  );
};
