'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team['1980Quizz'].question1}
      questionTitle={activeLanguage['1980_QUIZZ_QUESTION_1']}
      nextPage="1980/2"
      questionAnswer={activeLanguage['1980_QUIZZ_ANSWER_1']}
      quizzEra={team['1980Quizz']}
      quizzHint={activeLanguage['1980_QUIZZ_QUESTION_1_HINT']}
      quizzSelectOptions={[
        activeLanguage['1980_QUIZZ_1_SELECT_OPTION_1'],
        activeLanguage['1980_QUIZZ_1_SELECT_OPTION_2'],
        activeLanguage['1980_QUIZZ_1_SELECT_OPTION_3'],
        activeLanguage['1980_QUIZZ_1_SELECT_OPTION_4'],
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default QuizzQuestion;
