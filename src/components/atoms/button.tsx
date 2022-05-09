import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.second};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  border: 2px solid ${({ theme }) => theme.colors.second};
  border-radius: 30px;
  padding: 10px 40px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.colors.second};
    background: none;
  }

`;

export default Button;
