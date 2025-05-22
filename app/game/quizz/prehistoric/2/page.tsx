'use client';

import React, { useEffect, useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
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
    setIsHintUsed(team.prehistoricQuizz.question2.hintUsed);
  }, [team.prehistoricQuizz.question2.hintUsed]);

  const handleHintUsage = () => {
    setIsHintUsed(true);
    team.prehistoricQuizz.question2.hintUsed = true;
    team.points -= 50;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(50));
  };

  const handlePassing = () => {
    team.prehistoricQuizz.question2.isCorrect = true;
    team.points += 250;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(addPoints(250));
  };

  const handleSurrender = () => {
    team.prehistoricQuizz.question2.isCorrect = false;
    team.points -= 100;
    localStorage.setItem('team', JSON.stringify(team));
    dispatch(deductPoints(100));
    quizzRedirection('/prehistoric/3');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      answer.toLowerCase().trim() === activeLanguage.PREHISTORIC_QUIZZ_ANSWER_2
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const images = [
    <Image
      key={1}
      src="/images/prehistoric-humans.jpg"
      alt="prehistoric-humans"
      width={125}
      height={125}
      className="rounded-lg object-center "
    />,
    <Image
      key={2}
      src="/images/clothing.jpg"
      alt="prehistoric-clothing"
      width={75}
      height={75}
      className="rounded-lg self-center object-center "
    />,
    <Image
      key={3}
      src="/images/mammoth.jpeg"
      alt="prehistoric-mammoth"
      width={350}
      height={350}
      className="rounded-lg object-center "
    />,
    <Image
      key={4}
      src="/images/spear.jpg"
      alt="prehistoric-spear"
      width={200}
      height={200}
      className="rounded-lg object-center "
    />,
  ];

  return (
    <div className="flex flex-col">
      <div className="grid self-center gap-2 grid-cols-2">
        {images.map((image) => (
          <>
            <Dialog>
              <DialogTrigger>
                <div key={image.key} className="flex justify-center">
                  {image}
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="flex justify-center">
                    {React.cloneElement(image, { width: 300, height: 300 })}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {activeLanguage.PREHISTORIC_QUIZZ_QUESTION_2}
        </h2>
        <Input
          value={answer}
          onChange={handleChange}
          onFocus={() => setIsCorrect(false)}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-black placeholder:text-black border-amber-950 text-md w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={'/prehistoric/3'}
          isHintUsed={isHintUsed}
          setIsHintUsed={handleHintUsage}
          quizzNumber={2}
          onPassing={handlePassing}
          onSurrender={handleSurrender}
        />
      </form>
    </div>
  );
};
export default PrehistoricQuizzQuestion2;
