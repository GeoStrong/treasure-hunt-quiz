'use client';

import React, { useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import Image from 'next/image';

const PrehistoricQuizzQuestion2: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const activeLanguage = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase() === activeLanguage.PREHISTORIC_QUIZZ_ANSWER_2) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid self-center gap-2 grid-cols-2">
        <Image
          src="/images/prehistoric-humans.jpg"
          alt="prehistoric-humans"
          width={250}
          height={250}
          className="rounded-lg object-center "
        />
        <div className="flex justify-center">
          <Image
            src="/images/clothing.jpg"
            alt="prehistoric-clothing"
            width={150}
            height={150}
            className="rounded-lg self-center object-center "
          />
        </div>
        <Image
          src="/images/mammoth.jpeg"
          alt="prehistoric-mammoth"
          width={350}
          height={350}
          className="rounded-lg object-center "
        />
        <Image
          src="/images/spear.jpg"
          alt="prehistoric-spear"
          width={200}
          height={200}
          className="rounded-lg object-center "
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-2xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {activeLanguage.PREHISTORIC_QUIZZ_QUESTION_2}
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
        />
      </form>
    </div>
  );
};
export default PrehistoricQuizzQuestion2;
