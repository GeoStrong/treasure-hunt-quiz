'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.victorianQuizz.question1}
      questionTitle={activeLanguage.VICTORIAN_QUIZZ_QUESTION_1}
      nextPage="victorian/2"
      questionAnswer={activeLanguage.VICTORIAN_QUIZZ_ANSWER_1}
      quizzEra={team.victorianQuizz}
      quizzHint={activeLanguage.VICTORIAN_QUIZZ_QUESTION_1_HINT}
      quizzSelectOptions={[
        activeLanguage.VICTORIAN_QUIZZ_1_SELECT_OPTION_1,
        activeLanguage.VICTORIAN_QUIZZ_1_SELECT_OPTION_2,
        activeLanguage.VICTORIAN_QUIZZ_1_SELECT_OPTION_3,
        activeLanguage.VICTORIAN_QUIZZ_1_SELECT_OPTION_4,
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default QuizzQuestion;
