import {applicationSlice, IApplicationState} from 'Flux/Slice/ApplicationSlice';
import {userSlice, IUserState} from 'Flux/Slice/UserSlice';

export type TRootState = {
  [applicationSlice.name]: IApplicationState;
  [userSlice.name]: IUserState;
}

export const rootState = {
  [applicationSlice.name]: applicationSlice.reducer,
  [userSlice.name]: userSlice.reducer,
}
