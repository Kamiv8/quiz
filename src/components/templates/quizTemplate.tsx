import React from 'react';
import styled from 'styled-components';
import background from '../../assets/background1.svg';
import StartQuiz from '../molecules/startQuiz';
import QuizContent from '../molecules/quizContent';
import { TimerType } from '../../features/game/timerType';
import { AnswerType } from '../../features/quiz/quizApiType';
import VariantType from '../../features/quiz/variantType';

type Props = {
  quizName: string,
  startQuizFn: Function,
  closeQuiz: Function,
  isActive: boolean,
  time: TimerType,
  questionNumber: number,
  nextQuestion: Function,
  question: string,
  answers: AnswerType[],
  finishQuiz: Function,
  tickAnswer: Function,
  selected: VariantType | null,
};

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  height: 60%;
  padding: 5vh 10vw;
  background-color: ${({ theme }) => theme.colors.black50};
  border: 5px solid ${({ theme }) => theme.colors.second};
  max-width: 900px;
  max-height: 550px;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    padding: 1vh 2vw;
  }
`;

const QuizTemplate: React.FC<Props> = ({
  quizName, startQuizFn, closeQuiz, isActive,
  time,
  questionNumber,
  nextQuestion, answers, question, finishQuiz,
  tickAnswer, selected,
}) => (
  <Wrapper>
    <Content>
      {
          !isActive ? (
            <StartQuiz
              title={quizName}
              startQuizFn={startQuizFn}
              closeQuiz={closeQuiz}
            />
          )
            : (
              <QuizContent
                time={time}
                questionNumber={questionNumber}
                question={question}
                answers={answers}
                tickFn={tickAnswer}
                nextQuestion={nextQuestion}
                finishQuiz={finishQuiz}
                selected={selected}
              />
            )
      }
    </Content>
  </Wrapper>
);

export default QuizTemplate;
