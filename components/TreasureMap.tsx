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
      {profile.prehistoricQuizz.passed ? (
        <div className="absolute top-[60%] left-[75%]">
          <IoIosCheckmarkCircle className="text-green-600 text-4xl" />
        </div>
      ) : (
        <div className="absolute bg-amber-800 p-2 rounded-full top-[60%] left-[75%]">
          <BiQr className="text-2xl" />
        </div>
      )}
      {profile.prehistoricQuizz.passed && !profile.egyptQuizz.passed ? (
        <div className="absolute bg-amber-800 p-2 rounded-full top-[85%] left-[58%]">
          <BiQr className="text-2xl" />
        </div>
      ) : (
        <div className="absolute top-[85%] left-[58%]">
          <IoIosCheckmarkCircle className="text-green-600 text-4xl" />
        </div>
      )}

      {profile.egyptQuizz.passed && (
        <div className="absolute bg-amber-800 p-2 rounded-full top-[50%] left-[50%]">
          <BiQr className="text-2xl" />
        </div>
      )}
    </div>
  );
};
export default TreasureMap;
