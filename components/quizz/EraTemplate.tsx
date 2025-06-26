'use client';

import React, { useEffect, useState } from 'react';
import ModelsLoading from '@/components/canvas/ModelsLoading';
import { useProgress } from '@react-three/drei';
// import { GiDinosaurRex } from 'react-icons/gi';
import { AnimatePresence, motion } from 'motion/react';
import useLanguage from '@/lib/hooks/useLanguage';
import { useAppSelector } from '@/lib/store/hooks';
import { quizzRedirection } from '@/lib/actions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { eraQuizz } from '@/lib/types';

interface EraTemplateProps {
  children: React.ReactNode;
  eraTitle:
    | 'PREHISTORIC'
    | 'EGYPT'
    | 'MEDIEVAL'
    | 'VICTORIAN'
    | '1980'
    | 'FUTURE';
  currentEraQuizz: eraQuizz;
  previousEraQuizz?: eraQuizz;
  titleIcon: React.ReactNode;
  canvas: React.ReactNode;
}

const EraTemplate: React.FC<EraTemplateProps> = ({
  children,
  eraTitle,
  currentEraQuizz,
  previousEraQuizz,
  titleIcon,
  canvas,
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

  useEffect(() => {
    if (previousEraQuizz && !profile[previousEraQuizz]?.passed) {
      quizzRedirection('/oopsie');
    }
    if (profile[currentEraQuizz]?.passed) {
      quizzRedirection('/new-step');
    }
  }, [currentEraQuizz, previousEraQuizz, profile]);

  return (
    <div className="w-full">
      {loading && <ModelsLoading />}
      {!loading && (
        <>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full items=center justify-center">
                <h1 className="text-center text-[#3B2F2F] text-3xl flex items-center justify-center gap-2 text-gradient-2 font-bold">
                  {activeLanguage[`${eraTitle}_PAGE_TITLE`]}
                  {titleIcon}
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence initial={false}>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex justify-center"
                    >
                      <div className="bg-yellow-300/10 w-full md:w-1/2 border-amber-950 border-2 rounded-lg p-5 mt-5">
                        {children}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
      {canvas}
    </div>
  );
};
export default EraTemplate;
