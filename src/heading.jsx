import React from 'react';
import { FormattedMessage } from 'react-intl';

const Heading = () => <h1>
  <FormattedMessage
    id="app.heading"
    defaultMessage="Welcome to your gift board"
  /></h1>;

export default Heading;
