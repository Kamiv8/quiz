import React from 'react';
import styled from 'styled-components';
import background from '../../assets/background1.svg';
import { TimerType } from '../../features/quiz/timerType';
import { AnswerType } from '../../features/quiz/quizApiType';
import VariantType from '../../features/quiz/variantType';
import GameStateType from '../../features/quiz/gameStateType';
import StartQuiz from '../molecules/startQuiz';
import QuizContent from '../molecules/quizContent';
import FinishQuiz from '../molecules/FinishQuiz';

type Props = {
  quizName: string,
  startQuizFn: Function,
  closeQuiz: Function,
  isActive: GameStateType,
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
        (() => {
          switch (isActive) {
            case GameStateType.start:
              return (
                <StartQuiz
                  title={quizName}
                  startQuizFn={startQuizFn}
                  closeQuiz={closeQuiz}
                />
              );
            case GameStateType.content:
              return (
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
              );
            case GameStateType.finish:
              return <FinishQuiz time={{ seconds: 21, minutes: 32 }} correct={21} wrong={32} />;
            default:
              return '';
          }
        })()
      }
    </Content>
  </Wrapper>
);

export default QuizTemplate;
