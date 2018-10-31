import { combineReducers } from "redux";
import studentsState from './components/containers/Students/StudentsReducer';


const reducers = combineReducers({
    studentsState
})

export default reducers;