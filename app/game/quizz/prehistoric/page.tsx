'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import QuizzControls from '@/components/quizz/QuizzControls';

const QuizzQuestion = () => {
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
    if (answer.toLowerCase() === activeLanguage.PREHISTORIC_QUIZZ_ANSWER_1) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-2xl text-center text-[#3B2F2F] font-bold">
          {activeLanguage.PREHISTORIC_QUIZZ_QUESTION_1}
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
          nextPage={2}
        />
      </form>
    </div>
  );
};
export default QuizzQuestion;
