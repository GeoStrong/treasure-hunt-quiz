'use client';

import useQuizzStopwatch from '@/lib/hooks/useQuizzStopwatch';
import React, { useEffect } from 'react';

const Stopwatch: React.FC<{ isStarted: boolean; isPaused?: boolean }> = ({
  isStarted,
  isPaused,
}) => {
  const { minutes, seconds, start, pause } = useQuizzStopwatch();

  useEffect(() => {
    if (isStarted) {
      start();
    } else if (isPaused) {
      pause();
    }
  }, [isPaused, isStarted, pause, start]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-center text-[#3B2F2F] font-bold">
          {minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </h2>
        {/* <button>Start</button>
        <button>Stop</button> */}
      </div>
    </div>
  );
};
export default Stopwatch;
