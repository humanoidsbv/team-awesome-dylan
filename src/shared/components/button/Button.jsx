import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledButton = styled.section`
  background-color: #35ac45;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: proximanova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 10px;
  width: 100%;

  &[disabled] {
    background-color: #acacac;
    cursor: auto;
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const Button = ({ color, disabled, onClick, text }) => {
  return (
    <StyledButton
      type="button"
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
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
