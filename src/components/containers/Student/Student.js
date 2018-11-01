import React from 'react';
import {map} from 'ramda';

class Student extends React.Component {

    constructor(props){
        super();
    }

    getRows(stundentsList, onClickEdit, onClickDelete){
        console.log(onClickEdit)
        const rows = map((item)=>{
            return(
                <div className="student-row" key={item.id}>
                    <p className="student-item">{item.id}</p>
                    <p className="student-item">{item.name}</p>
                    <p className="student-item">{item.email}</p>
                    <p className="student-item"><button id={item.id} onClick={(e)=>onClickEdit(e)}>Edit</button></p>
                    <p className="student-item"><button id={item.id} onClick={(e)=>onClickDelete(e)}>Delete</button></p>
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