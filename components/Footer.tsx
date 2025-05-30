'use client';

import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { TbWorld } from 'react-icons/tb';
import { BsFacebook } from 'react-icons/bs';

import Link from 'next/link';
import useLanguage from '@/lib/hooks/useLanguage';

const Footer: React.FC = () => {
  const activeLanguage = useLanguage();
  return (
    <div className="fixed w-full left-0 bottom-1">
      <Drawer>
        <DrawerTrigger>
          <div className="p-1 px-2 text-xs rounded-lg text-center text-white gradient-1 font-bold">
            {activeLanguage.ABOUT_TRIGGER}
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="!overflow-y-scroll">
            <DrawerTitle className="text-center text-2xl text-gradient-2 font-bold">
              {activeLanguage.ABOUT_TITLE}
            </DrawerTitle>
            <div className="w-full">
              <h3 className="text-gradient-1 text-xl">
                {activeLanguage.ABOUT_HEADER_TITLE_1}
              </h3>
              <DrawerDescription className="text-base mt-2">
                {activeLanguage.ABOUT_DESCRIPTION_1}
                <br />
                {activeLanguage.ABOUT_DESCRIPTION_2}
              </DrawerDescription>
              <h3 className="text-gradient-1 text-xl mt-4">
                {activeLanguage.ABOUT_HEADER_TITLE_2}
              </h3>
              <DrawerDescription className="text-base mt-2">
                {activeLanguage.ABOUT_DESCRIPTION_3}{' '}
                <strong className="text-white">Giorgi</strong>,{' '}
                {activeLanguage.ABOUT_DESCRIPTION_4}{' '}
                <strong className="text-white">Anne Noortekeskus </strong>{' '}
                {activeLanguage.ABOUT_DESCRIPTION_5}{' '}
                <strong className="text-white">
                  European Solidarity Corps project.
                </strong>{' '}
                <br />{' '}
                <i className="mt-2 block">
                  {activeLanguage.ABOUT_DESCRIPTION_6}
                </i>
              </DrawerDescription>
              <h3 className="text-gradient-1 text-xl mt-4">
                {activeLanguage.ABOUT_HEADER_TITLE_3}
              </h3>
              <div className="text-base flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-white text-base">
                    Tartu Noorsootöö Keskus:{' '}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="bg-white rounded-full">
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/Tartu.ntk/"
                        className="text-blue-600 text-2xl"
                      >
                        <BsFacebook />
                      </Link>
                    </div>
                    <div className="bg-white rounded-full">
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/tartuntk/"
                        className="text-pink-600 text-2xl"
                      >
                        <AiOutlineInstagram />
                      </Link>
                    </div>
                    <div className="bg-white rounded-full">
                      <Link
                        target="_blank"
                        href="https://tntk.tartu.ee/"
                        className="text-amber-500 text-2xl"
                      >
                        <TbWorld />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-white text-base">
                    Giorgi ({activeLanguage.ABOUT_DESCRIPTION_7}):{' '}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="bg-white rounded-full">
                      <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/giorgi-jobava/"
                        className="text-blue-600 text-2xl"
                      >
                        <AiFillLinkedin />
                      </Link>
                    </div>
                    <div className="bg-white rounded-full">
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/gio.jobava_/"
                        className="text-pink-600 text-2xl"
                      >
                        <AiOutlineInstagram />
                      </Link>
                    </div>
                    <div className="bg-black rounded-full">
                      <Link
                        target="_blank"
                        href="https://github.com/GeoStrong"
                        className="text-white text-2xl"
                      >
                        <AiOutlineGithub />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex justify-center w-full">
              <DrawerClose className="border-1 w-1/2 border-gray-500 rounded-2xl">
                Close
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default Footer;
