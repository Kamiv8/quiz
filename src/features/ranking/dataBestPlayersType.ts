export enum QuizName {
  html = 'html',
  css = 'css',
  js = 'js',
  angular = 'angular',
  react = 'react',
}

export interface DataBestPlayersType {
  username: string,
  quizName: QuizName,
  time: string
}
