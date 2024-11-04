import React from 'react';
import { useCountDown } from '../../hooks/useCountDown';
import { useTranslation } from 'react-i18next';
import { EVENT } from '../../utils/data';
import './Counter.scss'

export const Counter = () => {
  const [t] = useTranslation('global');

  const { secondsState, daysState, hoursState, minutesState } = useCountDown(
    EVENT.date
  );
  return (
    <div className="counter">
      <span className="counter_header">{t('message.left')}</span>
      <div className="counter_label_container">
        <span className="counter_text">{daysState}</span>
        <span className="counter_subtext">{t('message.days')}</span>
      </div>
      <div className="counter_label_container">
        <span className="counter_text">{hoursState}</span>
        <span className="counter_subtext">{t('message.hours')}</span>
      </div>
      <div className="counter_label_container">
        <span className="counter_text">{minutesState}</span>
        <span className="counter_subtext">{t('message.minutes')}</span>
      </div>
      <div className="counter_label_container">
        <span className="counter_text">{secondsState}</span>
        <span className="counter_subtext">{t('message.seconds')}</span>
      </div>
    </div>
  );
};
