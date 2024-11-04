import liverpool from '../assets/liverpool.jpeg';
import banamex from '../assets/banamex.jpeg';
import hospedaje from '../assets/hospedaje.jpeg';
import { CardInt } from '../interfaces';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkTree from '../assets/linkTree.svg';

export const cardItems: CardInt[] = [
  {
    id: 1,
    title: 'Hospedaje',
    button: true,
    buttonLabel: 'Ver Recomendación',
    url: 'https://www.tripadvisor.com.mx/Hotel_Review-g1744419-d5114199-Reviews-Reserva_La_Cofradia-Comala_Pacific_Coast.html',
    img: hospedaje,
  },
  {
    id: 2,
    title: 'Mesa de Regalos',
    button: true,
    buttonLabel: 'Ver Mesa de Regalos',
    url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/50974252',
    img: liverpool,
  },
  {
    id: 3,
    title: 'Amazon wishlist',
    button: true,
    buttonLabel: 'Ver Lista de deseos',
    url: 'https://www.amazon.com.mx/hz/wishlist/ls/2KGPU36MS34EG?ref_=wl_share',
    img: 'data:image/png;base64,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',
  },
];

export const optionsItems = [
  {
    id: '1b',
    label: 'No Asistire',
    value: 0,
  },
  {
    id: '2b',
    label: 'Asistire',
    value: 1,
  },
  {
    id: '3b',
    label: '1 Invitado(s)',
    value: 2,
  },
  {
    id: '4b',
    label: '2 Invitado(s)',
    value: 3,
  },
];

export const socials = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/touchof.tech/',
    icon: instagram,
  },
  {
    id: 'facebook',
    url: 'https://www.facebook.com/touchhoftech',
    icon: facebook,
  },
  {
    id: 'linkTree',
    url: 'https://links.touchof.tech/',
    icon: linkTree,
  },
];

export const MONTHS = {
  0: {
    en: 'January',
    es: 'Enero',
  },
  1: {
    en: 'February',
    es: 'Febrero',
  },
  2: {
    en: 'March',
    es: 'Marzo',
  },
  3: {
    en: 'April',
    es: 'Abril',
  },
  4: {
    en: 'May',
    es: 'Mayo',
  },
  5: {
    en: 'June',
    es: 'Junio',
  },
  6: {
    en: 'July',
    es: 'Julio',
  },
  7: {
    en: 'August',
    es: 'Agosto',
  },
  8: {
    en: 'September',
    es: 'Septiembre',
  },
  9: {
    en: 'October',
    es: 'Octubre',
  },
  10: {
    en: 'November',
    es: 'Noviembre',
  },
  11: {
    en: 'December',
    es: 'Diciembre',
  },
};

export const EVENT = {
  saveTitle: 'Save The Date',
  parents: [
    {
      name: 'Nombre Prueba',
    },
    {
      name: 'Nombre Prueba',
    },
  ],
  godFathers: [
    {
      name: 'Nombre Prueba',
    },
    {
      name: 'Nombre Prueba',
    },
  ],
  ceremonyTime: '05:30 pm',
  partyTime: '7:00 pm',
  dress: 'No vestidos verdes ni blancos',
  present: 'Transferencia o Sobres 🎁.',
  date: 'jan 25 2025 17:30:00',
  month: 0,
};
