import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ color, disabled, onClick, text }) => {
  return (
    <button
      type="button"
      className={`${styles.buttonDefaultColor} ${color === 'red' &&
        styles.buttonColorRed} || ${color === 'blue' &&
        styles.buttonColorBlue} || ${color === 'yellow' &&
        styles.buttonColorYellow}`}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  color: '',
  disabled: false,
  text: 'insert text'
};

export default Button;
