import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SelectLanguage from '../atoms/selectLanguage';

const WrapperHeader = styled.header`
  height: 10vh;
  display: flex;
  padding: 0 10vw;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.second};
  font-size: 20px;
  text-decoration: none;
`;

const Header = () => (
  <WrapperHeader>
    <Logo to="/">Quiz</Logo>
    <SelectLanguage />
  </WrapperHeader>

);

export default Header;
