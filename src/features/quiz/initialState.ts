import StateType from './stateType';

export interface InitialState {
  state: StateType;
  questionWithAnswers: [
    {
      question: string,
      answers: any,

    },
  ]
}

export const initialState: InitialState = {
  state: 0,
  questionWithAnswers: [
    {
      question: '',
      answers: [],
    },
  ],
};
