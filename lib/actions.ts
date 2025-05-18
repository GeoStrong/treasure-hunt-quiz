'use server';

import { redirect } from 'next/navigation';

export const signupRedirection = async () => {
  return redirect('/game');
};
