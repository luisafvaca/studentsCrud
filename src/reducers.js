import { combineReducers } from "redux";
import studentsState from './components/containers/ReactRedux/Students/StudentsReducer';

const reducers = combineReducers({
    studentsState
})

export default reducers;