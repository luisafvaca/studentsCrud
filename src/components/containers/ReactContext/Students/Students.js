import React, {Component} from "react";
import Student from "./Student/Student";
import './Students.css'
import SomeContext from "../SomeContext";

import {map} from "ramda";

class Students extends Component {
    static contextType = SomeContext;

    state = {
        editing: false
    }

    render(){
        const studentsList = this.context.students;
        const students = map((e)=>{
           return <Student key={e.id} id={e.id} name={e.name} email={e.email} enableEditing={this.state.editing}/>
        }, studentsList);

        return (
            <section className="students-wrapper">
                <div className="students-table-header">
                    <div className="students-table-header-item">Id</div>
                    <div className="students-table-header-item">Name</div>
                    <div className="students-table-header-item">Email</div>
                    <div className="students-table-header-item">Edit</div>
                    <div className="students-table-header-item">Delete</div>
                </div>
                {students}
            </section>  
        );
    }
}

export default Students;