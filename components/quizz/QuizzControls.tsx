import { BsFillFlagFill } from 'react-icons/bs';
import { MdTipsAndUpdates } from 'react-icons/md';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
// import Link from 'next/link';
// import { GrLinkNext } from 'react-icons/gr';
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
  isCorrect: boolean;
  isSubmitted: boolean;
  isHintUsed: boolean;
  isBlocked: boolean | undefined;
  setIsHintUsed: () => void;
  onSurrender: () => void;
  activeHint: string;
}> = ({
  isCorrect,
  isSubmitted,
  isHintUsed,
  isBlocked,
  setIsHintUsed,
  onSurrender,
  activeHint,
}) => {
  const activeLanguage = useLanguage();

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

      {isCorrect ? (
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
        </motion.div>
      ) : null}

      {!isBlocked ? (
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
                    <DialogTitle className="text-2xl"></DialogTitle>
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
                    <DialogClose>No</DialogClose>
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
                  <DialogClose>No</DialogClose>
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
