import * as actionTypes from './actionTypes';
import axios from 'axios';

// checking user exists
export const onLoginHandler = values => async dispatch => {
    const res = await axios.get("/api/user", values)
    if(res.status >= 200){
     return  dispatch({type:actionTypes.USER_ACCESS_ENABLED, payload: true})
    }
    dispatch({type:actionTypes.USER_ACCESS_DISABLED, payload: false})
}