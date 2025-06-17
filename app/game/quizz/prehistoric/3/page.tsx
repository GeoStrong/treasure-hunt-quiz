'use client';

import React from 'react';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const PrehistoricQuizzQuestion3: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.prehistoricQuizz.question3}
      questionTitle={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_3}
      nextPage="new-step"
      questionAnswer={activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3}
      quizzEra={team.prehistoricQuizz}
      quizzHint={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_3_HINT}
      quizzSelectOptions={[
        activeLanguage.PREHISTORIC_QUIZZ_3_SELECT_OPTION_1,
        activeLanguage.PREHISTORIC_QUIZZ_3_SELECT_OPTION_2,
        activeLanguage.PREHISTORIC_QUIZZ_3_SELECT_OPTION_3,
        activeLanguage.PREHISTORIC_QUIZZ_3_SELECT_OPTION_4,
      ]}
      team={team}
      answerReverse
    />
  );
};
export default PrehistoricQuizzQuestion3;
