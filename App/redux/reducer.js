import {combineReducers} from 'redux'
import {CLEAR_USER_DATA , CHANGE_LOG_STATUS , CHANGE_SIGN_STATUS , CHANGE_COLOR_THEME_TO_DARK , CHANGE_COLOR_THEME_TO_LIGHT , UPDATE_USER_DEETS} from './actions.js'

const merge = (prev,next) => Object.assign({} , prev,next)

const userReducer = (state = {} , action) => {
    switch(action.type){
        case UPDATE_USER_DEETS:
            return merge(state , {user_info:action.payload})
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

const signReducer = (state = false , action) => {
    switch(action.type){
        case CHANGE_SIGN_STATUS:
            return action.payload
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
    color : colorReducer
})

export default reducer