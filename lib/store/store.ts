import { configureStore } from '@reduxjs/toolkit';
import languageSliceReducer from './languageSlice';
import profileSliceReducer from './profileSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      language: languageSliceReducer,
      profile: profileSliceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
