'use server';

import { redirect } from 'next/navigation';

export const signupRedirection = async () => {
  return redirect('/game');
};

export const quizzRedirection = async (quizzId: string) => {
  return redirect(`/game/quizz/${quizzId}`);
};
