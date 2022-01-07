import {User} from "../roomy-api/Types";
import {getHome} from "./homeReducer";

export interface UserState {
    user: User | null,
    auth: string | null,
    userId: string | null
}

const initialState : UserState = {
    user: null,
    userId: null,
    auth: null
}

type Action = {type: "LOGIN_USER" | "LOGOUT_USER" |"SET_USER", payload: { user: User | null, auth: string | null, userId: string  | null}}

export const userReducer = (state:UserState = initialState, action: Action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {...state, auth: action.payload.auth, userId: action.payload.userId}

        case "SET_USER":
            return {...state, user: action.payload.user, auth: action.payload.auth}

        case "LOGOUT_USER":
            console.log('closed')
            return {...state, auth: null, user: null, userId: null}

        default:
            return {...state}
    }
}


export const loginUser = () => async(dispatch: any, getState: any) => {
    var state = getState().user;
    console.log(state.auth)
    fetch('https://api.useroomy.com/user/'+state.userId, {
        method: 'GET',
        headers: {
            Authorization: state.auth,
            'Authorization-Provider': 'apple'
        }
    }).then((response) => response.json()).then((json) => {
        dispatch({type: "SET_USER", payload: {user: json, auth: state.auth}});
        dispatch(getHome());
    });
}
