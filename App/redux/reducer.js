import {combineReducers} from 'redux'
import {CLEAR_USER_DATA , CHANGE_LOG_STATUS , CHANGE_SIGN_STATUS , CHANGE_COLOR_THEME_TO_DARK , CHANGE_COLOR_THEME_TO_LIGHT , UPDATE_USER_DEETS, STORE_SIGNUP_TEMP , UPDATE_SIGN_DEETS, CLEAR_SIGN_DEETS , RESET_PASSWORD} from './actions.js'

const merge = (prev,next) => Object.assign({} , prev,next)

const userReducer = (state = {reset:false} , action) => {
    switch(action.type){
        case STORE_SIGNUP_TEMP:
            return merge(state , action.payload)
        case UPDATE_USER_DEETS:
            return merge(state , {user_info:action.payload})
        case CLEAR_USER_DATA:
            return ({reset:false})
        case RESET_PASSWORD:
            return merge(state , {reset : action.payload})
        default:
            return state
    }
}

const logReducer = (state = false , action) => {
    switch(action.type){
        case CHANGE_LOG_STATUS:
            return action.payload
        default:
            return state
    }
}

const signReducer = (state = {stat : false} , action) => {
    switch(action.type){
        case CHANGE_SIGN_STATUS:
            return merge(state , {stat : action.payload})
        case UPDATE_SIGN_DEETS:
            return merge(state , {data : action.payload})
        case CLEAR_SIGN_DEETS:
            return ({stat : false})
        default:
            return state
    }
}

const colorReducer = (state = {button : "#9AB3FF", text_input_underline : "#9AB3FF", text : "#000", background_init : "#fff", background_inner : "#9AB3FF", gradient : "light"} , action) => {
    switch(action.type){
        case CHANGE_COLOR_THEME_TO_DARK:
            return({
                button : "#5A75C8",
                text_input_underline : "#5A75C8",
                text : "#fff",
                background_init : "#212020", //backgound during login/signup
                background_inner : "#212020",
                gradient : "dark"
            })
        case CHANGE_COLOR_THEME_TO_LIGHT:
            return({
                button : "#9AB3FF",
                text_input_underline : "#9AB3FF",
                text : "#000",
                background_init : "#fff", //backgound during login/signup
                background_inner : "#9AB3FF",
                gradient : "light"
            })
        default:
            return state
    }
}

const reducer = combineReducers({
    user : userReducer,
    log : logReducer,
    sign : signReducer,
    color : colorReducer,
})

export default reducer