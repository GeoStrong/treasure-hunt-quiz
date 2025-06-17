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
import { DialogTitle } from '@radix-ui/react-dialog';
import QuizzTemplate from '@/components/quizz/QuizzTemplate';

const VictorianQuizzQuestion3: React.FC = () => {
  const activeLanguage = useLanguage();

  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  return (
    <QuizzTemplate
      question={team.victorianQuizz.question3}
      questionTitle={activeLanguage.QUIZZ_QUESTION_MAZE}
      nextPage="new-step"
      questionAnswer={activeLanguage.VICTORIAN_QUIZZ_ANSWER_3}
      quizzEra={team.victorianQuizz}
      quizzHint={activeLanguage.VICTORIAN_QUIZZ_QUESTION_3_HINT}
      quizzSelectOptions={[
        activeLanguage.VICTORIAN_QUIZZ_3_SELECT_OPTION_1,
        activeLanguage.VICTORIAN_QUIZZ_3_SELECT_OPTION_2,
        activeLanguage.VICTORIAN_QUIZZ_3_SELECT_OPTION_3,
        activeLanguage.VICTORIAN_QUIZZ_3_SELECT_OPTION_4,
      ]}
      team={team}
    >
      <div className="flex w-full justify-center">
        <Dialog>
          <DialogTrigger className="mt-5">
            <Image
              src={activeLanguage.VICTORIAN_QUIZZ_IMAGE_SRC}
              width={200}
              height={200}
              alt="maze"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold"></DialogTitle>
              <DialogDescription className="flex justify-center">
                <Image
                  src={activeLanguage.VICTORIAN_QUIZZ_IMAGE_SRC}
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
export default VictorianQuizzQuestion3;
