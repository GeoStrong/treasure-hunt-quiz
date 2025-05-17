'use client';

import { useEffect, useState } from 'react';
import ModelsLoading from '@/components/ModelsLoading';
import CanvasContainer from '@/components/CanvasContainer';
import { useProgress } from '@react-three/drei';
import LanguageSelect from '@/components/LanguageSelect';

export default function Home({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [progress]);

  return (
    <div className="mt-10 p-8 relative">
      <div className="flex mb-5 justify-end relative left-0 z-10 w-full">
        <LanguageSelect />
      </div>
      {loading && <ModelsLoading />}
      {!loading && <>{children}</>}
      <CanvasContainer />
    </div>
  );
}
