import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import Image from 'next/image';
import { languageSlice } from '@/lib/store/languageSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { defaultLanguage } from '@/lib/types';

const LanguageSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.language);

  console.log('default language', defaultLanguage);
  console.log('app language', language);

  return (
    <Select defaultValue={language}>
      {/* <Select defaultValue={defaultLanguage}> */}
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-0">
        <SelectItem
          value="en"
          onClick={() => {
            dispatch(languageSlice.actions.setLanguage('en'));
          }}
          className="flex p-1 justify-between gap-1"
        >
          EN{' '}
          <Image
            src="/images/english.svg"
            alt="English"
            width={20}
            height={20}
          />
        </SelectItem>
        <SelectItem
          value="et"
          onClick={() => {
            dispatch(languageSlice.actions.setLanguage('et'));
          }}
          className="flex p-1 justify-between gap-1"
        >
          ET
          <Image
            src="/images/estonian.svg"
            alt="English"
            width={20}
            height={20}
          />
        </SelectItem>
        <SelectItem
          value="ru"
          onClick={() => {
            dispatch(languageSlice.actions.setLanguage('ru'));
          }}
          className="flex p-1 justify-between gap-1"
        >
          RU
          <Image
            src="/images/russian.svg"
            alt="English"
            width={20}
            height={20}
          />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
export default LanguageSelect;
