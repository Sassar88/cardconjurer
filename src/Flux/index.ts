import storage                          from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers }              from 'redux';
import logger                           from 'redux-logger';
import Epics                            from 'Flux/Epic';
import { configureStore, Action, AnyAction } from '@reduxjs/toolkit';
import { rootState, TRootState }        from './Reducer';
import { Observable }                   from 'rxjs';
import { applicationSlice }             from './Slice/ApplicationSlice';
import { userSlice }                    from './Slice/UserSlice';
import { createEpicMiddleware }         from 'redux-observable';


const Actions = {
    ...applicationSlice.actions,
    ...userSlice.actions,
}

export type TActions = typeof Actions;
export type TDependencies = {};

export default Actions;


const persistConfig = {
    key  : 'cardconjurer',
    storage,
    debug: true,

    whitelist: [ 'user' ],
};

export const epicMiddleware = createEpicMiddleware<Action, Action, TRootState, TDependencies & TActions> ({
    dependencies: {
        ...Actions,
    },
});

export let Persistor: any;

export const rehydrateStore = (storeToHydrate: any) => new Promise<void>((resolve) => {
    Persistor = persistStore(storeToHydrate, null, () => {
        resolve();
    });
});

const middlewares = [ epicMiddleware ];
if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    middlewares.push(logger);
}

export const Store = configureStore({
    reducer: persistReducer(persistConfig, combineReducers({ ...rootState })),
    middleware: middlewares,
    devTools: process.env.NODE_ENV === 'development',
})

export type AppDispatch = typeof Store.dispatch
export type Epic = (
    actions$: Observable<AnyAction>,
    state$: Observable<TRootState>,
    dependencies: TDependencies & TActions
) => (Observable<AnyAction>)

// @ts-ignore
epicMiddleware.run(Epics);
