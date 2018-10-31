import {
    // STUDENTS_REQUEST_STARTING,
    STUDENTS_REQUEST_SUCCESS,
    STUDENTS_REQUEST_FAILURE
} from './StudentsActions'

const initialState = {
    students: [],
    studentsError: ""
}

function Students(state= initialState, action){
    switch (action.type) {
        case STUDENTS_REQUEST_SUCCESS:
            return {...state, students:[...state.students, action.data]};
        case STUDENTS_REQUEST_FAILURE:
            console.log(action.data, 'data action')
            return {...state, studentsError: action.data}
        default:
            return state
    }
}

export default Students;