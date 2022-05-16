import VariantType from './variantType';
import { QuizName } from '../ranking/dataBestPlayersType';

export interface AnswerType {
  variant: VariantType,
  answer: string,
}

export interface QuestionWithAnswers {
  question: string,
  answers: AnswerType[]
}

export interface QuestionModel {
  type: QuizName,
  questions: QuestionWithAnswers[]
}

export interface StatisticType {
  correct: number,
  wrong: number,
  time: {
    seconds: number,
    minutes: number
  }
}
