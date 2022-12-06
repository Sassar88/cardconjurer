import { combineEpics }     from 'redux-observable';
import { applicationEpics } from './Application';
import { userEpics }        from './User';

export default combineEpics(
    applicationEpics,
    userEpics,
);
