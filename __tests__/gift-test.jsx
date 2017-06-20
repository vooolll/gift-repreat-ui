import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../src/gift';

test('Gift should contain name and description', () => {
  const name = 'Coffee machine';
  const id = 0;
  const description = 'I want automatic coffee machine';

  const gift = shallow(<Gift id={id} name={name} description={description} />);

  expect(gift.find(`#name-${id}`).text()).toEqual(name);
  expect(gift.find(`#description-${id}`).text()).toEqual(description);
});
