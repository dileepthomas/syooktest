import * as actionTypes from './actionTypes';
import axios from 'axios'

export const onSignupHandler = values => async dispatch => {
   const res = await axios.post("/api/user", values)
   console.log(res)
}