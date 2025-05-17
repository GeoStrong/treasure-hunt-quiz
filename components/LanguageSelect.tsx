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
import { useAppDispatch } from '@/lib/store/hooks';

const LanguageSelect: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Select defaultValue="en">
      <SelectTrigger defaultValue={'et'}>
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
      </SelectContent>
    </Select>
  );
};
export default LanguageSelect;
