'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';

const PrehistoricQuizzQuestion3: React.FC = () => {
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
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.prehistoricQuizz.question3.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.prehistoricQuizz.question3.isCorrect = false;
    team.points -= 100;
    team.prehistoricQuizz.passed = true;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    quizzRedirection('/new-step');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3 ||
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3_alt_1 ||
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3_alt_2 ||
      answer.toLowerCase().trim() ===
        activeLanguage.PREHISTORIC_QUIZZ_ANSWER_3_alt_3
    ) {
      setIsCorrect(true);
      team.prehistoricQuizz.passed = true;
      team.prehistoricQuizz.question3.isCorrect = true;
      team.points += 250;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(addPoints(250));
      dispatch(setProfile(team));
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
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-black placeholder:text-black border-amber-950 text-md w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/quizz/new-step'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_3_HINT}
        />
      </form>
    </div>
  );
};
export default PrehistoricQuizzQuestion3;
