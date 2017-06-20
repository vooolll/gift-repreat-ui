import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../src/gift';
import GiftTable from '../src/gift-table';

test('Gift table must have Gift prop', () => {
  const gift = shallow(<Gift id={0} name={'Toaster'} description={''} />);
  const giftTable = shallow(<GiftTable gifts={[gift]} />);
  expect(giftTable.find('#gifts').text()).toEqual(gift.text());
});
