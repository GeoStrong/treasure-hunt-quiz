'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <>
      <QuizzTemplate
        question={team.prehistoricQuizz.question1}
        questionTitle={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_1}
        nextPage="prehistoric/2"
        questionAnswer={activeLanguage.PREHISTORIC_QUIZZ_ANSWER_1}
        quizzEra={team.prehistoricQuizz}
        quizzHint={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_1_HINT}
        quizzSelectOptions={[
          activeLanguage.PREHISTORIC_QUIZZ_1_SELECT_OPTION_1,
          activeLanguage.PREHISTORIC_QUIZZ_1_SELECT_OPTION_2,
          activeLanguage.PREHISTORIC_QUIZZ_1_SELECT_OPTION_3,
          activeLanguage.PREHISTORIC_QUIZZ_1_SELECT_OPTION_4,
        ]}
        answerReverse={false}
        team={team}
      />
    </>
  );
};
export default QuizzQuestion;
