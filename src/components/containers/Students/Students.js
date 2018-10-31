import React from 'react';
import { connect } from 'react-redux';
import { getStudents } from './StudentsActions';

import Student from '../../functionals/student/student';

import './Students.css';

class Students extends React.Component {
    componentWillMount(){
        this.props.studentsRequest();
    }

    render(){
        const stundentsList = this.props.stundentsList;
        return(
            <section className="students-wrapper">
                <div className="students-table-header">
                    <div className="students-table-header-item">Id</div>
                    <div className="students-table-header-item">Name</div>
                    <div className="students-table-header-item">Email</div>
                    <div className="students-table-header-item">Edit</div>
                    <div className="students-table-header-item">Delete</div>
                </div>
                {stundentsList ? <Student stundentsList={this.props.stundentsList} /> : null}
            </section>
        )
    }
}

const mapDespatchToProps = (dispatch) => {
    return {
        dispatch,
        studentsRequest: () => dispatch(getStudents())
    }
}

const mapStateToProps = (state) => {
    return {
        stundentsList: state.studentsState.students[0]
    }
}


export default connect (mapStateToProps, mapDespatchToProps)(Students);