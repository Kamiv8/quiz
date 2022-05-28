import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VariantType from '../features/quiz/variantType';
import { TimerType } from '../features/quiz/timerType';
import environment from '../environment';

const useSaveResults = (tickedAnswers: VariantType[]) => {
  const navigate = useNavigate();
  const [results, setResults] = useState<{ correct: number, wrong: number }>();
  const [username, setUsername] = useState<string>('');
  const { pathname } = useLocation();
  const save = (time: TimerType) => {
    axios.post(`${environment.url}api/save`, {
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
      `${environment.url}api/summary`,
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
