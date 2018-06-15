// importing third party modules
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// importing required files
import loginReducer from './loginReducer'
import signupReducer from './signupReducer'

export default combineReducers({
  form: formReducer,
  login: loginReducer,
  singup: signupReducer
})