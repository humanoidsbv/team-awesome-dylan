import styled from 'styled-components';

interface SharedInputInterface {
  isValid?: boolean;
  isMultiLine?: boolean;
}

const Input = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px ${(prop: SharedInputInterface): string => (prop.isValid ? '#ced0da' : '#fb6375')};
  box-sizing: border-box;
  color: #354052;
  display: block;
  font-family: proximanova;
  font-size: 14px;
  font-weight: bold;
  height: ${(prop: SharedInputInterface): string => (prop.isMultiLine === true ? '80px' : '36px')};
  margin-top: 7px;
  padding-left: 10px;
`;

export default Input;
