import axios from 'axios'
import jwtDecode from "jwt-decode";
import setAuthToken from '../../utils/setAuthToken';
import * as Types from '../actions/types';
import {BASE_URL} from '../../utils/env';


// user login
export const login = (user, history) => dispatch => {
    axios.post(`${BASE_URL}/login/`, user)
        .then((res) => {
            console.log(res.data);
            let token = res.data.access;
            localStorage.setItem('auth_token', token)
            setAuthToken(token)
            let decode = jwtDecode(token)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decode
                }
            })
            history.push('/');
        })
        .catch((error) =>{
            console.log(error);
            dispatch({
                type: Types.USER_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}


// User registration
export const registration = (user, history) => dispatch => {
    axios.post(`${BASE_URL}/user/register/`, user)
    .then((res) =>{
        console.log(res)
        history.push("/login");
    })
    .catch((error) =>{
        console.log(error);
        dispatch({
            type: Types.USER_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}
