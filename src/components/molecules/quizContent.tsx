import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/title';
import { AnswerType } from '../../features/quiz/quizApiType';
import Option from '../atoms/option';
import Button from '../atoms/button';
import { useAppSelector } from '../../app/hooks';
import Time from '../atoms/time';
import { TimerType } from '../../features/game/timerType';
import Paragraph from '../atoms/paragraph';

type Props = {
  time: TimerType,
  questionNumber: number,
  question: string,
  answers: AnswerType[],
  isActive: boolean,
  tickFn: Function,
  nextQuestion: Function
};

const AnswersWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: repeat(4,1fr);
  justify-content: center;
  align-items: center;
  @media screen and ${({ theme }) => theme.device.laptopL} {
  height: 50%;  
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  margin: 1vh 0;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    margin: 5vh 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const QuizContent: React.FC<Props> = ({
  time,
  question,
  questionNumber,
  answers,
  isActive,
  tickFn,
  nextQuestion,
}) => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <>
      <HeaderWrapper>
        <Time seconds={time.seconds} minutes={time.minutes} />
        <Title>{question}</Title>
        <Paragraph>
          {questionNumber + 1}
          /10
        </Paragraph>
      </HeaderWrapper>
      <AnswersWrapper>
        {answers.map((item) => (
          <Option
            key={item.variant}
            variant={item.variant}
            answer={item.answer}
            tickFn={tickFn}
            active={isActive}
          />
        ))}
      </AnswersWrapper>
      <ButtonWrapper>
        { questionNumber <= 8
          ? (<Button onClick={() => nextQuestion()}>{language.words.next}</Button>)
          : (<Button>FINISH</Button>) }

      </ButtonWrapper>
    </>
  );
};

export default QuizContent;
