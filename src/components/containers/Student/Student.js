import React from 'react';
import {map} from 'ramda';

class Student extends React.Component {

    getRows(stundentsList){
        const rows = map((item)=>{
            return(
                <div className="student-row" key={item.id}>
                    <p className="student-item">{item.id}</p>
                    <p className="student-item">{item.name}</p>
                    <p className="student-item">{item.email}</p>
                    <p className="student-item"><button>Edit</button></p>
                    <p className="student-item"><button>Delete</button></p>
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
        const rows = this.getRows(studentList);
        return (
            <div className="students-table-body">
                {rows}
            </div> 
        )
    }
}   

export default Student;