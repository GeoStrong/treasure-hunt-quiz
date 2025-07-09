'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useLanguage from '@/lib/hooks/useLanguage';
import { useAppDispatch } from '@/lib/store/hooks';
import { setLanguage } from '@/lib/store/languageSlice';
import { defaultLanguage } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const activeLanguage = useLanguage();
  const dispatch = useAppDispatch();

  return (
    <div className="mt-10 p-8">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl text-gradient-4 h-28 text-center">
          {activeLanguage.WELCOME_PAGE_TITLE}
        </h1>
        <div className="flex flex-col justify-center">
          <RadioGroup defaultValue={defaultLanguage}>
            <Label
              htmlFor="en"
              className="flex w-2xs items-center justify-center bg-gray-700 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(setLanguage('en'));
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
              className="flex w-2xs items-center justify-center bg-gray-700 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(setLanguage('et'));
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
            <Label
              htmlFor="ru"
              className="flex w-2xs items-center justify-center bg-gray-700 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(setLanguage('ru'));
              }}
            >
              <RadioGroupItem value="ru" id="ru" />
              <div className="text-xl flex items-center gap-2">
                Russian{' '}
                <Image
                  src="/images/russian.svg"
                  alt="Russian"
                  width={20}
                  height={20}
                />
              </div>
            </Label>
            <Label
              htmlFor="ka"
              className="flex w-2xs items-center justify-center bg-gray-700 p-2 space-x-2 rounded-md"
              onClick={() => {
                dispatch(setLanguage('ka'));
              }}
            >
              <RadioGroupItem value="ka" id="ka" />
              <div className="text-xl flex items-center gap-2">
                Georgian{' '}
                <Image
                  src="/images/georgian.svg"
                  alt="Georgian"
                  width={20}
                  height={20}
                />
              </div>
            </Label>
          </RadioGroup>
        </div>

        <Link
          href="/introduction"
          className="bg-gray-700 text-2xl gradient-3 text-white py-4 px-16 rounded-xl mt-5"
        >
          {activeLanguage.WELCOME_PAGE_PLAY_BUTTON}
        </Link>
      </div>
    </div>
  );
};

export default Home;
