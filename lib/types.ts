export type LanguageType = 'en' | 'et' | 'ru';

export interface QuizzQuestion {
  isCorrect: boolean;
  hintUsed: boolean;
}

export interface QuizzInterface {
  time: number;
  question1: QuizzQuestion;
  question2: QuizzQuestion;
  question3: QuizzQuestion;
  passed: boolean;
}

export interface TeamInterface {
  name: string;
  size: number;
  points: number;
  prehistoricQuizz: QuizzInterface;
}

export const defaultLanguage =
  typeof window !== 'undefined' && localStorage.getItem('language')
    ? (localStorage.getItem('language') as LanguageType)
    : 'en';
