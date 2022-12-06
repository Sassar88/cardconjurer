import { TRootState }   from 'Flux/Reducer';
import { Notification } from 'Model/Notification';

export const getNotifications = (state: TRootState): Notification[] => state.application.notifications;