import React from 'react';
import './App.css';
import Box from './components/atoms/box';
import StartQuiz from './components/molecules/startQuiz';
import { changeLanguage } from './features/language/languageSlice';
import { Language } from './features/language/languageLibraryType';
import { useAppDispatch, useAppSelector } from './app/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const states = useAppSelector((state) => state.language);
  const handleStart = () => {
    // console.log('START');
  };

  return (
    <>
      <button type="button" onClick={() => dispatch(changeLanguage(Language.pl))}>Zamień na pl</button>
      <button type="button" onClick={() => dispatch(changeLanguage(Language.en))}>Zamień na en</button>
      <div className="App">
        <Box>
          <StartQuiz
            closeQuiz={handleStart}
            title={states.language.words.startQuiz}
            startQuizFn={handleStart}
          />
        </Box>
      </div>

    </>
  );
};

export default App;
