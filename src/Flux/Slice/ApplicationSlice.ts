import { createSlice }          from '@reduxjs/toolkit';
import * as applicationReducers from 'Flux/Reducer/Application';
import { Notification }         from 'Model/Notification';

export interface IApplicationState {
    isBootstrapped: boolean,
    networkError: boolean,
    notifications: Notification[],
    updatedAt: number,
}

export const applicationSlice = createSlice<IApplicationState, typeof applicationReducers, 'application'>({
    name: 'application',
    initialState: {
        isBootstrapped: false,
        networkError: false,
        notifications: [],
        updatedAt: 0,
    },
    reducers: applicationReducers,
})
