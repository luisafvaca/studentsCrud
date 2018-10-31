export const STUDENTS_REQUEST_STARTING = "STUDENTS_REQUEST_STARTING";
export const STUDENTS_REQUEST_SUCCESS =  "STUDENTS_REQUEST_SUCCESS";
export const STUDENTS_REQUEST_FAILURE =  "STUDENTS_REQUEST_FAILURE";

export const fetchStudentsBegin = () => ({
    type: STUDENTS_REQUEST_STARTING
})

export const fetchStudentsSuccess = (studentList) => ({
    type: STUDENTS_REQUEST_SUCCESS,
    studentList
})

export const fetchStudentsFailure = (error) => ({
    type: STUDENTS_REQUEST_FAILURE,
    data : error 
})
export function getStudents(dispatch) {
    console.log('entando action.')
    return (dispatch) => {
        dispatch(fetchStudentsBegin());
        fetch('../../../mocks/students').then((response) => {
            console.log(response, 'response')
            return JSON.parse(response)
        }).then((data) => {
            console.log(data, 'data-response')
            dispatch(fetchStudentsSuccess(data))
        }).catch((error) => {
            dispatch(fetchStudentsFailure(error));
        })
    }
}