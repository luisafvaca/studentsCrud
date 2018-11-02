import React, {Component} from "react";
import Student from "./Student/Student";
import './Students.css'
import SomeContext from "../SomeContext";

class Students extends Component {
  //  static contextType = SomeContext;

    state = {
        listStudent : [],
        editing: false
    }

    componentWillMount(){
       /* <SomeContext.Consumer>
            {someContext => {
                return this.setState({listStudent: someContext.students});}}
        </SomeContext.Consumer>*/
    }

    render(){
        const students = this.state.listStudent.map( e =>{
           return <Student key={e.id} id={e.id} name={e.name} email={e.email} enableEditing={this.state.editing}/>
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