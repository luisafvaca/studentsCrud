import React from 'react';
import {map} from 'ramda';

const Student = (props) => {
    const students = props.stundentsList;

    const rows = map((item)=>{
       return(
            <div className="student-row" key={item.id}>
                <p className="student-item">{item.id}</p>
                <p className="student-item">{item.name}</p>
                <p className="student-item">{item.email}</p>
                <p className="student-item"><button>Edit</button></p>
                <p className="student-item"><button>Delete</button></p>
            </div>
       )}, students)
    return (
        <div className="students-table-body">
            {rows}
        </div> 
    )
}

export default Student;