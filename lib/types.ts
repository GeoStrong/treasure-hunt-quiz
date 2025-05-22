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
  timeStart?: Date | null;
  timeEnd?: Date | null;
  prehistoricQuizz: QuizzInterface;
  egyptQuizz: QuizzInterface;
}

export const defaultLanguage =
  typeof window !== 'undefined' && localStorage.getItem('language')
    ? (localStorage.getItem('language') as LanguageType)
    : 'en';

export const defaultProfile =
  typeof window !== 'undefined' && localStorage.getItem('team')
    ? (JSON.parse(localStorage.getItem('team') || '') as TeamInterface)
    : {
        name: '',
        size: 0,
        points: 0,
        timeStart: null,
        prehistoricQuizz: {
          time: 0,
          question1: { isCorrect: false, hintUsed: false },
          question2: { isCorrect: false, hintUsed: false },
          question3: { isCorrect: false, hintUsed: false },
          passed: false,
        },
        egyptQuizz: {
          time: 0,
          question1: { isCorrect: false, hintUsed: false },
          question2: { isCorrect: false, hintUsed: false },
          question3: { isCorrect: false, hintUsed: false },
          passed: false,
        },
      };
