import React from 'react';
import {map} from 'ramda';

class Student extends React.Component {

    constructor(props){
        super();
    }

    getRows(stundentsList, onClickEdit, onClickDelete){
        const rows = map((item)=>{
            const id    = item.id,
                  name  = item.name,
                  email = item.email;
            const studentItemName = item.edit ? <p className="student-item"><input type="text" placeholder={name} /></p> :  <p className="student-item">{name}</p>;
            const studentItemEmail = item.edit ? <p className="student-item"><input type="text" placeholder={email}></input></p> : <p className="student-item">{email}</p>;
            const saveBtn = item.edit ?  <p className="student-item save"><button>Save</button></p> : null;
            return(
                <div className="student-row" key={id}>
                    <p className="student-item">{id}</p>
                    {studentItemName}
                    {studentItemEmail}
                    <p className="student-item">
                        <button id={id} onClick={(e, id)=>onClickEdit(e, id)}>Edit</button>
                    </p>
                    <p className="student-item">
                        <button id={id} onClick={(e, id)=>onClickDelete(e, id)}>Delete</button>
                    </p>
                    {saveBtn}
                </div>
            )
        }, stundentsList);

        return (
            <div className="students-table-body">
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
            <div className="students-table-body">
                {rows}
            </div> 
        )
    }
}   

export default Student;