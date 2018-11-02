
import React from "react";
import './Student.css'

const student = (props) => (
    <div className="student-row">
        <p className="student-item">{props.id}</p>
        <p className="student-item">{props.name}</p>
        <p className="student-item">{props.email}</p>
        <p className="student-item">Edit</p>
        <p className="student-item">Delete</p>     
    </div>
);

export default student;
