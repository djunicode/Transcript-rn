import axios from 'axios'

const base = "https://transcripts-app.herokuapp.com/api/"
const signup_api_url = base + "auth/users/"
const login_api_url = base + "auth/login/"
const reset_password_api_url = base + "auth/users/reset_password/"
const scan_marksheet_url = base + "student/scan_marksheet/" //ocr after upload ["file" : file]
const upload_final_marksheet = base + "student/marks/" //submit final after editing
const add_transcript_url = base + "student/applications/" //GET + POST 
const user_profile = base + "​student​/profile​/" //GET for student name in settings
//const user_email = base + "auth/me/" // Get for email if needed
/*

HEADER {headers: {Authorization: `Token ${token}`}}

===SCAN MARKSHEET===
var formData = new FormData();
        formData.append('file', e.target.files[0])
        formData.append('semester', sem)
axios.post(API_BASE+'/api/student/scan_marksheet/',formData, generateHeaders(localStorage.getItem('accessToken')))
        .then(res => {
                // setTimeout(2000)
                console.log("RES:", res.data)
                setLoading(false)
                dispatch(extractMarksSuccess(res.data))
                history.push(URLS.transcript.editMarks)
            }
        )


====UPLOAD AFTER EDIT===
marksextractor = output response from scan marksheet
axios.post(API_BASE+'/api/student/marks/', {marksheet:marksExtractor}, generateHeaders(localStorage.getItem('accessToken')))
        .then(res => {
            history.push(URLS.transcript.viewAll)
        })
        .catch(err => console.log(err.response))



===ADD TRANSCRIPT GET===
axios.get(`${API_BASE}/api/student/applications/`, generateHeaders(localStorage.getItem('accessToken')))
        .then(res=>{
            dispatch(fetchUserApplicationsSuccess(res.data.application.application))
        })
        .catch(err=>console.log(err.response))


===ADD TRANSCRIPT POST===
axios.post(`${API_BASE}/api/student/applications/`,{}, generateHeaders(localStorage.getItem('accessToken')))
        .then(res => {
            console.log(res)
            if(res.status===201){
                setState(1)
            } else if (res.status === 208){
                setState(2)
            }
        })
        .catch(err => setState(3))
// 0 -> Just initialized
    // 1 -> New application created
    // 2 -> Could not create new since there is already one in queue
    // 3 -> Could not create new due to some error

*/

export const scan_marksheet = async(token, file, sem ) => {
    var data = new FormData();
    data.append('file', file);
    data.append('semester', sem.toString());

    var config = {
    method: 'post',
    url: scan_marksheet_url, //'https://transcripts-app.herokuapp.com/api/student/scan_marksheet/',
    headers: { 
        'Authorization': 'Token '+token, 
    },
    data : data
    };

    let response = await axios(config)
    console.log(response.data)
    return response
}

export const reset_password_api_call = async (email) => {
    const response = await axios.post(reset_password_api_url , {"email" : email})
    console.log(response.data)
    return response
}

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