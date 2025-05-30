import { push, ref } from 'firebase/database';
import { db } from './firebase';
import { GameTimeInterface, TeamInterface } from './types';

export const saveParticipantResult = async (
  name: string,
  points: number,
  time: GameTimeInterface | undefined,
  data: TeamInterface
) => {
  try {
    await push(ref(db, 'participants'), {
      name,
      points,
      time,
      data,
      createdAt: new Date(),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
