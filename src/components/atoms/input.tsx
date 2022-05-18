import styled from 'styled-components';

const Input = styled.input`
  background: none;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.second};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Input;
