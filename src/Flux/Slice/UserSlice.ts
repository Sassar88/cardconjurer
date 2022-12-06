import { createSlice }   from '@reduxjs/toolkit';
import * as userReducers from 'Flux/Reducer/User';


export interface IUserState {
    updatedAt: number,
    initialized: boolean,
}

export const userSlice = createSlice<IUserState, typeof userReducers, 'user'>({
    name: 'user',
    initialState: {
        updatedAt: 0,
        initialized: false,
    },
    reducers: userReducers,
})
