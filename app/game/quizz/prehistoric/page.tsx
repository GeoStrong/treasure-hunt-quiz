'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import QuizzControls from '@/components/quizz/QuizzControls';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';

const QuizzQuestion = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.prehistoricQuizz.question1.hintUsed);
  }, [team.prehistoricQuizz.question1.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.prehistoricQuizz.question1.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.prehistoricQuizz.question1.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.prehistoricQuizz.question1.isCorrect = false;
    team.points -= 100;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    quizzRedirection('/prehistoric/2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_1 ||
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_1_alt_1
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-xl text-center text-[#3B2F2F] font-bold">
          {activeLanguage.PREHISTORIC_QUIZZ_QUESTION_1}
        </h2>
        <Input
          value={answer}
          onChange={handleChange}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-black placeholder:text-black border-amber-950 placeholder:text-base text-xl w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/quizz/prehistoric/2'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_1_HINT}
        />
      </form>
    </div>
  );
};
export default QuizzQuestion;
