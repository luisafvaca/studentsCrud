import React from 'react';

import Students from '../../containers/Students/Students';
import StudentsReactContext from '../ReactContext/Students/Students';
import SomeContext from "../ReactContext/SomeContext";
import {fetchData} from "../Students/dataApi"

import './App.css';

class App extends React.Component {
 
  componentDidMount(){
    fetchData()
    .then( r=>{
       this.context.students = r;
   });
  }

  render() {
    return (
      <div className="App">
        <h1>Students Crud</h1>
        <Students></Students>

        <SomeContext.Provider>
          <StudentsReactContext/>
        </SomeContext.Provider>
      </div>
    );
  }
}

export default App;
