import React from 'react';
import styled from 'styled-components';
import background from '../../assets/background1.svg';
import StartQuiz from '../molecules/startQuiz';
import QuizContent from '../molecules/quizContent';
import { TimerType } from '../../features/game/timerType';

type Props = {
  quizName: string,
  startQuizFn: Function,
  closeQuiz: Function,
  isActive: boolean,
  time: TimerType
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
  background-color: ${({ theme }) => theme.colors.black50};
  border: 5px solid ${({ theme }) => theme.colors.second};
`;

const QuizTemplate: React.FC<Props> = ({
  quizName, startQuizFn, closeQuiz, isActive, time,
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
                questionNumber={1}
                question="fdsfds"
                answers={[]}
                isActive
                tickFn={() => console.log('ta')}
              />
            )
      }

    </Content>
  </Wrapper>
);

export default QuizTemplate;
