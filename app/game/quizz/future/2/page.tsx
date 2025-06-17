'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const FutureQuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.futureQuizz.question2}
      questionTitle={activeLanguage.FUTURE_QUIZZ_QUESTION_2}
      nextPage="future/3"
      questionAnswer={activeLanguage.FUTURE_QUIZZ_ANSWER_2}
      quizzEra={team.futureQuizz}
      quizzHint={activeLanguage.FUTURE_QUIZZ_QUESTION_2_HINT}
      quizzSelectOptions={[
        activeLanguage.FUTURE_QUIZZ_2_SELECT_OPTION_1,
        activeLanguage.FUTURE_QUIZZ_2_SELECT_OPTION_2,
        activeLanguage.FUTURE_QUIZZ_2_SELECT_OPTION_3,
        activeLanguage.FUTURE_QUIZZ_2_SELECT_OPTION_4,
      ]}
      answerRotate
      team={team}
    />
  );
};
export default FutureQuizzQuestion2;
