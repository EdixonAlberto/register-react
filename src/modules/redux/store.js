import { createStore } from 'redux';
import reducer from "./reducers";

const initialState = {
    users: [],
    nroUsers: 0
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case reducer.UPDATE_NAVIGATION:
            return {
                ...state,
                path: action.path
            }

        case reducer.SHOW_LOADING:
            return {
                ...state,
                loading: true
            }

        case reducer.UPDATE_LIST:
            return {
                ...state,
                users: action.users,
                nroUsers: action.nro,
                loading: false
            }

        case reducer.SHOW_IN_LIST:
            return {
                ...state,
                users: action.user,
                loading: false
            }

        default:
            return state;
    }
}

export default createStore(
    reducers,
    /* REDUX-DEVTOOLS */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
