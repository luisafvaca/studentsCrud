import React from 'react';
import { connect } from 'react-redux';
import { getStudents } from './StudentsActions';
import { editStudent, deleteStudent } from '../Student/StudentActions';

import Student from '../Student/Student';
import PopUp from '../PopUp/PopUp';

import './Students.css';

class Students extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            editingId: {
                id: "",
                name: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentWillMount(){
        this.props.studentsRequest();
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit(e) {
        e.persist()
        const id = e.target.getAttribute("id");
        this.setState({isEditing: true, editingId: {id: id}})
    }

    delete(e) {
        e.persist();
        const id = e.target.getAttribute("id");
        this.props.studentDelete(id);
    }

    handleSubmit(e, id){
        e.preventDefault();
        const updateData={
            name: e.target[0].value,
            email: e.target[1].value,
            id: e.target.id
        }
        this.props.studentEdit(updateData)
    }

    render(){
        const stundentsList = this.props.stundentsList;
        return(
            <section className="students-wrapper">
                <PopUp show={this.state.isEditing} itemEdit={this.state.editingId.id} submit={this.handleSubmit}/>
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