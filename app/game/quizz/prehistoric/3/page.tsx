'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints } from '@/lib/store/profileSlice';

const PrehistoricQuizzQuestion2: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.prehistoricQuizz.question3.hintUsed);
  }, [team.prehistoricQuizz.question3.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.prehistoricQuizz.question3.hintUsed = true;
    team.points -= 50;
    dispatch(deductPoints(50));
    localStorage.setItem('team', JSON.stringify(team));
  };

  const handlePassing = () => {
    team.prehistoricQuizz.question1.isCorrect = true;
    team.points += 250;
    dispatch(addPoints(250));
    localStorage.setItem('team', JSON.stringify(team));
  };

  const handleSurrender = () => {
    team.prehistoricQuizz.question1.isCorrect = false;
    team.points -= 100;
    dispatch(deductPoints(100));
    localStorage.setItem('team', JSON.stringify(team));
    quizzRedirection('/prehistoric/3');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase() === activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {[...activeLanguage.PREHISTORIC_QUIZZ_QUESTION_3].reverse().join('')}
        </h2>

        <Input
          value={answer}
          onChange={handleChange}
          onFocus={() => setIsCorrect(false)}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-black placeholder:text-black border-amber-950 text-xl w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={3}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          quizzNumber={3}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
        />
      </form>
    </div>
  );
};
export default PrehistoricQuizzQuestion2;
