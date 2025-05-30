'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';

const Era1980QuizzQuestion2: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team['1980Quizz'].question2.hintUsed);
  }, [team]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team['1980Quizz'].question2.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team['1980Quizz'].question2.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team['1980Quizz'].question2.isCorrect = false;
    team.points -= 100;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    quizzRedirection('/1980/3');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase().trim() === activeLanguage['1980_QUIZZ_ANSWER_2']) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (!isCorrect && isSubmitted) {
      team['1980Quizz'].question2.blocked = true;
      team['1980Quizz'].question2.isCorrect = false;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(setProfile(team));
    }
  }, [dispatch, isCorrect, isSubmitted, team]);

  const disabled =
    (!isCorrect && isSubmitted) || team['1980Quizz'].question2.blocked;

  return (
    <div className="flex flex-col">
      <div className="grid self-center gap-2 grid-cols-2"></div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-xl text-center text-[#3B2F2F] p-2 rounded-md font-bold">
          {activeLanguage['1980_QUIZZ_QUESTION_2']}
        </h2>
        <p className="text-center text-sm text-orange-400 p-2 rounded-md mt-2">
          {activeLanguage.QUIZZ_QUESTION_SELECT_WARNING}
        </p>
        <div className="flex gap-2 w-full mt-5">
          <div className="flex flex-col gap-2 w-full">
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage['1980_QUIZZ_SELECT_OPTION_5']);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage['1980_QUIZZ_SELECT_OPTION_5'] &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage['1980_QUIZZ_SELECT_OPTION_5']}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage['1980_QUIZZ_SELECT_OPTION_6']);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage['1980_QUIZZ_SELECT_OPTION_6'] &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage['1980_QUIZZ_SELECT_OPTION_6']}
            </Button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage['1980_QUIZZ_SELECT_OPTION_7']);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage['1980_QUIZZ_SELECT_OPTION_7'] &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage['1980_QUIZZ_SELECT_OPTION_7']}{' '}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage['1980_QUIZZ_SELECT_OPTION_8']);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage['1980_QUIZZ_SELECT_OPTION_8'] &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage['1980_QUIZZ_SELECT_OPTION_8']}
            </Button>
          </div>
        </div>
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/quizz/1980/3'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage['1980_QUIZZ_QUESTION_2_HINT']}
        />
        {disabled && (
          <Link
            href="/game/quizz/1980/3"
            className="bg-amber-600 mt-3 text-center justify-center text-white px-4 rounded-md flex items-center gap-2"
          >
            {activeLanguage.QUIZZ_NEXT_QUESTION}
            <GrLinkNext />
          </Link>
        )}
      </form>
    </div>
  );
};
export default Era1980QuizzQuestion2;
