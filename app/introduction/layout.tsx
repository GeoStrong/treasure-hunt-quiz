'use client';

import { useEffect, useState } from 'react';
import ModelsLoading from '@/components/ModelsLoading';
import CanvasContainer from '@/components/CanvasContainer';
import { useProgress } from '@react-three/drei';
import LayoutContainer from '@/components/LayoutContainer';

const IntroductionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
    <LayoutContainer>
      {loading && <ModelsLoading />}
      {!loading && <>{children}</>}
      <CanvasContainer />
    </LayoutContainer>
  );
};

export default IntroductionLayout;
