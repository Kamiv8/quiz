import VariantType from './variantType';

export interface AnswerType {
  variant: VariantType,
  answer: string,
}

export interface QuestionWithAnswers {
  question: string,
  answers: AnswerType[]
}

export interface QuestionModel {
  questions: QuestionWithAnswers[]

}
