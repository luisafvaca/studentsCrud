import React from 'react';

import { connect } from 'react-redux';

import { getStudents } from './StudentsActions';

import './Students.css';

class Students extends React.Component {
    componentWillMount(){
        console.log('mounting component-----')
        this.props.studentsRequest();
    }
    render(){
        return(
            <section className="students-wrapper">
                <div className="students-table-header">
                    <div className="students-table-header-item">Id</div>
                    <div className="students-table-header-item">Name</div>
                    <div className="students-table-header-item">Email</div>
                    <div className="students-table-header-item">Edit</div>
                    <div className="students-table-header-item">Delete</div>
                </div>
                <div className="students-table-body">
                    <div className="student-row">
                        <p className="student-item">0000</p>
                        <p className="student-item">Test Name</p>
                        <p className="student-item">@test email</p>
                        <p className="student-item"><button>Edit</button></p>
                        <p className="student-item"><button>Delete</button></p>
                    </div>
                </div>
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


export default connect (null, mapDespatchToProps)(Students);