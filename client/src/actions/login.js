import * as actionTypes from './actionTypes';
import axios from 'axios';

// checking user exists
export const onLoginHandler = values => dispatch => {
    const res = await axios.get("/api/user", values)
    console.log(res)
}