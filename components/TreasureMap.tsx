'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/store/hooks';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { BiQr } from 'react-icons/bi';

const TreasureMap: React.FC = () => {
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <div className="flex relative justify-center">
      <Image
        src="/images/park-map.png"
        width={200}
        height={200}
        alt="map"
        className="w-full h-full rounded-xl"
      />

      {/* Prehistoric Qr code location */}
      {profile.prehistoricQuizz.passed ? (
        <div className="absolute top-[78%] left-[58%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[78%] left-[58%]">
          <BiQr className="text-lg" />
        </div>
      )}

      {/* Ancient Egypt Qr code location */}
      {profile.prehistoricQuizz.passed && !profile.egyptQuizz.passed ? (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[35%] left-[35%]">
          <BiQr className="text-lg" />
        </div>
      ) : profile.egyptQuizz.passed ? (
        <div className="absolute top-[35%] left-[35%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Medieval Qr code location */}
      {profile.egyptQuizz.passed && !profile.medievalQuizz.passed ? (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[65%] left-[50%]">
          <BiQr className="text-lg" />
        </div>
      ) : profile.medievalQuizz.passed ? (
        <div className="absolute top-[65%] left-[50%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Victorian Qr code location */}
      {profile.medievalQuizz.passed && !profile.victorianQuizz.passed ? (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[35%] left-[60%]">
          <BiQr className="text-lg" />
        </div>
      ) : profile.victorianQuizz.passed ? (
        <div className="absolute top-[35%] left-[60%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* 1980 Qr code location */}
      {profile.victorianQuizz.passed && !profile['1980Quizz'].passed ? (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[20%] left-[50%]">
          <BiQr className="text-lg" />
        </div>
      ) : profile['1980Quizz'].passed ? (
        <div className="absolute top-[20%] left-[50%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Future Qr code location */}
      {profile['1980Quizz'].passed && !profile.futureQuizz.passed ? (
        <div className="absolute bg-amber-800 p-[2px] rounded-full top-[76%] left-[66%]">
          <BiQr className="text-lg" />
        </div>
      ) : profile.futureQuizz.passed ? (
        <div className="absolute top-[76%] left-[66%]">
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}
    </div>
  );
};
export default TreasureMap;
