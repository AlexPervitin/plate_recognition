import ArrowSortIcon from '@/assets/images/cars/ArrowSortIcon';

const testImg = 'https://i.ibb.co/QMjR69x/TestImg.png';

export const APP_THEME = 'app-theme';
export const TABLE_DATA = [
  {
    id: 1,
    number: testImg,
    text: 'С 007 ТМ 777',
    time: '15.01.24 12:30:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 2,
    number: testImg,
    text: 'Х 149 КА 178',
    time: '15.01.24 12:31:15',
    camera: '#243_1 Cam_street 64566',
    status: 'yellow',
  },
  {
    id: 3,
    number: testImg,
    text: 'С 007 ТМ 777',
    time: '15.01.24 12:32:15',
    camera: '#243_1 Cam_street 64566',
    status: 'red',
    baseStatus: 'green',
  },
  {
    id: 4,
    number: testImg,
    text: 'Х 777 ОР 777',
    time: '15.01.24 12:33:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 5,
    number: testImg,
    text: 'В 878 ХН 750',
    time: '15.01.24 12:34:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
    baseStatus: 'red',
  },
  {
    id: 6,
    number: testImg,
    text: 'Х 149 КА 178',
    time: '15.01.24 12:35:15',
    camera: '#243_1 Cam_street 64566',
    status: 'yellow',
  },
  {
    id: 7,
    number: testImg,
    text: 'С 007 ТМ 777',
    time: '15.01.24 12:36:15',
    camera: '#243_1 Cam_street 64566',
    status: 'red',
  },
  {
    id: 8,
    number: testImg,
    text: 'Х 777 ОР 777',
    time: '15.01.24 12:37:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 9,
    number: testImg,
    text: 'В 878 ХН 750',
    time: '15.01.24 12:38:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 10,
    number: testImg,
    text: 'С 007 ТМ 777',
    time: '15.01.24 12:39:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 11,
    number: testImg,
    text: 'Х 149 КА 178',
    time: '15.01.24 12:40:15',
    camera: '#243_1 Cam_street 64566',
    status: 'yellow',
  },
  {
    id: 12,
    number: testImg,
    text: 'С 007 ТМ 777',
    time: '15.01.24 12:41:15',
    camera: '#243_1 Cam_street 64566',
    status: 'red',
  },
  {
    id: 13,
    number: testImg,
    text: 'Х 777 ОР 777',
    time: '15.01.24 12:42:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
  {
    id: 14,
    number: testImg,
    text: 'В 878 ХН 750',
    time: '15.01.24 12:43:15',
    camera: '#243_1 Cam_street 64566',
    status: 'green',
  },
];

export const THEAD_TABLE_RESULT = [
  { title: 'Number' },
  {
    title: 'Text',
    icon: ArrowSortIcon,
    onClick: () => {
      console.log('Sort By Text');
    },
  },
  {
    title: 'Time / Camera',
    icon: ArrowSortIcon,
    onClick: () => {
      console.log('Sort By Time');
    },
  },
  { title: '' },
];

export const THEAD_TABLE_RESULT_WITH_OPT = [
  { title: 'Number' },
  {
    title: 'Time',
    icon: ArrowSortIcon,
    onClick: () => {
      console.log('Sort By Text');
    },
  },
  {
    title: 'Camera',
    icon: ArrowSortIcon,
    onClick: () => {
      console.log('Sort By Time');
    },
  },
  { title: '' },
];

export const SELECT_HEADER_OPTIONS = [
  { key: 'street', value: 'Street' },
  { key: 'area', value: 'Area' },
  { key: 'city', value: 'City' },
];
