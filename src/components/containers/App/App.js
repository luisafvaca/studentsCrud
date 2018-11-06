import React from 'react';

import Students from '../ReactRedux/Students/Students';
import StudentsReactContext from '../ReactContext/Students/Students';
import SomeContext from "../ReactContext/SomeContext";
import {fetchData} from "../ReactRedux/Students/dataApi";

import './App.css';

class App extends React.Component {

  state = { myStudents:[]}
  
  componentDidMount(){
    fetchData()
    .then( item=>{
       this.setState({myStudents :item });
   });
  
  }

  render() {
    return (
      <div className="App">
        <h1>Students Crud Redux</h1>
        <Students></Students>
        <h1>Students Crud Context</h1>
        <SomeContext.Provider value={{students:this.state.myStudents}}>
          <StudentsReactContext/>
        </SomeContext.Provider>
      </div>
    );
  }
}

export default App;
