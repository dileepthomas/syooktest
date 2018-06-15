import * as actionTypes from '../actions/actionTypes';

export default (state={access:false}, action) => {
    switch(action.type){
        case actionTypes.USER_ACCESS_ENABLED:
            return {
                ...state,
                access: action.payload
            }
        default: 
            return state
    }
}