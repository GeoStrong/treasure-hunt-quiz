'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.futureQuizz.question1}
      questionTitle={activeLanguage.FUTURE_QUIZZ_QUESTION_1}
      nextPage="future/2"
      questionAnswer={activeLanguage.FUTURE_QUIZZ_ANSWER_1}
      quizzEra={team.futureQuizz}
      quizzHint={activeLanguage.FUTURE_QUIZZ_QUESTION_1_HINT}
      quizzSelectOptions={[
        activeLanguage.FUTURE_QUIZZ_1_SELECT_OPTION_1,
        activeLanguage.FUTURE_QUIZZ_1_SELECT_OPTION_2,
        activeLanguage.FUTURE_QUIZZ_1_SELECT_OPTION_3,
        activeLanguage.FUTURE_QUIZZ_1_SELECT_OPTION_4,
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default QuizzQuestion;
