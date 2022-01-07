import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {homeReducer} from "./reducers/homeReducer";
import {choreReducer} from "./reducers/choreReducer";
import {groceryReducer} from "./reducers/groceryReducer";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const persistedState = loadState();



export const store = createStore(combineReducers( { user: userReducer, home: homeReducer, chores: choreReducer, groceries: groceryReducer}),persistedState, applyMiddleware(thunk))


store.subscribe(() => {
    saveState(store.getState());
});
