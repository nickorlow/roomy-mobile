import {Chore} from "../roomy-api/Types";

export interface ChoreState {
    chores: Chore[] | null
}

const initialState : ChoreState = {
    chores: null
}

type Action = {type: "CLEAR_CHORES" | "SET_CHORES", payload: {chores: Chore[]}}

export const choreReducer = (state:ChoreState = initialState, action: Action) => {
    switch(action.type) {
        case "CLEAR_CHORES":
            return {...state, chores: null}

        case "SET_CHORES":
            return {...state, chores: action.payload.chores}

        default:
            return {...state}
    }
}


export const getChores = () => async(dispatch: any, getState: any) => {
    var state = getState().home;
    var ustate = getState().user;
    fetch('https://api.useroomy.com/home/'+state.homeId+"/chores", {
        method: 'GET',
        headers: {
            Authorization: ustate.auth,
            'Authorization-Provider': 'apple'
        }
    }).then((response) => response.json()).then((json) => {
        var chores: Chore[] = json;
        dispatch({type: "SET_CHORES", payload: {chores: chores}});
    });
}
