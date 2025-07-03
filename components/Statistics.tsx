'use client';

import React from 'react';
import { QuizzQuestion, TeamInterface } from '@/lib/types';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import useLanguage from '@/lib/hooks/useLanguage';

const Statistics: React.FC = () => {
  const activeLanguage = useLanguage();
  const team = JSON.parse(localStorage.getItem('team') || '') as TeamInterface;

  const questionCheck = (question: QuizzQuestion) => {
    return question.isCorrect ? (
      <span className="text-green-500">
        <AiOutlineCheck className="text-2xl" />
      </span>
    ) : (
      <span className="text-red-500">
        <AiOutlineClose className="text-2xl" />
      </span>
    );
  };

  // Calculate game time if not available
  const calculateGameTime = () => {
    if (team.gameTime) {
      return team.gameTime;
    }

    if (team.timeStart) {
      const startTime = new Date(team.timeStart).getTime();
      const endTime = team.timeEnd
        ? new Date(team.timeEnd).getTime()
        : Date.now();
      const totalSeconds = Math.floor((endTime - startTime) / 1000);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { hours, minutes, seconds };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const gameTime = calculateGameTime();

  console.log(team);

  return (
    <div className="w-full mb-10">
      <h2 className="text-2xl text-white font-bold text-center mt-5">
        {activeLanguage.STATISTICS_TITLE}, {team.name.toLocaleUpperCase()}!
      </h2>
      <div className="flex flex-col items-start w-full gap-4">
        <h3 className="text-lg text-center w-full text-white">
          <span className="font-bold text-gradient-2">
            {activeLanguage.STATISTICS_TIME_SPENT}:
          </span>{' '}
          {gameTime.hours} {activeLanguage.STATISTICS_TIME_SPENT_HOURS}{' '}
          {gameTime.minutes} {activeLanguage.STATISTICS_TIME_SPENT_MINUTES}{' '}
          {gameTime.seconds} {activeLanguage.STATISTICS_TIME_SPENT_SECONDS}
        </h3>
        <h3 className="text-lg text-center w-full text-white">
          <span className="font-bold text-gradient-2">
            {activeLanguage.STATISTICS_POINTS}:
          </span>{' '}
          {team.points}
        </h3>
        <div className="grid grid-cols-2  gap-2 w-full">
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_PREHISTORIC_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team.prehistoricQuizz.question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team.prehistoricQuizz.question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team.prehistoricQuizz.question3)}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_EGYPT_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team.egyptQuizz.question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team.egyptQuizz.question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team.egyptQuizz.question3)}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_MEDIEVAL_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team.medievalQuizz.question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team.medievalQuizz.question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team.medievalQuizz.question3)}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_VICTORIAN_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team.victorianQuizz.question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team.victorianQuizz.question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team.victorianQuizz.question3)}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_1980S_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team['1980Quizz'].question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team['1980Quizz'].question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team['1980Quizz'].question3)}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col justify-center text-center items-center">
            <h3 className="text-2xl text-gradient-4 font-bold">
              {activeLanguage.STATISTICS_FUTURE_ERA}
            </h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_1}
                </span>
                {questionCheck(team.futureQuizz.question1)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_2}
                </span>
                {questionCheck(team.futureQuizz.question2)}
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-lg">
                  {activeLanguage.STATISTICS_QUIZZ_QUESTION_3}
                </span>
                {questionCheck(team.futureQuizz.question3)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
