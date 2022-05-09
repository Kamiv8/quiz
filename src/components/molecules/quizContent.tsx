import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import { AnswerType } from '../../features/quiz/quizApiType';
import Option from '../atoms/option';
import Button from '../atoms/button';
import { useAppSelector } from '../../app/hooks';

type Props = {
  time: string,
  questionNumber: number,
  question: string,
  answers: AnswerType[],
  isActive: boolean,
  tickFn: Function
};

const Timer = styled.span`

`;

const QuizContent: React.FC<Props> = ({
  time,
  question,
  questionNumber,
  answers,
  isActive, tickFn,
}) => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <>
      <div>
        <Timer>{time}</Timer>
        <Title>{question}</Title>
        <span>
          {questionNumber}
          /10
        </span>
      </div>
      <div>
        {answers.map((item) => (
          <Option
            key={item.variant}
            variant={item.variant}
            answer={item.answer}
            tickFn={tickFn}
            active={isActive}
          />
        ))}
      </div>
      <div>
        <Button>{language.words.back}</Button>
        <Button>{language.words.next}</Button>
      </div>
    </>

  );
};

export default QuizContent;
