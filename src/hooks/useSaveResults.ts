import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VariantType from '../features/quiz/variantType';
import { TimerType } from '../features/quiz/timerType';

const useSaveResults = (tickedAnswers: VariantType[]) => {
  const navigate = useNavigate();
  const [results, setResults] = useState<{ correct: number, wrong: number }>();
  const [username, setUsername] = useState<string>('');
  const { pathname } = useLocation();
  const save = (time: TimerType) => {
    axios.post('http://localhost:8080/api/save', {
      username,
      time,
      quiz: pathname.slice(1, pathname.length),
      correct: results?.correct,
      wrong: results?.wrong,

    });
    navigate('/');
  };

  useEffect(() => {
    axios.post(
      'http://localhost:8080/api/summary',
      { type: pathname.slice(1, pathname.length), answers: tickedAnswers },
    ).then((x) => setResults(x.data));
  }, [pathname, tickedAnswers]);

  const backToHome = () => {
    navigate('/');
  };

  return {
    save, backToHome, results, setUsername,
  };
};

export default useSaveResults;
