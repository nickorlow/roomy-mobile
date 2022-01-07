import {GroceryItem} from "../roomy-api/Types";

export interface GroceryState {
    groceries: GroceryItem[] | null
}

const initialState : GroceryState = {
    groceries: null
}

type Action = {type: "CLEAR_GROCERIES" | "SET_GROCERIES", payload: {chores: GroceryItem[]}}

export const groceryReducer = (state:GroceryState = initialState, action: Action) => {
    switch(action.type) {
        case "CLEAR_GROCERIES":
            return {...state, chores: null}

        case "SET_GROCERIES":
            return {...state, chores: action.payload.chores}

        default:
            return {...state}
    }
}


export const getGroceries = () => async(dispatch: any, getState: any) => {
    var state = getState().home;
    var ustate = getState().user;
    fetch('https://api.useroomy.com/home/'+state.homeId+"/groceries", {
        method: 'GET',
        headers: {
            Authorization: ustate.auth,
            'Authorization-Provider': 'apple'
        }
    }).then((response) => response.json()).then((json) => {
        var groceries: GroceryItem[] = json;
        console.log(groceries)
        dispatch({type: "SET_GROCERIES", payload: {groceries: groceries}});
    });
}
