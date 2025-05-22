'use client';

import Stopwatch from '@/components/quizz/Stopwatch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TeamInterface } from '@/lib/types';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const QuizzLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [team, setTeam] = useState<TeamInterface | null>(null);
  const [startStopwatch, setStartStopwatch] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    const storedTeam = localStorage.getItem('team');
    if (storedTeam) {
      setTeam(JSON.parse(storedTeam) as TeamInterface);
    }
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setStartStopwatch(true);
    }
  }, [progress]);

  return (
    <>
      <div className="mb-5 flex items-center w-full justify-between">
        <Dialog>
          <DialogTrigger className="bg-purple-800 rounded-2xl p-4 hover:bg-purple-700 text-white font-bold">
            <FaMapMarkedAlt className="text-xl" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Qr Code Map</DialogTitle>
              <DialogDescription>
                <Image
                  src={'/images/park-map.png'}
                  alt="QR Scanner"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Stopwatch isStarted={startStopwatch} />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg text-gradient-3 font-bold text-center">
            {team?.name}
          </h2>
          <h3 className="text-lg text-white font-bold text-center">
            {team?.points} points
          </h3>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </>
  );
};
export default QuizzLayout;
