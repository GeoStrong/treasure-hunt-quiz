export type LanguageType = 'en' | 'et' | 'ru';

export interface GameTimeInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface QuizzQuestion {
  isCorrect: boolean;
  hintUsed: boolean;
  blocked?: boolean;
}

export interface QuizzInterface {
  question1: QuizzQuestion;
  question2: QuizzQuestion;
  question3: QuizzQuestion;
  passed: boolean;
}

export interface TeamInterface {
  name: string;
  size: number;
  points: number;
  timeStart?: Date | null;
  timeEnd?: Date | null;
  prehistoricQuizz: QuizzInterface;
  egyptQuizz: QuizzInterface;
  medievalQuizz: QuizzInterface;
  victorianQuizz: QuizzInterface;
  '1980Quizz': QuizzInterface;
  futureQuizz: QuizzInterface;
  gameTime?: GameTimeInterface;
}

export const defaultLanguage =
  typeof window !== 'undefined' && localStorage.getItem('language')
    ? (localStorage.getItem('language') as LanguageType)
    : 'en';

export const emptyRecord = {
  name: '',
  size: 0,
  points: 0,
  timeStart: null,
  timeEnd: null,
  gameTime: undefined,
  prehistoricQuizz: {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
  egyptQuizz: {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
  medievalQuizz: {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
  victorianQuizz: {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
  '1980Quizz': {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
  futureQuizz: {
    question1: { isCorrect: false, hintUsed: false },
    question2: { isCorrect: false, hintUsed: false },
    question3: { isCorrect: false, hintUsed: false },
    passed: false,
  },
};

export const defaultProfile =
  typeof window !== 'undefined' && localStorage.getItem('team')
    ? (JSON.parse(localStorage.getItem('team') || '') as TeamInterface)
    : emptyRecord;
