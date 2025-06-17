'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const Era1980QuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team['1980Quizz'].question2}
      questionTitle={activeLanguage['1980_QUIZZ_QUESTION_2']}
      nextPage="1980/3"
      questionAnswer={activeLanguage['1980_QUIZZ_ANSWER_2']}
      quizzEra={team['1980Quizz']}
      quizzHint={activeLanguage['1980_QUIZZ_QUESTION_2_HINT']}
      quizzSelectOptions={[
        activeLanguage['1980_QUIZZ_2_SELECT_OPTION_1'],
        activeLanguage['1980_QUIZZ_2_SELECT_OPTION_2'],
        activeLanguage['1980_QUIZZ_2_SELECT_OPTION_3'],
        activeLanguage['1980_QUIZZ_2_SELECT_OPTION_4'],
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default Era1980QuizzQuestion2;
