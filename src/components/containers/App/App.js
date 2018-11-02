import React from 'react';

import Students from '../../containers/Students/Students';
import StudentsReactContext from '../ReactContext/Students/Students';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Students Crud</h1>
        <Students></Students>
        <StudentsReactContext/>
      </div>
    );
  }
}

export default App;
