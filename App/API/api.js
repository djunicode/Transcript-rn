import axios from 'axios'

const base = "http://unicode2021.pythonanywhere.com/api/"
const signup_api_url = base + "auth/users/"
const login_api_url = base + "auth/jwt/create/"
const reset_password_api_url = base + "auth/users/reset_password/"

export const signup_api_call = async (obj) => {
    const response = await axios.post(signup_api_url , obj,
    {
        headers: {
          'Content-Type': 'application/json'
        }
    })
    console.log(response.data)
    return response
}

export const login_api_call = async (email , password) => {
    const response = await axios.post(login_api_url , {        
        "email":email,
        "password":password
    },
    {
        headers: {
          'Content-Type': 'application/json'
        }
    })
    console.log(response.data)
    return response
}