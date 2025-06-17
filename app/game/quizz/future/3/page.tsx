'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const FutureQuizzQuestion3: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.futureQuizz.question3}
      questionTitle={activeLanguage.QUIZZ_QUESTION_MAZE}
      nextPage="congratulations"
      questionAnswer={activeLanguage.FUTURE_QUIZZ_ANSWER_3}
      quizzEra={team.futureQuizz}
      quizzHint={activeLanguage.FUTURE_QUIZZ_QUESTION_3_HINT}
      quizzSelectOptions={[
        activeLanguage.FUTURE_QUIZZ_3_SELECT_OPTION_1,
        activeLanguage.FUTURE_QUIZZ_3_SELECT_OPTION_2,
        activeLanguage.FUTURE_QUIZZ_3_SELECT_OPTION_3,
        activeLanguage.FUTURE_QUIZZ_3_SELECT_OPTION_4,
      ]}
      team={team}
    />
  );
};
export default FutureQuizzQuestion3;
