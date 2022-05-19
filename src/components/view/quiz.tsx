import React from 'react';
import { useLocation } from 'react-router-dom';
import QuizTemplate from '../templates/quizTemplate';
import useQuiz from '../../hooks/useQuiz';
import { useAppSelector } from '../../app/hooks';

const Quiz = () => {
  const location = useLocation();
  const { library } = useAppSelector((state) => state.language);
  const {
    closeQuiz,
    startQuiz,
    isActive,
    minutes,
    seconds,
    questionNumber,
    nextQuestion,
    finishQuiz,
    actualQuestion,
    tickAnswer,
    selected,
    answers,
  } = useQuiz(location.pathname);
  return (

    <QuizTemplate
      quizName={library.words.startQuiz}
      closeQuiz={closeQuiz}
      startQuizFn={startQuiz}
      isActive={isActive}
      time={{ seconds, minutes }}
      questionNumber={questionNumber}
      nextQuestion={nextQuestion}
      answers={actualQuestion?.answers}
      question={actualQuestion?.question}
      finishQuiz={finishQuiz}
      tickAnswer={tickAnswer}
      selected={selected}
      tickedAnswers={answers}
    />
  );
};

export default Quiz;
