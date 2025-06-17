'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const MedievalQuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.medievalQuizz.question2}
      questionTitle={activeLanguage.MEDIEVAL_QUIZZ_QUESTION_2}
      nextPage="medieval/3"
      questionAnswer={activeLanguage.MEDIEVAL_QUIZZ_ANSWER_2}
      quizzEra={team.medievalQuizz}
      quizzHint={activeLanguage.MEDIEVAL_QUIZZ_QUESTION_2_HINT}
      quizzSelectOptions={[
        activeLanguage.MEDIEVAL_QUIZZ_2_SELECT_OPTION_1,
        activeLanguage.MEDIEVAL_QUIZZ_2_SELECT_OPTION_2,
        activeLanguage.MEDIEVAL_QUIZZ_2_SELECT_OPTION_3,
        activeLanguage.MEDIEVAL_QUIZZ_2_SELECT_OPTION_4,
      ]}
      answerReverse={true}
      team={team}
    />
  );
};
export default MedievalQuizzQuestion2;
