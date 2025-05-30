'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';

const FutureQuizzQuestion2: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.futureQuizz.question2.hintUsed);
  }, [team.futureQuizz.question2.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.futureQuizz.question2.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.futureQuizz.question2.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.futureQuizz.question2.isCorrect = false;
    team.points -= 100;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    quizzRedirection('/future/3');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase().trim() === activeLanguage.FUTURE_QUIZZ_ANSWER_2) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid self-center gap-2 grid-cols-2"></div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-xl rotate-180 text-center text-white p-2 rounded-md font-bold">
          {activeLanguage.FUTURE_QUIZZ_QUESTION_2}
        </h2>

        <Input
          value={answer}
          onChange={handleChange}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-white placeholder:text-white border-white text-md w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/quizz/future/3'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.FUTURE_QUIZZ_QUESTION_2_HINT}
        />
      </form>
    </div>
  );
};
export default FutureQuizzQuestion2;
