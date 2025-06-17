'use client';

import { TeamInterface } from '@/lib/types';
import useLanguage from '@/lib/hooks/useLanguage';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.egyptQuizz.question1}
      questionTitle={activeLanguage.EGYPT_QUIZZ_QUESTION_1}
      nextPage="egypt/2"
      questionAnswer={activeLanguage.EGYPT_QUIZZ_ANSWER_1}
      quizzEra={team.egyptQuizz}
      quizzHint={activeLanguage.EGYPT_QUIZZ_QUESTION_1_HINT}
      quizzSelectOptions={[
        activeLanguage.EGYPT_QUIZZ_1_SELECT_OPTION_1,
        activeLanguage.EGYPT_QUIZZ_1_SELECT_OPTION_2,
        activeLanguage.EGYPT_QUIZZ_1_SELECT_OPTION_3,
        activeLanguage.EGYPT_QUIZZ_1_SELECT_OPTION_4,
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default QuizzQuestion;
