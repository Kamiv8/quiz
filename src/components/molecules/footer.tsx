import React from 'react';
import styled from 'styled-components';
import { Logo } from './header';

const Wrapper = styled.footer`
  height: 5vh;
  width: calc(100vw - 10px);
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  padding: 0 10vw;
  align-items: center;
  p {
    text-align: center;
    width: 100%;
  }
`;

const Footer = () => (
  <Wrapper>
    <Logo to="/">Quiz</Logo>
    <p>Copyright all rights reserved. 2022</p>
  </Wrapper>
);
export default Footer;
