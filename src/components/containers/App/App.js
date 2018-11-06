import React from 'react';

import Students from '../../containers/Students/Students';
import StudentsReactContext from '../ReactContext/Students/Students';
import SomeContext from "../ReactContext/SomeContext";
import {fetchData} from "../Students/dataApi"

import './App.css';
import students from '../../../mocks/students';

class App extends React.Component {

  state = { myStudents:[]}
  
  componentWillMount() {
    fetchData()
    .then( r=>{
       this.setState({myStudents :r });
   });
  }

  componentDidMount(){
  
  }

  render() {
    return (
      <div className="App">
        <h1>Students Crud</h1>
        <Students></Students>

        <SomeContext.Provider value={{students:this.state.myStudents}}>
          <StudentsReactContext/>
        </SomeContext.Provider>
      </div>
    );
  }
}

export default App;
