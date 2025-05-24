'use client';

import { useEffect, useState } from 'react';
import useLanguage from '@/lib/hooks/useLanguage';
import QuizzControls from '@/components/quizz/QuizzControls';
import { TeamInterface } from '@/lib/types';
import { quizzRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { addPoints, deductPoints, setProfile } from '@/lib/store/profileSlice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';

const QuizzQuestion = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isHintUsed, setIsHintUsed] = useState(false);
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  useEffect(() => {
    setIsHintUsed(team.victorianQuizz.question1.hintUsed);
  }, [team.victorianQuizz.question1.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.victorianQuizz.question1.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
    dispatch(setProfile(team));
  };

  const handlePassing = () => {
    team.victorianQuizz.question1.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
    dispatch(setProfile(team));
  };

  const handleSurrender = () => {
    team.victorianQuizz.question1.isCorrect = false;
    team.points -= 100;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    dispatch(setProfile(team));
    quizzRedirection('/victorian/2');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      answer.toLowerCase().trim() === activeLanguage.VICTORIAN_QUIZZ_ANSWER_1
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (!isCorrect && isSubmitted) {
      team.victorianQuizz.question1.blocked = true;
      team.victorianQuizz.question1.isCorrect = false;
      team.victorianQuizz.passed = true;
      localStorage.setItem('team', JSON.stringify(team));
      dispatch(setProfile(team));
    }
  }, [dispatch, isCorrect, isSubmitted, team]);

  const disabled =
    (!isCorrect && isSubmitted) || team.victorianQuizz.question1.blocked;

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-xl text-center text-[#3B2F2F] rounded-md font-bold">
          {activeLanguage.VICTORIAN_QUIZZ_QUESTION_1}
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
                setAnswer(activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_1);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_1 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_1}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_2);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_2 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_2}
            </Button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_3);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_3 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_3}{' '}
            </Button>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => {
                setAnswer(activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_4);
              }}
              className={`bg-orange-400 text-lg text-white w-full ${
                answer === activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_4 &&
                'bg-orange-500'
              }`}
            >
              {activeLanguage.VICTORIAN_QUIZZ_SELECT_OPTION_4}
            </Button>
          </div>
        </div>
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/victorian/2'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
          activeHint={activeLanguage.VICTORIAN_QUIZZ_QUESTION_1_HINT}
        />
        {disabled && (
          <Link
            href="/game/quizz/egypt/2"
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
export default QuizzQuestion;
