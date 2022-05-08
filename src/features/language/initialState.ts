import { InitialState } from './languageLibraryType';

const initialState: InitialState = {
  language: {
    home: {
      welcome: 'Check your knowledge about FrontEnd',
      heading1: 'Our Quiz',
      heading2: 'Ranking',
    },
    quizName: {
      html: 'Quiz about html',
      css: 'Quiz about css',
      js: 'Quiz about js',
      angular: 'Quiz about angular',
      react: 'Quiz about react',
    },
    words: {
      congratulation: 'Congratulation',
      startQuiz: 'Do you want to start quiz?',
      correct: 'correct answers',
      wrong: 'wrong answers',
      finish: 'finish',
      copyright: 'Copyright all rights reserved. 2022',
      back: 'back',
      next: 'next',
      time: 'time',
    },
  },
};
export default initialState;
