import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Button from '../atoms/button';

type Props = {
  title: string,
  startQuizFn: Function,
  closeQuiz: Function,
};

const Wrapper = styled.div`
  padding: 5vh 10vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Close = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  font-size: 30px;
  justify-self: end;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.second};
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StartQuiz: React.FC<Props> = ({ title, startQuizFn, closeQuiz }) => (
  <Wrapper>
    <CloseWrapper>
      <Close onClick={() => closeQuiz()}>X</Close>
    </CloseWrapper>
    <Title>{title}</Title>
    <Button type="button" onClick={() => startQuizFn()}>start</Button>
  </Wrapper>

);

export default StartQuiz;
