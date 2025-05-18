'use client';

import React, { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import { SignupForm } from '@/lib/types';
import { signupRedirection } from '@/lib/actions';

const Signup: React.FC = () => {
  const activeLanguage = useLanguage();
  const [name, setName] = useState<string>('');
  const [size, setSize] = useState<number>(1);
  const [error, setError] = useState<string>('');

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
            className="border-fuchsia-800 !bg-fuchsia-700/50 text-xl p-6"
          />
          <Input
            onChange={(e) => setSize(Number(e.target.value))}
            value={size}
            type="number"
            placeholder={activeLanguage.SIGNUP_INPUT_SIZE_PLACEHOLDER}
            min={1}
            className="border-fuchsia-800 !bg-pink-400/50 text-white text-xl p-6"
          />
          {error && (
            <p className="text-red-500 text-lg font-semibold">{error}</p>
          )}
          <Button
            type="submit"
            className="gradient-4 w-1/2 text-xl p-6"
            onClick={(event: FormEvent) => {
              event.preventDefault();

              if (name === '' || size < 1) {
                setError(activeLanguage.SIGNUP_PAGE_ERROR);
                return;
              }

              setError('');

              const team: SignupForm = {
                name,
                size,
              };

              localStorage.setItem('team', JSON.stringify(team));
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
