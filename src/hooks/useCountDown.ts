import { useEffect, useState } from 'react';

export const useCountDown = (date: string) => {
  const [daysState, setDays] = useState(0);
  const [hoursState, setHours] = useState(0);
  const [minutesState, setMinutes] = useState(0);
  const [secondsState, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);
  const countdown = () => {
    const now: any = new Date();
    const endDate = new Date(date).getTime();
    const difference = endDate - now;
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    setDays(Math.floor(difference / days));
    setHours(Math.floor((difference % days) / hours));
    setMinutes(Math.floor((difference % hours) / minutes));
    setSeconds(Math.floor((difference % minutes) / seconds));
    return;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
      countdown();
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return {
    daysState,
    hoursState,
    minutesState,
    secondsState,
    counter,
  };
};
