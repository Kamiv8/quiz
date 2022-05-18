import { TimerType } from '../quiz/timerType';

export enum QuizName {
  html = 'html',
  css = 'css',
  js = 'js',
  angular = 'angular',
  react = 'react',
}

export interface DataBestPlayersType {
  username: string,
  quiz: QuizName,
  time: TimerType,
  wrong: number,
  correct: number
}
