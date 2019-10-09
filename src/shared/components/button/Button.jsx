import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ text, color }) => {
  return (
    <button
      type="button"
      className={`${styles.buttonDefaultColor} ${color === 'red' &&
        styles.buttonColorRed} || ${color === 'blue' &&
        styles.buttonColorBlue} || ${color === 'yellow' &&
        styles.buttonColorYellow}`}
      color={color}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  text: 'insert text',
  color: ''
};

export default Button;
