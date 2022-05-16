import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import testQuestion from '../features/quiz/testQuestion';
import { QuestionWithAnswers } from '../features/quiz/quizApiType';
// import { useState } from 'react';
// import testQuestion from '../features/quiz/testQuestion';

const useQuiz = (type?: string | undefined) => {
  const {
    seconds, minutes, start, reset,
  } = useStopwatch({ autoStart: false });
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [actualQuestion, setActualQuestion] = useState<QuestionWithAnswers>({ answers: [], question: '' });
  // eslint-disable-next-line prefer-const
  let [questionNumber, setQuestionNumber] = useState<number>(0);

  const closeQuiz = () => {
    navigate('/');
    reset();
    console.log(type);
  };

  const startQuiz = () => {
    start();
    setIsActive(true);
    setActualQuestion(testQuestion[questionNumber]);
  };

  const tickAnswer = () => {

  };

  const nextQuestion = () => {
    setActualQuestion(testQuestion[questionNumber]);
    setQuestionNumber(questionNumber += 1);
  };

  return {
    seconds,
    minutes,
    closeQuiz,
    startQuiz,
    isActive,
    tickAnswer,
    nextQuestion,
    actualQuestion,
    questionNumber,
  };
};
export default useQuiz;
