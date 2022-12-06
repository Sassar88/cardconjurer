import Action, { rehydrateStore, Store } from "Flux";

async function hydrateStore() {
    const state: any = Store.getState();
    if(state._persist && state._persist.rehydrated && state.hasOwnProperty('application') && state.application.isInitialized ) {
        // here can be check for reload or other thinks
        return false;
    }
    await rehydrateStore(Store);

    Store.dispatch(Action.applicationBootstrapped());

    return true;
}

export default hydrateStore;