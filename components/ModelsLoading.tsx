import { CgSpinnerTwoAlt } from 'react-icons/cg';
import React from 'react';
import { useProgress } from '@react-three/drei';

const ModelsLoading: React.FC = () => {
  const { progress } = useProgress();
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex gap-3 flex-col items-center justify-center">
        <CgSpinnerTwoAlt className="animate-spin text-indigo-700 text-4xl" />
        <h1 className="text-2xl gradient-1 font-bold text-center">
          Loading {progress.toFixed(0)}%
        </h1>
        <p className="text-xl gradient-2 font-bold text-center mt-4">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  );
};
export default ModelsLoading;
