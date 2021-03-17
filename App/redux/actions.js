
//action types
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
export const CHANGE_LOG_STATUS = 'CHANGE_LOG_STATUS'
export const UPDATE_USER_DEETS = 'UPDATE_USER_DEETS'
export const CHANGE_SIGN_STATUS = 'CHANGE_SIGN_STATUS'
export const CHANGE_COLOR_THEME_TO_DARK = 'CHANGE_COLOR_THEME_TO_DARK'
export const CHANGE_COLOR_THEME_TO_LIGHT = 'CHANGE_COLOR_THEME_TO_LIGHT'

//action creators
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