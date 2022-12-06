import { Draft }             from '@reduxjs/toolkit';
import { IApplicationState } from 'Flux/Slice/ApplicationSlice';

export const applicationBootstrapped = (state: Draft<IApplicationState>) => {
    state.updatedAt      = Date.now();
    state.isBootstrapped = true;
}