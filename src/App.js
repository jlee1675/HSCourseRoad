import React, { Component } from 'react';
import './App.css';
import List from './containers/List';
import LeftMenu from './containers/LeftMenu'
import Menu from './components/Menu'
import db from './util/db';


class App extends Component {
  constructor (props){
      super(props);
      this.state = {
        courses: [],
        years: [{Year: 'Freshman', Schedule: []}, {Year: 'Sophomore', Schedule: []}, {Year: 'Junior ', Schedule: []}, {Year: 'Senior', Schedule: []}]
      }
    this.add = this.add.bind(this);

    db.collection("courses").get().then((querySnapshot) => {
      let dataAr = [];
      querySnapshot.forEach((doc) => {
          dataAr.push(doc.data());
          this.setState({courses: dataAr});
      });
    });
  }
  add(index) {
    
  }
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="App">
          <LeftMenu className="LeftMenu" db={db} add= {this.add} />
          <List className="List" years={this.state.years}/> 
        </div>
      </div>
    );
  }
}

export default App;
