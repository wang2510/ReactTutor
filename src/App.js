import React, { Component } from 'react';
import EventDemo from './button-events/EventDemo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <EventDemo
        myName = 'Jason'
       />  
      </div>
    );
  }
}

export default App;
