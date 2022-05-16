import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import testQuestion from '../features/quiz/testQuestion';
import { QuestionWithAnswers } from '../features/quiz/quizApiType';
import VariantType from '../features/quiz/variantType';
import GameStateType from '../features/quiz/gameStateType';
// import { useState } from 'react';
// import testQuestion from '../features/quiz/testQuestion';

const useQuiz = (type?: string | undefined) => {
  const {
    seconds, minutes, start, reset, pause,
  } = useStopwatch({ autoStart: false });
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<GameStateType>(GameStateType.start);
  const [actualQuestion, setActualQuestion] = useState<QuestionWithAnswers>({ answers: [], question: '' });
  // eslint-disable-next-line prefer-const
  let [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<VariantType[]>([]);
  const [selected, setSelected] = useState<VariantType | null>(null);

  const closeQuiz = () => {
    navigate('/');
    reset();
    console.log(type);
  };

  const startQuiz = () => {
    start();
    setIsActive(GameStateType.content);
    setActualQuestion(testQuestion[questionNumber]);
  };

  const tickAnswer = (variant: VariantType) => {
    setSelected((prevState) => (prevState === variant ? null : variant));
  };

  const nextQuestion = () => {
    setActualQuestion(testQuestion[questionNumber]);
    if (selected !== null) {
      setAnswers((prevState) => [...prevState, selected]);
      setQuestionNumber(questionNumber += 1);
      setSelected(null);
    }
  };
  const finishQuiz = () => {
    if (answers.length === 9 && selected !== null) {
      setAnswers([...answers, selected]);
      pause();
      setIsActive(GameStateType.finish);
    }
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
    finishQuiz,
    selected,
  };
};
export default useQuiz;
