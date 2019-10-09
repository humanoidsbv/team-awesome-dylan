import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputField.module.css';

const InputField = ({ name, value, isValid, onBlur, setInputValue }) => {
  return (
    <input
      className={`${styles.inputField} ${isValid === false &&
        styles.inputFieldInvalid}`}
      name={name}
      onBlur={onBlur}
      required
      maxLength="35"
      minLength="2"
      value={value}
      onChange={({ target }) => setInputValue(target.value)}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  setInputValue: PropTypes.func
};

InputField.defaultProps = {
  isValid: true,
  name: 'name',
  setInputValue: null
};

export default InputField;
