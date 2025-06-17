'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const QuizzQuestion = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.medievalQuizz.question1}
      questionTitle={activeLanguage.MEDIEVAL_QUIZZ_QUESTION_1}
      nextPage="medieval/2"
      questionAnswer={activeLanguage.MEDIEVAL_QUIZZ_ANSWER_1}
      quizzEra={team.medievalQuizz}
      quizzHint={activeLanguage.MEDIEVAL_QUIZZ_QUESTION_1_HINT}
      quizzSelectOptions={[
        activeLanguage.MEDIEVAL_QUIZZ_1_SELECT_OPTION_1,
        activeLanguage.MEDIEVAL_QUIZZ_1_SELECT_OPTION_2,
        activeLanguage.MEDIEVAL_QUIZZ_1_SELECT_OPTION_3,
        activeLanguage.MEDIEVAL_QUIZZ_1_SELECT_OPTION_4,
      ]}
      answerReverse={false}
      team={team}
    />
  );
};
export default QuizzQuestion;
