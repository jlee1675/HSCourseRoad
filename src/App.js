import React, { Component } from 'react';
import './App.css';

import List from './containers/List';
import DBTest from './containers/DBTest';
import Menu from './components/Menu'
//import LeftMenu from './containers/LeftMenu';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <DBTest />
        <List className= "List" /> 
        <div className = "LeftMenu"></div>
      </div>
    );
  }
}

export default App;
