import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
// import { useLocation } from 'react-use';
import { GrLinkNext } from 'react-icons/gr';
import { Button } from '@/components/ui/button';
import useLanguage from '@/lib/hooks/useLanguage';

const QuizzControls: React.FC<{
  answer: string;
  isCorrect: boolean;
  isSubmitted: boolean;
  nextPage: string | number;
}> = ({ answer, isCorrect, isSubmitted, nextPage }) => {
  // const { pathname } = useLocation();
  const activeLanguage = useLanguage();

  const pathname = '/game/quizz/prehistoric';

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
          <span className="bg-green-500 text-white px-2 text-center rounded-md">
            {activeLanguage.QUIZZ_CORRECT_ANSWER}
          </span>
          <Link
            href={`${pathname}/${nextPage}`}
            className="bg-amber-500 text-center justify-center text-white px-4 rounded-md flex items-center gap-2"
          >
            {activeLanguage.QUIZZ_NEXT_QUESTION}
            <GrLinkNext />
          </Link>
        </motion.div>
      ) : null}

      {answer.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex mt-5 justify-end"
        >
          <Button type="submit" className="bg-[#3B2F2F] text-white font-bold">
            {activeLanguage.QUIZZ_CHECK_ANSWER}
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default QuizzControls;
