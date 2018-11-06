import React from 'react';

import Students from '../../containers/Students/Students';
import StudentsReactContext from '../ReactContext/Students/Students';
import SomeContext from "../ReactContext/SomeContext";
import {fetchData} from "../Students/dataApi"

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
    console.log(this.state, 'is rendering')
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
