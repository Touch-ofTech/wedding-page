import { useEffect, useState } from 'react';
import { onValue, ref, update } from 'firebase/database';
import { db } from '../../firebase';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Guest } from '../../types/index';
import './Confirmation.scss';

export const Confirmation = () => {
  const [t] = useTranslation('global');

  const queryString = window.location.search;
  const urlParams: any = new URLSearchParams(queryString);
  const [guestInfo, setGuestInfo] = useState<Guest>();
  const guest = urlParams.get('guest');

  const getInfo = async () => {
    onValue(ref(db, `invites/${guest}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setGuestInfo(data);
      }
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const updateConfirm = () => {
    update(ref(db, `invites/${guest}`), {
      confirm: true,
    });
    toast.success('Haz confirmado ir a los Xvs de Kimberly🍾', {
      duration: 5000,
      position: 'top-center',
    });
  };

  return (
    <section className="form-container" id="form">
      <div className="card-form-container">
        <div className="header--form-container">
          <h1 className="form-header">{t('message.confirm')}</h1>
          {/* <span className="error-text">{t('message.event')}*</span> */}
        </div>
        <div className="form-middle-container">
          <h2 className="form-header-title">{t('message.limit')}</h2>
          <h1 className="form-header-guest">{guestInfo?.name}</h1>
          <h2 className="form-header-invites">
            {guest === null
              ? t('message.no-guest')
              : t('message.reservation', { count: guestInfo?.guests })}
          </h2>
        </div>

        <button
          type="submit"
          className="confirm-button"
          onClick={updateConfirm}
          disabled={guestInfo?.confirm || guest === null || guestInfo === null}
        >
          {guestInfo?.confirm ? t('message.confirmation') : t('message.submit')}
        </button>
      </div>
    </section>
  );
};
