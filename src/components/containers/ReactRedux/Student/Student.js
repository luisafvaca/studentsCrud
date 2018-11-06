import React, {Component} from 'react';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { savingEmail } from '../Students/StudentsActions';

import "./Student.css";

class Student extends Component {

    constructor(props){
        super(props);
        this.state = {
            changedEmail: {},
        }
        this.updateinput = this.updateinput.bind(this);
        this.saving = this.saving.bind(this);
    }

    updateinput(e){
        let currentChanged = {};
        const itemsChanged = {};
       
        itemsChanged.name = e.target.value;
        itemsChanged.id = e.target.id;
        itemsChanged.typeField = e.target.name;
        
        currentChanged = itemsChanged

        this.setState({
            changedEmail: currentChanged
        }) 

    }

    saving(){
        this.props.changedEmail(this.state.changedEmail)
    }

    getRows(stundentsList, onClickEdit, onClickDelete){
        const rows = map((item)=>{
            const id    = item.id,
                  name  = item.name,
                  email = item.email;
    
            // const studentItemEmail = item.edit ? 
            //                         <p className="student-item"><input type="email" id={id} name="email" placeholder={email} maxLength="60" onChange={this.updateinput} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]" /></p> 
            //                         : <p className="student-item">{email}</p>;
            // const saveBtn = item.edit ?  <p className="student-item save"><button onClick={this.saving}>Save</button></p> : null;
            return(
                <div className="student-row" key={id}>
                    <p className="student-item">{id}</p>
                    <p className="student-item">{name}</p>
                    <p className="student-item">{email}</p>
                    <p className="student-item">
                        <button id={id} onClick={(e, id, name, email)=>onClickEdit(e, id, name, email)}>Edit</button>
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
        const rows = this.getRows(studentList, onClickEdit, onClickDelete);
        return (
            <div className="students-table-body">
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