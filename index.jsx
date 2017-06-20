import ReactDOM from 'react-dom';
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import Heading from './src/heading';
import GiftBoard from './src/gift-board';

addLocaleData([...en, ...ru]);

const messages = {
  en: {
    'app.enter_wish': 'Enter your wishes here',
  },
  ru: {
    'app.no_gifts': 'Доска пустая, добавьте пожелания...',
    'app.heading': 'Доска пожеланий',
    'app.enter_wish': 'Введите ваши пожелания',
    'app.wish_name_heading': 'Название подарка',
    'app.wish_description_heading': 'Описание подарка',
    'app.wish_name': 'Введите название подарка. Например: Тостер',
    'app.wish_description': 'Введите описание подарка. Например: Модель или ссылка на товар',
    'app.wish_button': 'Сохранить',
  },
};

ReactDOM.render(
  <IntlProvider locale={'ru'} messages={messages.ru}>
    <Heading />
  </IntlProvider>,
  document.getElementById('heading'),
);

ReactDOM.render(
  <IntlProvider locale={'ru'} messages={messages.ru}>
    <GiftBoard />
  </IntlProvider>,
  document.getElementById('gift-board'),
);

export default function getMessages() {
  return messages;
}
