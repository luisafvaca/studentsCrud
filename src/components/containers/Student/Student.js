import React from 'react';
import {map} from 'ramda';

class Student extends React.Component {

    constructor(props){
        super();
    }

    getRows(stundentsList, onClickEdit, onClickDelete){
        console.log(onClickEdit)
        const rows = map((item)=>{
            const id    = item.id,
                  name  = item.name,
                  email = item.email;
            return(
                <div className="student-row" key={id}>
                    <p className="student-item">{id}</p>
                    <p className="student-item">{name}</p>
                    <p className="student-item">{email}</p>
                    <p className="student-item">
                        <button id={id} onClick={(e, id)=>onClickEdit(e, id)}>Edit</button>
                    </p>
                    <p className="student-item">
                        <button id={id} onClick={(e, id)=>onClickDelete(e, id)}>Delete</button>
                    </p>
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
        console.log(this.props, 'edit - delete')
        const rows = this.getRows(studentList, onClickEdit, onClickDelete);
        return (
            <div className="students-table-body">
                {rows}
            </div> 
        )
    }
}   

export default Student;