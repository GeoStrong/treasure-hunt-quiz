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

const MedievalQuizzQuestion3: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.medievalQuizz.question3.hintUsed);
  }, [team.medievalQuizz.question3.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.medievalQuizz.question3.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.medievalQuizz.question3.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.medievalQuizz.question3.isCorrect = false;
    team.points -= 100;
    team.medievalQuizz.passed = true;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    quizzRedirection('/new-step');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      answer.toLowerCase().trim() === activeLanguage.MEDIEVAL_QUIZZ_ANSWER_3
    ) {
      setIsCorrect(true);
      team.medievalQuizz.passed = true;
      team.medievalQuizz.question3.isCorrect = true;
      team.points += 250;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(addPoints(250));
      dispatch(setProfile(team));
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (!isCorrect && isSubmitted) {
      team.medievalQuizz.question3.blocked = true;
      team.medievalQuizz.question3.isCorrect = false;
      team.medievalQuizz.passed = true;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(setProfile(team));
    }
  }, [dispatch, isCorrect, isSubmitted, team]);

  const disabled =
    (!isCorrect && isSubmitted) || team.medievalQuizz.question3.blocked;

  return (
    <div className="flex flex-col">
      <div className="grid self-center gap-2 grid-cols-2"></div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center mt-2"
      >
        <h2 className="text-xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {[...activeLanguage.MEDIEVAL_QUIZZ_QUESTION_3].reverse().join('')}
        </h2>
        <p className="text-center text-sm bg-orange-400 p-2 rounded-md text-white mt-2">
          {activeLanguage.QUIZZ_QUESTION_SELECT_WARNING}
        </p>
        <div className="flex gap-2 w-full mt-5">
          <div className="flex flex-col gap-2 w-full">
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_1);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_1 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_1}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_2);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_2 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_2}
            </Button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_3);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_3 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_3}{' '}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_4);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_4 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.MEDIEVAL_QUIZZ_SELECT_OPTION_4}
            </Button>
          </div>
        </div>
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/new-step'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.MEDIEVAL_QUIZZ_QUESTION_3_HINT}
        />
        {disabled && (
          <Link
            href="/game/quizz/new-step"
            className="bg-amber-600 text-center justify-center text-white px-4 rounded-md flex items-center gap-2"
          >
            {activeLanguage.QUIZZ_NEXT_QUESTION}
            <GrLinkNext />
          </Link>
        )}
      </form>
    </div>
  );
};
export default MedievalQuizzQuestion3;
