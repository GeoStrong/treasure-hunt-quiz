import { CgSpinnerTwoAlt } from 'react-icons/cg';
import React from 'react';
import { useProgress } from '@react-three/drei';
import useLanguage from '@/lib/hooks/useLanguage';

const ModelsLoading: React.FC = () => {
  const { progress } = useProgress();
  const activeLanguage = useLanguage();

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex gap-3 flex-col items-center justify-center">
        <CgSpinnerTwoAlt className="animate-spin text-indigo-700 text-4xl" />
        <h1 className="text-2xl gradient-1 font-bold text-center">
          {activeLanguage.LOADING_PAGE_TITLE} {progress.toFixed(0)}%
        </h1>
        <p className="text-xl gradient-2 font-bold text-center mt-4">
          {activeLanguage.LOADING_PAGE_DESCRIPTION}
        </p>
      </div>
    </div>
  );
};
export default ModelsLoading;
