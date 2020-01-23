import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./component/HomePage";

class App extends React.Component {
  render() {
    return(
      <HomePage FirstName="Jada" />
    );
  }
}
  
export default App;
