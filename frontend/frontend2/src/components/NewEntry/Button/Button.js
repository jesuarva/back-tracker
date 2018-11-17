import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, data, handleClick }) => {
  // const {text} = props;
  return (
    <div className="text-center custom-button" onClick={handleClick}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
