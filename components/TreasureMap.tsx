'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/store/hooks';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { BiQr } from 'react-icons/bi';

const TreasureMap: React.FC = () => {
  const { profile } = useAppSelector((state) => state.profile);
  const prehistoricLocation = 'top-[82%] left-[45%]';
  const egyptLocation = 'top-[20%] left-[75%]';
  const medievalLocation = 'top-[12%] left-[20%]';
  const victorianLocation = 'top-[85%] left-[92%]';
  const eightiesLocation = 'top-[50%] left-[85%]';
  const futureLocation = 'top-[50%] left-[20%]';

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
        <div className={`absolute ${prehistoricLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${prehistoricLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      )}

      {/* Ancient Egypt Qr code location */}
      {profile.prehistoricQuizz.passed && !profile.egyptQuizz.passed ? (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${egyptLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      ) : profile.egyptQuizz.passed ? (
        <div className={`absolute ${egyptLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Medieval Qr code location */}
      {profile.egyptQuizz.passed && !profile.medievalQuizz.passed ? (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${medievalLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      ) : profile.medievalQuizz.passed ? (
        <div className={`absolute ${medievalLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Victorian Qr code location */}
      {profile.medievalQuizz.passed && !profile.victorianQuizz.passed ? (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${victorianLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      ) : profile.victorianQuizz.passed ? (
        <div className={`absolute ${victorianLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* 1980 Qr code location */}
      {profile.victorianQuizz.passed && !profile['1980Quizz'].passed ? (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${eightiesLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      ) : profile['1980Quizz'].passed ? (
        <div className={`absolute ${eightiesLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}

      {/* Future Qr code location */}
      {profile['1980Quizz'].passed && !profile.futureQuizz.passed ? (
        <div
          className={`absolute bg-amber-800 p-[2px] rounded-full ${futureLocation}`}
        >
          <BiQr className="text-lg" />
        </div>
      ) : profile.futureQuizz.passed ? (
        <div className={`absolute ${futureLocation}`}>
          <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
        </div>
      ) : null}
    </div>
  );
};
export default TreasureMap;
