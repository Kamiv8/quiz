export interface Library {
  home: {
    welcome: string,
    heading1: string,
    heading2: string,
  };
  quizName: {
    html: string,
    css: string,
    js: string,
    angular: string,
    react: string
  };
  words: {
    congratulation: string,
    startQuiz: string,
    correct: string,
    wrong: string,
    finish: string,
    copyright: string,
    back: string,
    next: string,
    time: string,
  }

}

export interface LanguageLibraryType {
  pl: Library,
  en: Library
}
