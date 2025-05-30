'use client';

import React, { useEffect, useState } from 'react';
import ModelsLoading from '@/components/canvas/ModelsLoading';
import FutureCanvas from '@/components/canvas/FutureCanvas';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, motion } from 'motion/react';
import { GiMonoWheelRobot } from 'react-icons/gi';
import useLanguage from '@/lib/hooks/useLanguage';
import { useAppSelector } from '@/lib/store/hooks';
import { gameRedirection, quizzRedirection } from '@/lib/actions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FutureLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(false);
  const activeLanguage = useLanguage();
  const { profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [progress]);

  // useEffect(() => {
  //   if (!profile['1980Quizz'].passed) {
  //     quizzRedirection('/oopsie');
  //   }
  //   if (profile.futureQuizz.passed) {
  //     gameRedirection('/congratulations');
  //   }
  // }, [profile, profile.victorianQuizz.passed]);

  return (
    <div className="w-full h-full">
      {loading && <ModelsLoading />}
      {!loading && (
        <>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full items=center justify-center">
                <h1 className="text-center text-white text-3xl flex items-center justify-center gap-2 text-gradient-2 font-bold">
                  {activeLanguage.FUTURE_PAGE_TITLE}
                  <GiMonoWheelRobot />
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence initial={false}>
                  {isVisible ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-yellow-300/10 border-white border-2 rounded-lg p-5 mt-5">
                        {children}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
      <FutureCanvas />
    </div>
  );
};
export default FutureLayout;
