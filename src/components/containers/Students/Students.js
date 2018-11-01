import React from 'react';
import { connect } from 'react-redux';
import { getStudents } from './StudentsActions';
import { editStudent, deleteStudent } from '../Student/StudentActions';

import Student from '../Student/Student';

import './Students.css';

class Students extends React.Component {
    componentWillMount(){
        this.props.studentsRequest();
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit(e) {
        e.persist()
        const id = e.target.getAttribute("id");
        console.log(id)
        this.props.studentEdit(id);
    }

    delete(e) {
        e.persist();
        const id = e.target.getAttribute("id");
        console.log(id)
        this.props.studentDelete(id);
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
                {stundentsList ? <Student onClickDelete={this.delete} onClickEdit={this.edit} stundentsList={this.props.stundentsList} /> : null}
            </section>
        )
    }
}

const mapDespatchToProps = (dispatch) => {
    return {
        dispatch,
        studentsRequest: () => dispatch(getStudents()),
        studentEdit: (id) => dispatch(editStudent(id)),
        studentDelete: (id) => dispatch(deleteStudent(id)),
    }
}

const mapStateToProps = (state) => {
    return {
        stundentsList: state.studentsState.students[0]
    }
}


export default connect (mapStateToProps, mapDespatchToProps)(Students);