import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, handleClick, buttonActive }) => {
  // const {text} = props;
  const clickHandler = buttonActive
    ? handleClick
    : () => console.log('Fields are no valid');

  const classes = buttonActive
    ? 'text-center custom-button'
    : 'text-center custom-button no-valid';

  return (
    <div className={classes} onClick={clickHandler}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
