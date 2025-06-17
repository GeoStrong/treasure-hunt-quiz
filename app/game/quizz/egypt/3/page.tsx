'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const EgyptQuizzQuestion3: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.egyptQuizz.question3}
      questionTitle={activeLanguage.EGYPT_QUIZZ_QUESTION_3}
      nextPage="new-step"
      questionAnswer={activeLanguage.EGYPT_QUIZZ_ANSWER_3}
      quizzEra={team.egyptQuizz}
      quizzHint={activeLanguage.EGYPT_QUIZZ_QUESTION_3_HINT}
      quizzSelectOptions={[
        activeLanguage.EGYPT_QUIZZ_3_SELECT_OPTION_1,
        activeLanguage.EGYPT_QUIZZ_3_SELECT_OPTION_2,
        activeLanguage.EGYPT_QUIZZ_3_SELECT_OPTION_3,
        activeLanguage.EGYPT_QUIZZ_3_SELECT_OPTION_4,
      ]}
      team={team}
      answerReverse
    />
  );
};
export default EgyptQuizzQuestion3;
