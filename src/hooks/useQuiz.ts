import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useState } from 'react';
// import testQuestion from '../features/quiz/testQuestion';

const useQuiz = (type: string) => {
  const {
    seconds, minutes, start,
  } = useStopwatch({ autoStart: false });
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  console.log(type);
  console.log(isActive);
  const closeQuiz = () => {
    navigate('/');
  };

  const startQuiz = () => {
    start();
    setIsActive(true);
  };

  return {
    seconds, minutes, closeQuiz, startQuiz, isActive,
  };
};
export default useQuiz;
