import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import List from './containers/List';
import Footer from './containers/Footer';
import Menu from './components/Menu'
//import LeftMenu from './containers/LeftMenu';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <List className= "List" /> 
        <div className = "LeftMenu"></div>
      </div>
    );
  }
}

export default App;
