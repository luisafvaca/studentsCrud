import React, {Component} from 'react';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { savingEmail } from '../Students/StudentsActions';

import './Student.css';

class Student extends Component {

    getRows(stundentsList, onClickEdit, onClickDelete){
        const rows = map((item)=>{
            const id    = item.id,
                  name  = item.name,
                  email = item.email;
            return(
                <div className='student-row' key={id}>
                    <p className='student-item'>{id}</p>
                    <p className='student-item'>{name}</p>
                    <p className='student-item'>{email}</p>
                    <p className='student-item'>
                        <button id={id} email={email} name={name} onClick={(e)=>onClickEdit(e)}>Edit</button>
                    </p>
                    <p className='student-item'>
                        <button id={id} onClick={(e, id)=>onClickDelete(e, id)}>Delete</button>
                    </p>
                </div>
            )
        }, stundentsList);

        return (
            <div className='students-table-body'>
                {rows}
            </div> 
        )

    }
    render(){
        const studentList = this.props.stundentsList;
        const onClickEdit = this.props.onClickEdit;
        const onClickDelete = this.props.onClickDelete;
        const rows = this.getRows(studentList, onClickEdit, onClickDelete);
        return (
            <div className='students-table-body'>
                {rows}
            </div> 
        )
    }
}   

const mapDespatchToProps = (dispatch) => {
    return {
        dispatch,
        changedEmail: (data) => dispatch(savingEmail(data)),
    }
}


export default connect (null, mapDespatchToProps)(Student);