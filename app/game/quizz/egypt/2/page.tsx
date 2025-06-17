'use client';

import React from 'react';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const EgyptQuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.egyptQuizz.question2}
      questionTitle={activeLanguage.EGYPT_QUIZZ_QUESTION_2}
      nextPage="egypt/3"
      questionAnswer={activeLanguage.EGYPT_QUIZZ_ANSWER_2}
      quizzEra={team.egyptQuizz}
      quizzHint={activeLanguage.EGYPT_QUIZZ_QUESTION_2_HINT}
      quizzSelectOptions={[
        activeLanguage.EGYPT_QUIZZ_2_SELECT_OPTION_1,
        activeLanguage.EGYPT_QUIZZ_2_SELECT_OPTION_2,
        activeLanguage.EGYPT_QUIZZ_2_SELECT_OPTION_3,
        activeLanguage.EGYPT_QUIZZ_2_SELECT_OPTION_4,
      ]}
      answerReverse
      team={team}
    />
  );
};
export default EgyptQuizzQuestion2;
