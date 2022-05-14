import React from 'react';
import styled from 'styled-components';
import { Logo } from './header';

type Props = {
  copy: string
};

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

const Footer: React.FC<Props> = ({ copy }) => (
  <Wrapper>
    <Logo to="/">Quiz</Logo>
    <p>{copy}</p>
  </Wrapper>
);
export default Footer;
