import React from 'react';
import {map} from 'ramda';

const Student = (studentItems) => {
    return map((item)=>{
        return (
            <div className="students-item">
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>Edit</p>
            <p>Delete</p>
        </div>
        )
    }, studentItems)
}

export default Student;