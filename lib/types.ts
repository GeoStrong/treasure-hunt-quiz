export type LanguageType = 'en' | 'et' | 'ru' | 'ka';

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

export type eraQuizz =
  | 'prehistoricQuizz'
  | 'egyptQuizz'
  | 'medievalQuizz'
  | 'victorianQuizz'
  | '1980Quizz'
  | 'futureQuizz';

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

export interface Language {
  WELCOME_PAGE_TITLE: string;
  WELCOME_PAGE_PLAY_BUTTON: string;
  LOADING_PAGE_TITLE: string;
  LOADING_PAGE_DESCRIPTION: string;
  NOT_FOUND_TITLE: string;
  NOT_FOUND_DESCRIPTION: string;
  NOT_FOUND_BUTTON: string;
  SUPPORT_DESCRIPTION_1: string;
  SUPPORT_DESCRIPTION_2: string;
  SUPPORT_DESCRIPTION_3: string;
  SUPPORT_DESCRIPTION_4: string;
  SUPPORT_DESCRIPTION_5: string;
  SUPPORT_DESCRIPTION_6: string;
  SUPPORT_TITLE: string;
  SUPPORT_HINT_BUTTON: string;
  SUPPORT_SKIP_BUTTON: string;
  SUPPORT_COLLAPSE_BUTTON: string;
  SUPPORT_COMPLETED_BUTTON: string;
  SUPPORT_LOCATION_BUTTON: string;
  ABOUT_TRIGGER: string;
  ABOUT_TITLE: string;
  ABOUT_HEADER_TITLE_1: string;
  ABOUT_DESCRIPTION_1: string;
  ABOUT_DESCRIPTION_2: string;
  ABOUT_HEADER_TITLE_2: string;
  ABOUT_DESCRIPTION_3: string;
  ABOUT_DESCRIPTION_4: string;
  ABOUT_DESCRIPTION_5: string;
  ABOUT_DESCRIPTION_6: string;
  ABOUT_HEADER_TITLE_3: string;
  ABOUT_DESCRIPTION_7: string;
  INTRODUCTION_PAGE_TITLE: string;
  INTRODUCTION_PAGE_DESCRIPTION: string;
  INTRODUCTION_PAGE_PLAY_BUTTON: string;
  SIGNUP_PAGE_TITLE: string;
  SIGNUP_INPUT_NAME_PLACEHOLDER: string;
  SIGNUP_INPUT_SIZE_PLACEHOLDER: string;
  SIGNUP_PAGE_BUTTON: string;
  SIGNUP_PAGE_ERROR: string;
  GAME_PAGE_TITLE: string;
  GAME_PAGE_DESCRIPTION: string;
  GAME_PAGE_BUTTON: string;
  GAME_PAGE_HOW_IT_WORKS: string;
  GAME_PAGE_HOW_IT_WORKS_LIST: string[];
  QUIZZ_INCORRECT_ANSWER: string;
  QUIZZ_CORRECT_ANSWER: string;
  QUIZZ_TYPE_YOUR_ANSWER: string;
  QUIZZ_NEXT_QUESTION: string;
  QUIZZ_CHECK_ANSWER: string;
  QUIZZ_QUESTION_HINT_WARNING_TITLE: string;
  QUIZZ_QUESTION_HINT_WARNING_DESCRIPTION: string;
  QUIZZ_QUESTION_SURRENDER_WARNING_TITLE: string;
  QUIZZ_QUESTION_SELECT_WARNING: string;
  QUIZZ_QUESTION_SURRENDER_WARNING_DESCRIPTION: string;
  QUIZZ_QUESTION_REBUS: string;
  QUIZZ_QUESTION_MAZE: string;
  PREHISTORIC_PAGE_TITLE: string;
  PREHISTORIC_QUIZZ_QUESTION_1: string;
  PREHISTORIC_QUIZZ_QUESTION_1_HINT: string;
  PREHISTORIC_QUIZZ_ANSWER_1: string;
  PREHISTORIC_QUIZZ_1_SELECT_OPTION_1: string;
  PREHISTORIC_QUIZZ_1_SELECT_OPTION_2: string;
  PREHISTORIC_QUIZZ_1_SELECT_OPTION_3: string;
  PREHISTORIC_QUIZZ_1_SELECT_OPTION_4: string;
  PREHISTORIC_QUIZZ_QUESTION_2: string;
  PREHISTORIC_QUIZZ_QUESTION_2_HINT: string;
  PREHISTORIC_QUIZZ_ANSWER_2: string;
  PREHISTORIC_QUIZZ_2_SELECT_OPTION_1: string;
  PREHISTORIC_QUIZZ_2_SELECT_OPTION_2: string;
  PREHISTORIC_QUIZZ_2_SELECT_OPTION_3: string;
  PREHISTORIC_QUIZZ_2_SELECT_OPTION_4: string;
  PREHISTORIC_QUIZZ_QUESTION_3: string;
  PREHISTORIC_QUIZZ_QUESTION_3_HINT: string;
  PREHISTORIC_QUIZZ_ANSWER_3: string;
  PREHISTORIC_QUIZZ_3_SELECT_OPTION_1: string;
  PREHISTORIC_QUIZZ_3_SELECT_OPTION_2: string;
  PREHISTORIC_QUIZZ_3_SELECT_OPTION_3: string;
  PREHISTORIC_QUIZZ_3_SELECT_OPTION_4: string;
  NEW_STEP_TITLE_1: string;
  NEW_STEP_TITLE_2: string;
  NEW_STEP_TITLE_3: string;
  NEW_STEP_SCAN_BUTTON: string;
  OOPSIE_PAGE_TITLE: string;
  OOPSIE_PAGE_BUTTON: string;
  EGYPT_PAGE_TITLE: string;
  EGYPT_QUIZZ_QUESTION_1: string;
  EGYPT_QUIZZ_QUESTION_1_HINT: string;
  EGYPT_QUIZZ_ANSWER_1: string;
  EGYPT_QUIZZ_1_SELECT_OPTION_1: string;
  EGYPT_QUIZZ_1_SELECT_OPTION_2: string;
  EGYPT_QUIZZ_1_SELECT_OPTION_3: string;
  EGYPT_QUIZZ_1_SELECT_OPTION_4: string;
  EGYPT_QUIZZ_QUESTION_2: string;
  EGYPT_QUIZZ_QUESTION_2_HINT: string;
  EGYPT_QUIZZ_ANSWER_2: string;
  EGYPT_QUIZZ_2_SELECT_OPTION_1: string;
  EGYPT_QUIZZ_2_SELECT_OPTION_2: string;
  EGYPT_QUIZZ_2_SELECT_OPTION_3: string;
  EGYPT_QUIZZ_2_SELECT_OPTION_4: string;
  EGYPT_QUIZZ_QUESTION_3: string;
  EGYPT_QUIZZ_QUESTION_3_HINT: string;
  EGYPT_QUIZZ_ANSWER_3: string;
  EGYPT_QUIZZ_3_SELECT_OPTION_1: string;
  EGYPT_QUIZZ_3_SELECT_OPTION_2: string;
  EGYPT_QUIZZ_3_SELECT_OPTION_3: string;
  EGYPT_QUIZZ_3_SELECT_OPTION_4: string;
  MEDIEVAL_PAGE_TITLE: string;
  MEDIEVAL_QUIZZ_QUESTION_1: string;
  MEDIEVAL_QUIZZ_QUESTION_1_HINT: string;
  MEDIEVAL_QUIZZ_ANSWER_1: string;
  MEDIEVAL_QUIZZ_1_SELECT_OPTION_1: string;
  MEDIEVAL_QUIZZ_1_SELECT_OPTION_2: string;
  MEDIEVAL_QUIZZ_1_SELECT_OPTION_3: string;
  MEDIEVAL_QUIZZ_1_SELECT_OPTION_4: string;
  MEDIEVAL_QUIZZ_QUESTION_2: string;
  MEDIEVAL_QUIZZ_QUESTION_2_HINT: string;
  MEDIEVAL_QUIZZ_ANSWER_2: string;
  MEDIEVAL_QUIZZ_2_SELECT_OPTION_1: string;
  MEDIEVAL_QUIZZ_2_SELECT_OPTION_2: string;
  MEDIEVAL_QUIZZ_2_SELECT_OPTION_3: string;
  MEDIEVAL_QUIZZ_2_SELECT_OPTION_4: string;
  MEDIEVAL_QUIZZ_QUESTION_3: string;
  MEDIEVAL_QUIZZ_QUESTION_3_HINT: string;
  MEDIEVAL_QUIZZ_ANSWER_3: string;
  MEDIEVAL_QUIZZ_3_SELECT_OPTION_1: string;
  MEDIEVAL_QUIZZ_3_SELECT_OPTION_2: string;
  MEDIEVAL_QUIZZ_3_SELECT_OPTION_3: string;
  MEDIEVAL_QUIZZ_3_SELECT_OPTION_4: string;
  VICTORIAN_PAGE_TITLE: string;
  VICTORIAN_QUIZZ_QUESTION_1: string;
  VICTORIAN_QUIZZ_QUESTION_1_HINT: string;
  VICTORIAN_QUIZZ_ANSWER_1: string;
  VICTORIAN_QUIZZ_1_SELECT_OPTION_1: string;
  VICTORIAN_QUIZZ_1_SELECT_OPTION_2: string;
  VICTORIAN_QUIZZ_1_SELECT_OPTION_3: string;
  VICTORIAN_QUIZZ_1_SELECT_OPTION_4: string;
  VICTORIAN_QUIZZ_QUESTION_2_HINT: string;
  VICTORIAN_QUIZZ_QUESTION_2: string;
  VICTORIAN_QUIZZ_ANSWER_2: string;
  VICTORIAN_QUIZZ_2_SELECT_OPTION_1: string;
  VICTORIAN_QUIZZ_2_SELECT_OPTION_2: string;
  VICTORIAN_QUIZZ_2_SELECT_OPTION_3: string;
  VICTORIAN_QUIZZ_2_SELECT_OPTION_4: string;
  VICTORIAN_QUIZZ_QUESTION_3_HINT: string;
  VICTORIAN_QUIZZ_ANSWER_3: string;
  VICTORIAN_QUIZZ_3_SELECT_OPTION_1: string;
  VICTORIAN_QUIZZ_3_SELECT_OPTION_2: string;
  VICTORIAN_QUIZZ_3_SELECT_OPTION_3: string;
  VICTORIAN_QUIZZ_3_SELECT_OPTION_4: string;
  VICTORIAN_QUIZZ_IMAGE_SRC: string;
  '1980_PAGE_TITLE': string;
  '1980_QUIZZ_QUESTION_1': string;
  '1980_QUIZZ_QUESTION_1_HINT': string;
  '1980_QUIZZ_ANSWER_1': string;
  '1980_QUIZZ_1_SELECT_OPTION_1': string;
  '1980_QUIZZ_1_SELECT_OPTION_2': string;
  '1980_QUIZZ_1_SELECT_OPTION_3': string;
  '1980_QUIZZ_1_SELECT_OPTION_4': string;
  '1980_QUIZZ_QUESTION_2': string;
  '1980_QUIZZ_QUESTION_2_HINT': string;
  '1980_QUIZZ_ANSWER_2': string;
  '1980_QUIZZ_2_SELECT_OPTION_1': string;
  '1980_QUIZZ_2_SELECT_OPTION_2': string;
  '1980_QUIZZ_2_SELECT_OPTION_3': string;
  '1980_QUIZZ_2_SELECT_OPTION_4': string;
  '1980_QUIZZ_QUESTION_3_HINT': string;
  '1980_QUIZZ_ANSWER_3': string;
  '1980_QUIZZ_3_SELECT_OPTION_1': string;
  '1980_QUIZZ_3_SELECT_OPTION_2': string;
  '1980_QUIZZ_3_SELECT_OPTION_3': string;
  '1980_QUIZZ_3_SELECT_OPTION_4': string;
  '1980_QUIZZ_IMAGE_SRC': string;
  FUTURE_PAGE_TITLE: string;
  FUTURE_QUIZZ_QUESTION_1: string;
  FUTURE_QUIZZ_QUESTION_1_HINT: string;
  FUTURE_QUIZZ_ANSWER_1: string;
  FUTURE_QUIZZ_1_SELECT_OPTION_1: string;
  FUTURE_QUIZZ_1_SELECT_OPTION_2: string;
  FUTURE_QUIZZ_1_SELECT_OPTION_3: string;
  FUTURE_QUIZZ_1_SELECT_OPTION_4: string;
  FUTURE_QUIZZ_QUESTION_2: string;
  FUTURE_QUIZZ_QUESTION_2_HINT: string;
  FUTURE_QUIZZ_ANSWER_2: string;
  FUTURE_QUIZZ_2_SELECT_OPTION_1: string;
  FUTURE_QUIZZ_2_SELECT_OPTION_2: string;
  FUTURE_QUIZZ_2_SELECT_OPTION_3: string;
  FUTURE_QUIZZ_2_SELECT_OPTION_4: string;
  FUTURE_QUIZZ_QUESTION_3_HINT: string;
  FUTURE_QUIZZ_ANSWER_3: string;
  FUTURE_QUIZZ_3_SELECT_OPTION_1: string;
  FUTURE_QUIZZ_3_SELECT_OPTION_2: string;
  FUTURE_QUIZZ_3_SELECT_OPTION_3: string;
  FUTURE_QUIZZ_3_SELECT_OPTION_4: string;
  FUTURE_QUIZZ_IMAGE_SRC: string;
  CONGRATULATIONS_PAGE_TITLE: string;
  CONGRATULATIONS_PAGE_DESCRIPTION: string;
  CONGRATULATIONS_PAGE_TIP: string;
  STATISTICS_TITLE: string;
  STATISTICS_TIME_SPENT: string;
  STATISTICS_TIME_SPENT_HOURS: string;
  STATISTICS_TIME_SPENT_MINUTES: string;
  STATISTICS_TIME_SPENT_SECONDS: string;
  STATISTICS_POINTS: string;
  STATISTICS_PREHISTORIC_ERA: string;
  STATISTICS_EGYPT_ERA: string;
  STATISTICS_MEDIEVAL_ERA: string;
  STATISTICS_VICTORIAN_ERA: string;
  STATISTICS_1980S_ERA: string;
  STATISTICS_FUTURE_ERA: string;
  STATISTICS_QUIZZ_QUESTION_1: string;
  STATISTICS_QUIZZ_QUESTION_2: string;
  STATISTICS_QUIZZ_QUESTION_3: string;
}
