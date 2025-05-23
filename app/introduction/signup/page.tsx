'use client';

import React, { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import { signupRedirection } from '@/lib/actions';
import { useAppDispatch } from '@/lib/store/hooks';
import { setProfile } from '@/lib/store/profileSlice';

const Signup: React.FC = () => {
  const activeLanguage = useLanguage();
  const [name, setName] = useState<string>('');
  const [size, setSize] = useState<number>();
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full relative z-10">
        <h1 className="text-3xl mb-5 text-center text-gradient-2 font-bold">
          {activeLanguage.SIGNUP_PAGE_TITLE}
        </h1>
        <form className="flex w-full items-center flex-col gap-5">
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder={activeLanguage.SIGNUP_INPUT_NAME_PLACEHOLDER}
            className="border-fuchsia-800 placeholder:text-white !bg-fuchsia-700/50 text-xl p-6"
          />
          <Input
            onChange={(e) => setSize(Number(e.target.value))}
            value={size}
            type="number"
            placeholder={activeLanguage.SIGNUP_INPUT_SIZE_PLACEHOLDER}
            className="border-fuchsia-800 placeholder:text-white !bg-pink-400/50 text-white text-xl p-6"
          />
          {error && (
            <p className="text-red-500 text-lg font-semibold">{error}</p>
          )}
          <Button
            type="submit"
            className="gradient-4 w-1/2 font-semibold text-gray-800 text-xl p-6"
            onClick={(event: FormEvent) => {
              event.preventDefault();

              if (name === '' || size === undefined || size < 1) {
                setError(activeLanguage.SIGNUP_PAGE_ERROR);
                return;
              }

              setError('');

              const team: TeamInterface = {
                name,
                size: size as number,
                timeStart: null,
                prehistoricQuizz: {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                egyptQuizz: {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                medievalQuizz: {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                victorianQuizz: {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                '1980Quizz': {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                futureQuizz: {
                  question1: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question2: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  question3: {
                    isCorrect: false,
                    hintUsed: false,
                  },
                  passed: false,
                },
                points: 0,
              };

              localStorage.setItem('team', JSON.stringify(team));
              dispatch(setProfile(team));
              signupRedirection();
            }}
          >
            {activeLanguage.SIGNUP_PAGE_BUTTON}
          </Button>
        </form>
      </div>
    </>
  );
};
export default Signup;
