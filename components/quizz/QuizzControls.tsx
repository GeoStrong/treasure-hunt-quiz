import { BsFillFlagFill } from 'react-icons/bs';
import { MdTipsAndUpdates } from 'react-icons/md';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';
import { Button } from '@/components/ui/button';
import useLanguage from '@/lib/hooks/useLanguage';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const QuizzControls: React.FC<{
  answer: string;
  isCorrect: boolean;
  isSubmitted: boolean;
  nextPage: string | number;
  isHintUsed: boolean;
  setIsHintUsed: () => void;
  onPassing: () => void;
  onSurrender: () => void;
  activeHint: string;
}> = ({
  answer,
  isCorrect,
  isSubmitted,
  nextPage,
  isHintUsed,
  setIsHintUsed,
  onPassing,
  onSurrender,
  activeHint,
}) => {
  const activeLanguage = useLanguage();
  const pathname = '/game';

  return (
    <AnimatePresence>
      {!isCorrect && isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-500 text-white px-2 rounded-md text-lg mt-4"
        >
          {activeLanguage.QUIZZ_INCORRECT_ANSWER}
        </motion.div>
      ) : null}

      {isCorrect && isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg flex flex-col justify-center gap-2 mt-4"
        >
          <span className="bg-green-700 text-white px-2 text-center rounded-md">
            {activeLanguage.QUIZZ_CORRECT_ANSWER}
          </span>
          {/* <Link
            href={`${pathname}/${nextPage}`}
            onClick={onPassing}
            className="bg-amber-600 text-center justify-center text-white px-4 rounded-md flex items-center gap-2"
          >
            {activeLanguage.QUIZZ_NEXT_QUESTION}
            <GrLinkNext />
          </Link> */}
        </motion.div>
      ) : null}

      {answer.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex mt-5 justify-between"
        >
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger>
                <MdTipsAndUpdates className="text-3xl border-amber-500 text-yellow-500" />
              </DialogTrigger>
              <DialogContent className="bg-gray-300 text-black">
                {isHintUsed ? (
                  <DialogHeader>
                    <DialogDescription className="flex text-xl text-black justify-center">
                      {activeHint}
                    </DialogDescription>
                  </DialogHeader>
                ) : (
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {activeLanguage.QUIZZ_QUESTION_HINT_WARNING_TITLE}
                    </DialogTitle>
                    <DialogDescription className="flex text-xl text-black justify-center">
                      {activeLanguage.QUIZZ_QUESTION_HINT_WARNING_DESCRIPTION}
                    </DialogDescription>
                  </DialogHeader>
                )}
                {!isHintUsed && (
                  <DialogFooter className="flex justify-center flex-row">
                    <DialogClose>
                      <Button>No</Button>
                    </DialogClose>
                    <Button
                      onClick={() => {
                        setIsHintUsed();
                      }}
                    >
                      Yes
                    </Button>
                  </DialogFooter>
                )}
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <BsFillFlagFill className="text-2xl text-red-900" />
              </DialogTrigger>
              <DialogContent className="bg-gray-300 text-black">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {activeLanguage.QUIZZ_QUESTION_SURRENDER_WARNING_TITLE}
                  </DialogTitle>
                  <DialogDescription className="flex text-xl text-black justify-center">
                    {
                      activeLanguage.QUIZZ_QUESTION_SURRENDER_WARNING_DESCRIPTION
                    }
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-center flex-row">
                  <DialogClose>
                    <Button>No</Button>
                  </DialogClose>
                  <Button onClick={onSurrender}>Yes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Button type="submit" className="bg-[#3B2F2F] text-white font-bold">
            {activeLanguage.QUIZZ_CHECK_ANSWER}
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default QuizzControls;
