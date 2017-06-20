import React from 'react';
import { mountWithIntl } from 'enzyme-react-intl';
import GiftBoard from '../src/gift-board';

test('GiftBoard should contain `no gift wished` by default', () => {
  const component = mountWithIntl(<GiftBoard />);
  const p = component.find('p');
  expect(p.text()).toEqual('no gifts wished...');
});

test('GiftBoard should call handler with data in input on button pressed', () => {
  const onGiftSend = jest.fn();
  const component = mountWithIntl(
    React.createElement(
      GiftBoard,
      { onGiftSend },
    ),
  );

  component.find('input').simulate('change', { target: { value: 'Toaster' } });
  component.find('textarea').simulate('change', { target: { value: 'I want Bosh toater :)' } });
  component.find('form').simulate('submit', { preventDefault() {} });

  const p = component.find('tr').find('#name-0');
  expect(onGiftSend).toBeCalledWith({ description: 'I want Bosh toater :)', name: 'Toaster' });
  expect(p.text()).toEqual('Toaster');
});
