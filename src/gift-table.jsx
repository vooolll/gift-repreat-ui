import React from 'react';
import { FormattedMessage } from 'react-intl';

const GiftTable = props =>
  <table className="pure-table gift-table">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <FormattedMessage
            id="app.wish_name_heading"
            defaultMessage="Name of your gift"
          />
        </th>
        <th>
          <FormattedMessage
            id="app.wish_description_heading"
            defaultMessage="Description"
          />
        </th>
      </tr>
    </thead>
    <tbody id="gifts">
      {props.gifts}
    </tbody>
  </table>;

GiftTable.propTypes = {
  gifts: React.PropTypes.arrayOf(React.PropTypes.element),
};

GiftTable.defaultProps = {
  gifts: [],
};

export default GiftTable;
