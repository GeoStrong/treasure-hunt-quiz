'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const VictorianQuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.victorianQuizz.question2}
      questionTitle={activeLanguage.VICTORIAN_QUIZZ_QUESTION_2}
      nextPage="victorian/3"
      questionAnswer={activeLanguage.VICTORIAN_QUIZZ_ANSWER_2}
      quizzEra={team.victorianQuizz}
      quizzHint={activeLanguage.VICTORIAN_QUIZZ_QUESTION_2_HINT}
      quizzSelectOptions={[
        activeLanguage.VICTORIAN_QUIZZ_2_SELECT_OPTION_1,
        activeLanguage.VICTORIAN_QUIZZ_2_SELECT_OPTION_2,
        activeLanguage.VICTORIAN_QUIZZ_2_SELECT_OPTION_3,
        activeLanguage.VICTORIAN_QUIZZ_2_SELECT_OPTION_4,
      ]}
      answerReverse
      answerRotate
      team={team}
    />
  );
};
export default VictorianQuizzQuestion2;
