import {fetchData} from "./dataApi"; 

export const STUDENTS_REQUEST_STARTING = "STUDENTS_REQUEST_STARTING";
export const STUDENTS_REQUEST_SUCCESS =  "STUDENTS_REQUEST_SUCCESS";
export const STUDENTS_REQUEST_FAILURE =  "STUDENTS_REQUEST_FAILURE";
export const SAVE_EMAIL = "SAVE_EMAIL"


export const fetchStudentsBegin = () => ({
    type: STUDENTS_REQUEST_STARTING
})

export const fetchStudentsSuccess = (studentList) => ({
    type: STUDENTS_REQUEST_SUCCESS,
    data: studentList
})

export const fetchStudentsFailure = (error) => ({
    type: STUDENTS_REQUEST_FAILURE,
    data : error 
})

export const savingEmail = (data) => ({
    type: SAVE_EMAIL,
    data
})


export function getStudents(dispatch) {
    return (dispatch) => {
        dispatch(fetchStudentsBegin());
        fetchData().then((response) => {
            return dispatch(fetchStudentsSuccess(response))
        }).catch((error) => {
            dispatch(fetchStudentsFailure(error));
        })
    }
}

export function saveEmail(dispatch) {
    return(dispatch) => {
        dispatch(savingEmail())
    }
}