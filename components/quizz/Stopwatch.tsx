'use client';

import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { useStopwatch } from 'react-timer-hook';
import { saveParticipantResult } from '@/lib/functions';

const Stopwatch: React.FC<{ isStarted: boolean; isPaused?: boolean }> = ({
  isStarted,
  isPaused,
}) => {
  const { profile } = useAppSelector((state) => state.profile);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const stopButtonRef = useRef<HTMLButtonElement>(null);
  const stopwatchOffset = new Date();

  let secondsElapsed = 0;

  const startTime = profile.timeStart && new Date(profile.timeStart).getTime();
  const now = Date.now();
  if (startTime !== undefined && startTime !== null) {
    secondsElapsed = Math.floor((now - startTime) / 1000);
  }
  const offsetDate = new Date(stopwatchOffset);
  offsetDate.setSeconds(offsetDate.getSeconds() + secondsElapsed);

  const { hours, minutes, seconds, start } = useStopwatch({
    autoStart: false,
    offsetTimestamp: offsetDate,
  });

  useEffect(() => {
    if (isStarted && profile.timeEnd === null) {
      startButtonRef.current?.click();
      if (profile.timeStart !== null) return;
      const time = new Date();
      const updatedTeam = {
        ...profile,
        timeStart: time,
      };
      localStorage.setItem('team', JSON.stringify(updatedTeam));
    }
    if (isPaused && profile.timeEnd === null) {
      console.log('Pausing stopwatch');
      stopButtonRef.current?.click();
      const stopTime = new Date();

      const time = {
        hours,
        minutes,
        seconds,
      };

      const updatedTeam = {
        ...profile,
        timeEnd: stopTime,
        gameTime: time,
      };

      console.log('Updated team:', updatedTeam.gameTime);

      localStorage.setItem('team', JSON.stringify(updatedTeam));
      saveParticipantResult(
        updatedTeam.name,
        updatedTeam.points,
        time,
        updatedTeam
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, isStarted, profile]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {hours > 0 && hours < 10 && 0}
          {hours > 0 && `${hours}:`}
          {minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </h2>
        <div className="opacity-0 absolute">
          <button ref={startButtonRef} onClick={start}>
            Start
          </button>
        </div>
        {/* <button>Stop</button> */}
      </div>
    </div>
  );
};
export default Stopwatch;
