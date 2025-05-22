'use client';

import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { useStopwatch } from 'react-timer-hook';

const Stopwatch: React.FC<{ isStarted: boolean; isPaused?: boolean }> = ({
  isStarted,
}) => {
  const { profile } = useAppSelector((state) => state.profile);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const stopwatchOffset = new Date();

  let secondsElapsed = 0;

  const startTime = profile.timeStart && new Date(profile.timeStart).getTime();
  const now = Date.now();
  if (startTime !== undefined && startTime !== null) {
    secondsElapsed = Math.floor((now - startTime) / 1000);
  }
  const offsetDate = new Date(stopwatchOffset);
  offsetDate.setSeconds(offsetDate.getSeconds() + secondsElapsed);

  const { minutes, seconds, start } = useStopwatch({
    autoStart: false,
    offsetTimestamp: offsetDate,
  });

  useEffect(() => {
    if (isStarted) {
      startButtonRef.current?.click();
      if (profile.timeStart !== null) return;
      const time = new Date();
      const updatedTeam = {
        ...profile,
        timeStart: time,
      };
      localStorage.setItem('team', JSON.stringify(updatedTeam));
    }
  }, [isStarted, profile]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-center text-[#3B2F2F] font-bold">
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
