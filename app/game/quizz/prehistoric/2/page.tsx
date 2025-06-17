'use client';

import React from 'react';
import useLanguage from '@/lib/hooks/useLanguage';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TeamInterface } from '@/lib/types';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const PrehistoricQuizzQuestion2: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  const images = [
    <Image
      key={1}
      src="/images/prehistoric-humans.jpg"
      alt="prehistoric-humans"
      width={125}
      height={125}
      className="rounded-lg object-center "
    />,
    <Image
      key={2}
      src="/images/clothing.jpg"
      alt="prehistoric-clothing"
      width={75}
      height={75}
      className="rounded-lg self-center object-center "
    />,
    <Image
      key={3}
      src="/images/mammoth.jpeg"
      alt="prehistoric-mammoth"
      width={350}
      height={350}
      className="rounded-lg object-center "
    />,
    <Image
      key={4}
      src="/images/spear.jpg"
      alt="prehistoric-spear"
      width={200}
      height={200}
      className="rounded-lg object-center "
    />,
  ];

  return (
    <QuizzTemplate
      question={team.prehistoricQuizz.question2}
      questionTitle={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_2}
      nextPage="prehistoric/3"
      questionAnswer={activeLanguage.PREHISTORIC_QUIZZ_ANSWER_2}
      quizzEra={team.prehistoricQuizz}
      quizzHint={activeLanguage.PREHISTORIC_QUIZZ_QUESTION_2_HINT}
      quizzSelectOptions={[
        activeLanguage.PREHISTORIC_QUIZZ_2_SELECT_OPTION_1,
        activeLanguage.PREHISTORIC_QUIZZ_2_SELECT_OPTION_2,
        activeLanguage.PREHISTORIC_QUIZZ_2_SELECT_OPTION_3,
        activeLanguage.PREHISTORIC_QUIZZ_2_SELECT_OPTION_4,
      ]}
      team={team}
    >
      {images.map((image) => (
        <>
          <Dialog>
            <DialogTrigger>
              <div key={image.key} className="flex justify-center">
                {image}
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription className="flex justify-center">
                  {React.cloneElement(image, { width: 300, height: 300 })}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </>
      ))}
    </QuizzTemplate>
  );
};
export default PrehistoricQuizzQuestion2;
