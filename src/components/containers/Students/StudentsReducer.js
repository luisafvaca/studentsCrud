import {
    // STUDENTS_REQUEST_STARTING,
    STUDENTS_REQUEST_SUCCESS,
    STUDENTS_REQUEST_FAILURE
} from './StudentsActions';

import {
    EDIT_STUDENT,
    DELET_STUDENT
} from '../Student/StudentActions';

const initialState = {
    students: [],
    studentsError: ""
}

function Students(state= initialState, action){
    switch (action.type) {
        case STUDENTS_REQUEST_SUCCESS:
            return {...state, students:[...state.students, action.data]};
        case STUDENTS_REQUEST_FAILURE:
            return {...state, studentsError: action.data}
        case EDIT_STUDENT:
            return state
            case DELET_STUDENT:
                let deletedItem = state.students[0].filter((item, idx)=>{
                    if(item.id != action.id){
                       return item
                    }
                });
            return {...state, students: deletedItem}
        default:
            return state
    }
}

export default Students;