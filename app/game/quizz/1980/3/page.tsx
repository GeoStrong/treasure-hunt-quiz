'use client';

import useLanguage from '@/lib/hooks/useLanguage';
import { TeamInterface } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const Era1980QuizzQuestion3: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team['1980Quizz'].question3}
      questionTitle={activeLanguage.QUIZZ_QUESTION_MAZE}
      nextPage="new-step"
      questionAnswer={activeLanguage['1980_QUIZZ_ANSWER_3']}
      quizzEra={team['1980Quizz']}
      quizzHint={activeLanguage['1980_QUIZZ_QUESTION_3_HINT']}
      quizzSelectOptions={[
        activeLanguage['1980_QUIZZ_3_SELECT_OPTION_1'],
        activeLanguage['1980_QUIZZ_3_SELECT_OPTION_2'],
        activeLanguage['1980_QUIZZ_3_SELECT_OPTION_3'],
        activeLanguage['1980_QUIZZ_3_SELECT_OPTION_4'],
      ]}
      answerReverse={false}
      team={team}
    >
      <div className="flex w-full justify-center">
        <Dialog>
          <DialogTrigger className="mt-5">
            <Image
              src={activeLanguage['1980_QUIZZ_IMAGE_SRC']}
              width={200}
              height={200}
              alt="maze"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="flex justify-center">
                <Image
                  src={activeLanguage['1980_QUIZZ_IMAGE_SRC']}
                  width={500}
                  height={500}
                  alt="maze"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </QuizzTemplate>
  );
};
export default Era1980QuizzQuestion3;
