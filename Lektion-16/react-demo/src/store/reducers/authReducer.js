
import actiontypes from '../actions/actiontypes';

const initialState = {
    user: {},
    loggedIn: false,
    authError: null,
    token: null
}

const authReducer = (state = initialState, action) => {
        
    switch(action.type) {

        case actiontypes.REGISTER_ERROR:
            console.log('register error')
            return {
                ...state,
                authError: 'register failed',
                loggedIn: false
            }

        case actiontypes.REGISTER_SUCCESS:
            console.log('register success')
            return {
                ...state,
                authError: null,
                regsuccess: action.success
            }


            

        case actiontypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            }

        case actiontypes.LOGOUT_SUCCESS:
            return {
                state: undefined
            }

        case actiontypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.user
            }

        case actiontypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        
        default:
            return {
                ...state
            }
    }
}

export default authReducer