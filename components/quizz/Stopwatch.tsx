'use client';
import { useStopwatch } from 'react-timer-hook';

import React from 'react';

const Stopwatch: React.FC = () => {
  // const expiryTimestamp = new Date();
  // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);
  const { minutes, seconds, start, pause, reset } = useStopwatch();

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-center text-[#3B2F2F] font-bold">
          Time Left: {minutes}:{seconds}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={start}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Start
        </button>
        <button
          onClick={pause}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Pause
        </button>
        <button
          onClick={() => reset()}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
