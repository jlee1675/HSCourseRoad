import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import List from './containers/List';
import Footer from './containers/Footer';
//import LeftMenu from './containers/LeftMenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "Header"> Course Road </div>
        <List className= "List" /> 
        <div className = "LeftMenu"></div>
      </div>
    );
  }
}

export default App;
