import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
