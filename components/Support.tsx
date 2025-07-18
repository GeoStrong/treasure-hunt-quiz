'use client';

import React from 'react';
import { BiHelpCircle, BiQr } from 'react-icons/bi';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { MdTipsAndUpdates } from 'react-icons/md';
import { BsFillFlagFill } from 'react-icons/bs';
import useLanguage from '@/lib/hooks/useLanguage';
import { ChevronDownIcon } from 'lucide-react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const Support: React.FC = () => {
  const activeLanguage = useLanguage();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <BiHelpCircle className="text-2xl" />
        </SheetTrigger>
        <SheetContent side="left" className="pt-10 overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-center text-2xl">
              {activeLanguage.SUPPORT_TITLE}
            </SheetTitle>
            <SheetDescription className="text-base">
              {activeLanguage.SUPPORT_DESCRIPTION_1}
              <br />
              {activeLanguage.SUPPORT_DESCRIPTION_2}
              <br />
              {activeLanguage.SUPPORT_DESCRIPTION_3}
              <br />
              {activeLanguage.SUPPORT_DESCRIPTION_4}
              <br />
              {activeLanguage.SUPPORT_DESCRIPTION_6}
              <br />
              <span className="text-lg text-gradient-2 font-bold">
                {activeLanguage.SUPPORT_DESCRIPTION_5}
              </span>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <MdTipsAndUpdates className="text-yellow-500 text-2xl" />
                  <span className="text-lg">
                    {' '}
                    - {activeLanguage.SUPPORT_HINT_BUTTON}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillFlagFill className="text-red-900 text-2xl" />
                  <span className="text-lg">
                    {' '}
                    - {activeLanguage.SUPPORT_SKIP_BUTTON}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronDownIcon className="text-white text-2xl" />
                  <span className="text-lg">
                    {' '}
                    - {activeLanguage.SUPPORT_COLLAPSE_BUTTON}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                  <span className="text-lg">
                    {' '}
                    - {activeLanguage.SUPPORT_COMPLETED_BUTTON}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-amber-800 p-[2px] rounded-full ">
                    <BiQr className="text-xl" />
                  </div>
                  <span className="text-lg">
                    {' '}
                    - {activeLanguage.SUPPORT_LOCATION_BUTTON}
                  </span>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default Support;
