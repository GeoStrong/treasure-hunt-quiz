'use client';

import QRScanner from '@/components/QRScanner';
import { Button } from '@/components/ui/button';
import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Gi3dHammer, GiPocketWatch } from 'react-icons/gi';

const Game: React.FC = () => {
  const [team, setTeam] = useState<TeamInterface | null>();
  const activeLanguage = useLanguage();
  const [qrScannerIsActive, setQrScannerIsActive] = useState(false);

  useEffect(() => {
    setTeam(JSON.parse(localStorage.getItem('team') || ''));
  }, []);

  return (
    <>
      <div className="flex w-full justify-center">
        {qrScannerIsActive ? (
          <QRScanner setQRScannerVisibility={setQrScannerIsActive} />
        ) : (
          <div className="justify-center flex flex-col mb-10 items-center gap-5">
            <h1 className="text-4xl text-center text-gradient-2 flex gap-2 flex-col items-center font-bold">
              {activeLanguage.GAME_PAGE_TITLE}, {team?.name}!
              <GiPocketWatch className="text-4xl text-fuchsia-800" />
            </h1>
            <p className="text-center w-full md:w-1/2 text-xl text-white">
              {activeLanguage.GAME_PAGE_DESCRIPTION}
            </p>
            <div className="flex flex-col items-center gap-5 mt-5 bg-yellow-800 rounded-2xl p-3">
              <p className="text-center text-xl text-bold text-white">
                Since the game is finished, you can proceed to the first Era
                without scanning the QR code.
              </p>
              <Link
                href="/game/quizz/prehistoric"
                className="gradient-3 p-2 rounded-lg"
              >
                Go to the first Era
              </Link>
            </div>
            <Button
              onClick={() => {
                setQrScannerIsActive(true);
              }}
              className="bg-purple-800 p-6 hover:bg-purple-700 text-white text-xl font-bold mt-10"
            >
              {activeLanguage.GAME_PAGE_BUTTON}
            </Button>
            <h2
              className="
            text-2xl text-gradient-4 font-bold text-center mt-10 flex gap-2 items-center"
            >
              {activeLanguage.GAME_PAGE_HOW_IT_WORKS}
              <Gi3dHammer className="text-2xl text-amber-500" />
            </h2>
            <ul className="text-xl text-white">
              {activeLanguage.GAME_PAGE_HOW_IT_WORKS_LIST.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Game;
