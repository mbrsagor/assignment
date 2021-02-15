import * as Types from '../actions/types';

const initialValue = {
    isAuthenticated: false,
    user: {},
    error: {},
}

const authReducer = (state=initialValue, action) => {
    switch (action.type){
        case Types.SET_USER:
            return {
                user: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user),
                error:{}
            }
        case Types.USER_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default authReducer;
