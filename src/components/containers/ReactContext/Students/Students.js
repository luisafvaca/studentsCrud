import React, {Component} from "react";
import Student from "./Student/Student";
import './Students.css'

class Students extends Component {
    state = {
        listStudent : [
            {id: 1, name: 'Albert Jimenez', email:'albert.jimenez@globant.com'},
            {id: 2, name: 'Andres Jimenez', email:'albert.jimenez@globant.com'},
            {id: 3, name: 'Antonio Jimenez', email:'albert.jimenez@globant.com'}
        ],
        editing: false
    }

    render(){
        const students = this.state.listStudent.map( e =>{
           return <Student id={e.id} name={e.name} email={e.email} enableEditing={this.state.editing}/>
        });

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