import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from 'Flux/Slice/UserSlice';

export const initializeUserLogin = (state: Draft<IUserState>, { type }: PayloadAction<{}> ) => {
    state.initialized  = false;
    state.updatedAt    = Date.now();
}

export const initializedUserLogin = (state: Draft<IUserState>, { type }: PayloadAction<{}> ) => {
    state.initialized  = true;
    state.updatedAt    = Date.now();
}
