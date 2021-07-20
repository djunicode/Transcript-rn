import {login_api_call , reset_password_api_call, signup_api_call} from './../API/api'

//action types
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
export const CHANGE_LOG_STATUS = 'CHANGE_LOG_STATUS'
export const UPDATE_USER_DEETS = 'UPDATE_USER_DEETS'
export const CHANGE_SIGN_STATUS = 'CHANGE_SIGN_STATUS'
export const CHANGE_COLOR_THEME_TO_DARK = 'CHANGE_COLOR_THEME_TO_DARK'
export const CHANGE_COLOR_THEME_TO_LIGHT = 'CHANGE_COLOR_THEME_TO_LIGHT'
export const STORE_SIGNUP_TEMP = 'STORE_SIGNUP_TEMP'
export const UPDATE_SIGN_DEETS = 'UPDATE_SIGN_DEETS'
export const CLEAR_SIGN_DEETS = 'CLEAR_SIGN_DEETS'
export const RESET_PASSWORD = 'RESET_PASSWORD'

//action creators
export const reset_password = update => ({
    type : RESET_PASSWORD,
    payload : update
})

export const clear_sign_deets = update => ({
    type : CLEAR_SIGN_DEETS,
    payload : update
})

export const update_sign_deets = update => ({
    type : UPDATE_SIGN_DEETS,
    payload : update
})

export const store_signup_temp = update => ({
    type : STORE_SIGNUP_TEMP,
    payload : update
})

export const clear_user_data = update => ({
    type : CLEAR_USER_DATA,
    payload : update
})

export const change_log_status = update => ({
    type : CHANGE_LOG_STATUS,
    payload : update
})

export const update_user_deets = update => ({
    type : UPDATE_USER_DEETS,
    payload : update
})

export const change_sign_status = update => ({
    type : CHANGE_SIGN_STATUS,
    payload : update
})

export const change_color_theme_to_dark = update => ({
    type : CHANGE_COLOR_THEME_TO_DARK,
    payload : update
})

export const change_color_theme_to_light = update => ({
    type : CHANGE_COLOR_THEME_TO_LIGHT,
    payload : update
})

//async action creators

export const login_redux_call = (email , password) => async dispatch => {
    try{
        dispatch(change_sign_status(false))
        dispatch(change_log_status(true))
        const response = await login_api_call(email , password)
        dispatch(update_user_deets(response.data))
    }catch(e){
        dispatch(change_log_status(false))
        alert(e)
    }
}

export const signup_redux_call = (obj) => async dispatch => {
    try{
        dispatch(change_sign_status(true))
        const response = await signup_api_call(obj)
        dispatch(update_sign_deets(response.data))
    }catch(e){
        dispatch(change_sign_status(false))
        console.log(e)
        alert(e)
    }
}

export const reset_password_redux_call = (email) => async dispatch => {
    try{
        dispatch(reset_password(true))
        const response = await reset_password_api_call(email)
        alert("A confirmation email has been sent to you")
        dispatch(reset_password(false))
        return "done"
    }catch(e){
        dispatch(reset_password(false))
        alert(e)
        console.log(e)
        return "err"
    }
}