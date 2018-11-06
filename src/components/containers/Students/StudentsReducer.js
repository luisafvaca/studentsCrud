import {
    // STUDENTS_REQUEST_STARTING,
    STUDENTS_REQUEST_SUCCESS,
    STUDENTS_REQUEST_FAILURE,
    SAVE_EMAIL
} from './StudentsActions';

import {
    EDIT_STUDENT,
    DELET_STUDENT
} from '../Student/StudentActions';

const initialState = {
    students: [],
    studentsError: "",
    changedStudens: []
}

function Students(state= initialState, action){
    switch (action.type) {
        case STUDENTS_REQUEST_SUCCESS:
            return {...state, students:[...state.students, action.data]};
        case STUDENTS_REQUEST_FAILURE:
            return {...state, studentsError: action.data}
        case EDIT_STUDENT:
                let editItem = state.students[0].map((item, idx)=>{
                    if(item.id === action.id){
                        const isEdit = {...item, edit:true}
                        return isEdit;
                    }else{
                        return item
                    }
                })
            return {...state, students:[editItem]}
            case DELET_STUDENT:
                let deletedItem = state.students[0].filter((item, idx)=>{
                    if(item.id != action.id){
                       return item
                    }
                });
            return {...state, students: [deletedItem]}
            case SAVE_EMAIL:
                let chageEmail = state.students[0].filter((item)=>{
                    if(item.id === action.data.id){
                        item.email = action.data.name;
                        item.edit = false;
                        return item
                    }else {
                        return item
                    }
                })
                return {...state, students:[chageEmail]}
        default:
            return state
    }
}

export default Students;