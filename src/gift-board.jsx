import React from 'react';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import GiftTable from './gift-table';
import Gift from './gift';

export default class GiftBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      name: '',
      errorMessage: '',
    };

    this.onNameChange = (e) => {
      this.setState({ errorMessage: '', name: e.target.value });
    };

    this.onDescriptionChange = (e) => {
      this.setState({ errorMessage: '', description: e.target.value });
    };

    this.onGiftSubmit = (e) => {
      e.preventDefault();
      const { name, gifts, description } = this.state;
      this.props.onGiftSend({ name, description });
      if (name === '') {
        this.setState({ errorMessage: 'name of a gift is required' });
      } else {
        const gift = { name, description };
        this.setState({
          gifts: _.concat(gifts, gift),
          name: '',
          description: '',
        });
      }
    };
  }

  messageOrGifts() {
    const { gifts } = this.state;
    const giftComponents = gifts.map((gift, i) =>
      <Gift key={gift.name} id={i} name={gift.name} description={gift.description} />);
    const giftTable = <GiftTable gifts={giftComponents} />;
    if (gifts.length === 0) {
      return (
        <div>
          {giftTable}
          <p>
            <FormattedMessage id="app.no_gifts" defaultMessage="no gifts wished..." />
          </p>
        </div>
      );
    }
    return (
      <div>
        {giftTable}
      </div>
    );
  }

  render() {
    const { name, description, errorMessage } = this.state;

    return (
      <div className="pure-g">
        <div className="pure-u-5-5 gift-table-margin-botton">
          {this.messageOrGifts()}
        </div>
        <div className="pure-u-5-5">
          <legend>
            <FormattedMessage id="app.enter_wish" defaultMessage="Enter your wishes here" />
          </legend>
          <hr />
          <form className="pure-form pure-form-stacked" onSubmit={this.onGiftSubmit}>
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="gift-name">
                  <FormattedMessage
                    id="app.wish_name"
                    defaultMessage="Name of your gift, Example: Toaster"
                  />
                </label>
                <input
                  type="text" id="gift-name" value={name}
                  onChange={this.onNameChange}
                />
                <span className="pure-form-message">{errorMessage}</span>
              </div>
              <div className="pure-control-group">
                <label htmlFor="gift-description">
                  <FormattedMessage
                    id="app.wish_description"
                    defaultMessage="Description of your gift, Example: Toaster should be black"
                  />
                </label>
                <textarea
                  id="gift-description" value={description}
                  onChange={this.onDescriptionChange}
                />
              </div>
              <div className="pure-controls">
                <button className="pure-button">
                  <FormattedMessage id="app.wish_button" defaultMessage="Попросить" />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }

}

GiftBoard.propTypes = {
  onGiftSend: React.PropTypes.func,
};

GiftBoard.defaultProps = {
  onGiftSend: () => {},
};
