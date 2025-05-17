'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useLanguage from '@/lib/hooks/useLanguage';
import { useAppDispatch } from '@/lib/store/hooks';
import { languageSlice } from '@/lib/store/languageSlice';
import { LanguageType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  const defaultLanguage =
    typeof window !== 'undefined' && localStorage.getItem('language')
      ? (localStorage.getItem('language') as LanguageType)
      : 'en';

  return (
    <div className="mt-10 p-8">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl gradient-4 h-28 text-center">
          {activeLanguage.WELCOME_PAGE_TITLE}
        </h1>
        <div className="flex flex-col justify-center">
          <RadioGroup defaultValue={defaultLanguage}>
            <Label
              htmlFor="en"
              className="flex w-2xs items-center justify-center bg-gray-800 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(languageSlice.actions.setLanguage('en'));
              }}
            >
              <RadioGroupItem value="en" id="en" />
              <div className="text-xl flex items-center gap-2">
                English{' '}
                <Image
                  src="/images/english.svg"
                  alt="English"
                  width={20}
                  height={20}
                />
              </div>
            </Label>
            <Label
              htmlFor="et"
              className="flex w-2xs items-center justify-center bg-gray-800 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(languageSlice.actions.setLanguage('et'));
              }}
            >
              <RadioGroupItem value="et" id="et" />
              <div className="text-xl flex items-center gap-2">
                Estonian{' '}
                <Image
                  src="/images/estonian.svg"
                  alt="English"
                  width={20}
                  height={20}
                />
              </div>
            </Label>
          </RadioGroup>
        </div>

        <Link href={'/game'}>
          <Button className="bg-gray-800 text-4xl gradient-3 text-white py-6 px-14 rounded-xl mt-5">
            Start Game
          </Button>
        </Link>
      </div>
    </div>
  );
}
