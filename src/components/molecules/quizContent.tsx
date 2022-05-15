import React from 'react';
import Title from '../atoms/title';
import { AnswerType } from '../../features/quiz/quizApiType';
import Option from '../atoms/option';
import Button from '../atoms/button';
import { useAppSelector } from '../../app/hooks';
import Time from '../atoms/time';
import { TimerType } from '../../features/game/timerType';

type Props = {
  time: TimerType,
  questionNumber: number,
  question: string,
  answers: AnswerType[],
  isActive: boolean,
  tickFn: Function
};

const QuizContent: React.FC<Props> = ({
  time,
  question,
  questionNumber,
  answers,
  isActive,
  tickFn,
}) => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <>
      <div>
        <Time seconds={time.seconds} minutes={time.minutes} />
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
