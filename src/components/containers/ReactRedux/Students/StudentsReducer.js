import {
    STUDENTS_REQUEST_SUCCESS,
    STUDENTS_REQUEST_FAILURE,
} from './StudentsActions';

import {map, filter, assoc} from 'ramda';

import {
    EDIT_STUDENT,
    DELET_STUDENT
} from '../Student/StudentActions';

const initialState = {
    students: [],
    studentsError: '',
    changedStudens: [],
    others: []
}

function Students(state= initialState, action){
    switch (action.type) {
        case STUDENTS_REQUEST_SUCCESS:
        return assoc('students', [action.data], state);
        // return {...state, students:[...state.students, action.data]};
        case STUDENTS_REQUEST_FAILURE:
        return assoc('studentsError', action.data, state);
        // return {...state, studentsError: action.data}
        case EDIT_STUDENT:
            let editItem = map((item, idx)=>{
                if(action.data.id === item.id){
                    item.name = action.data.name;
                    item.email = action.data.email;
                    return item
                }else {
                    return item
                }
            }, state.students[0])
        return assoc('students', [editItem], state)
        // return  {...state, students:[editItem]}
        case DELET_STUDENT:
            let deletedItem = filter((item, idx)=>{
                if(item.id != action.id){
                    return item
                }
            }, state.students[0]);
        return assoc('students', [deletedItem], state)
        // return {...state, students: [deletedItem]}
        default:
            return state
    }
}

export default Students;