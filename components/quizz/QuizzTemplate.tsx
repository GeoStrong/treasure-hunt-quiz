'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import useLanguage from '@/lib/hooks/useLanguage';
import { QuizzInterface, QuizzQuestion, TeamInterface } from '@/lib/types';
import { gameRedirection, quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';

interface QuizzTemplateProps {
  question: QuizzQuestion;
  questionTitle: string;
  quizzEra: QuizzInterface;
  nextPage: string;
  questionAnswer: string;
  quizzSelectOptions: string[];
  quizzHint: string;
  answerReverse?: boolean;
  answerRotate?: boolean;
  team: TeamInterface;
  children?: React.ReactNode;
}

const QuizzTemplate: React.FC<QuizzTemplateProps> = ({
  question,
  questionTitle,
  quizzEra,
  nextPage,
  questionAnswer,
  quizzSelectOptions,
  quizzHint,
  answerReverse = false,
  answerRotate = false,
  team,
  children,
}) => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();
  const nextPageRedirection =
    nextPage === 'congratulations' ? 'congratulations' : `quizz/${nextPage}`;

  useEffect(() => {
    setIsHintUsed(question.hintUsed);
  }, [question.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    question.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    question.blocked = true;
    team.points -= 100;
    if (nextPage === 'new-step') quizzEra.passed = true;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    if (nextPage === 'congratulations') {
      gameRedirection('/congratulations');
    } else {
      quizzRedirection(`/${nextPage}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase().trim() === questionAnswer.toLowerCase().trim()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      question.blocked = true;
      setIsBlocked(true);
      if (isCorrect) {
        question.isCorrect = true;
        team.points += 250;
        dispatch(addPoints(250));
      } else {
        question.isCorrect = false;
        team.points -= 125;
        dispatch(deductPoints(125));
      }
      if (nextPage === 'new-step') quizzEra.passed = true;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(setProfile(team));
    }
  }, [dispatch, isCorrect, isSubmitted, nextPage, question, quizzEra, team]);

  useEffect(() => {
    if (question.blocked) setIsBlocked(question.blocked);
  }, [question.blocked]);

  const disabled = isSubmitted || question.blocked;

  return (
    <div className="flex flex-col">
      {children}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center mt-2"
      >
        <h2
          className={`text-xl text-center p-2 rounded-md text-[#3B2F2F] font-bold ${
            answerRotate && 'rotate-180'
          }`}
        >
          {answerReverse
            ? [...questionTitle].reverse().join('')
            : questionTitle}
        </h2>
        <p className="text-center text-sm p-2 rounded-md text-orange-400 mt-2">
          {activeLanguage.QUIZZ_QUESTION_SELECT_WARNING}
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 w-full">
          {quizzSelectOptions.map((option, index) => (
            <Button
              key={index}
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(option);
              }}
              className={`bg-white text-base text-black w-full ${
                answer === option && 'gradient-1 text-white'
              }`}
            >
              {option}{' '}
            </Button>
          ))}
        </div>
        <QuizzControls
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          isBlocked={isBlocked}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onSurrender={handleSurrender}
          activeHint={quizzHint}
        />
        {disabled && (
          <Link
            href={`/game/${nextPageRedirection}`}
            className="bg-amber-600 text-center mt-3 text-base font-bold justify-center text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            {activeLanguage.QUIZZ_NEXT_QUESTION}
            <GrLinkNext />
          </Link>
        )}
      </form>
    </div>
  );
};
export default QuizzTemplate;
