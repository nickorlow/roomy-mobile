import {Home} from "../roomy-api/Types";

export interface HomeState {
    home: Home | null
}

const initialState : HomeState = {
    home: null
}

type Action = {type: "CLEAR_HOME" | "SET_HOME" , payload: {home: Home}}

export const homeReducer = (state:HomeState = initialState, action: Action) => {
    switch(action.type) {

        case "CLEAR_HOME":
            return {...state, home: null}

        case "SET_HOME":
            return {...state, home: action.payload.home}

        default:
            return {...state}
    }
}


export const getHome = () => async(dispatch: any, getState: any) => {
    var state = getState().user;
    console.log(state.auth)
    fetch('https://api.useroomy.com/home/'+state.user.homeId, {
        method: 'GET'
    }).then((response) => response.json()).then((json) => {
        dispatch({type: "SET_HOME", payload: {home: json}});
    });
}
