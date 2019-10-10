import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px ${prop => (prop.isValid ? '#ced0da' : '#fb6375')};
  box-sizing: border-box;
  color: #354052;
  display: block;
  font-family: proximanova;
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  margin-top: 7px;
  padding-left: 10px;
`;

Input.propTypes = {
  isValid: PropTypes.bool
};

export default Input;
