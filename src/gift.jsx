import React from 'react';

const Gift = (props) => {
  const { id, name, description } = props;

  return (
    <tr>
      <td key={`id-${id}`} id={`id-${id}`}>{id}</td>
      <td key={`name-${id}`} id={`name-${id}`}>{name}</td>
      <td key={`description-${id}`} id={`description-${id}`}>{description}</td>
    </tr>
  );
};

Gift.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

Gift.defaultProps = {
  description: '',
};

export default Gift;
