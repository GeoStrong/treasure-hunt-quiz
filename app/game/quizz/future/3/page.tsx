'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { gameRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

const FutureQuizzQuestion3: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.futureQuizz.question3.hintUsed);
  }, [team.futureQuizz.question3.hintUsed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.futureQuizz.question3.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.futureQuizz.question3.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.futureQuizz.question3.isCorrect = false;
    team.points -= 100;
    team.futureQuizz.passed = true;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    gameRedirection('/congratulations');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase().trim() === activeLanguage.FUTURE_QUIZZ_ANSWER_3) {
      setIsCorrect(true);
      team.futureQuizz.passed = true;
      team.futureQuizz.question3.isCorrect = true;
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
      <div className="grid self-center gap-2 grid-cols-2"></div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center mt-2"
      >
        <h2 className="text-xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {activeLanguage.QUIZZ_QUESTION_MAZE}
        </h2>
        <Dialog>
          <DialogTrigger className="mt-5">
            <Image
              src={activeLanguage.FUTURE_QUIZZ_IMAGE_SRC}
              width={200}
              height={200}
              alt="maze"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="flex justify-center">
                <Image
                  src={activeLanguage.FUTURE_QUIZZ_IMAGE_SRC}
                  width={500}
                  height={500}
                  alt="maze"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Input
          value={answer}
          onChange={handleChange}
          onFocus={() => setIsCorrect(false)}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-white placeholder:text-white border-white text-md w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/congratulations'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.FUTURE_QUIZZ_QUESTION_3_HINT}
        />
      </form>
    </div>
  );
};
export default FutureQuizzQuestion3;
