import { Notification }         from 'Model/Notification';
import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { IApplicationState }    from 'Flux/Slice/ApplicationSlice';

export const showNotification = (state: Draft<IApplicationState>, { payload }: PayloadAction<{ notification: Notification }>) => {
    state.updatedAt = Date.now();
    state.notifications = [ ...state.notifications, payload.notification]
}

export const removeNotification = (state: Draft<IApplicationState>, { payload}: PayloadAction<{ id: string }>) => {
    state.updatedAt = Date.now();
    state.notifications = state.notifications.filter(notification => notification.id !== payload.id);
}