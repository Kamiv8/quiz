import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element[] | JSX.Element
};

const Wrapper = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.black50};
  border: 5px solid ${({ theme }) => theme.colors.second};

`;

const Box: FC<Props> = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

export default Box;
