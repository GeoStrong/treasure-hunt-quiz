import { createSlice } from '@reduxjs/toolkit';
import { defaultProfile, TeamInterface } from '../types';

const initialState: { profile: TeamInterface } = {
  profile: defaultProfile, // Default language
  // You can change this to any other language you want
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    deductPoints: (state, action) => {
      state.profile.points -= action.payload;
    },

    setProfile: (state, action) => {
      state.profile = action.payload;
    },

    addPoints: (state, action) => {
      state.profile.points += action.payload;
    },

    setStartTime: (state, action) => {
      state.profile.timeStart = action.payload;
    },
  },
});

export const { deductPoints, addPoints, setProfile, setStartTime } =
  profileSlice.actions;
export default profileSlice.reducer;
