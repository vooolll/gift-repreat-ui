import React from 'react';
import { mountWithIntl } from 'enzyme-react-intl';
import Heading from '../src/heading';


test('Heading contains text `Welcome to Gift-Repeat`', () => {
  const heading = mountWithIntl(<Heading />);

  expect(heading.text()).toEqual('Welcome to your gift board');
});
