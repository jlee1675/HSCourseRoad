import React, { Component } from 'react';
import './App.css';
import List from './containers/List';
import AddMenu from './containers/AddMenu'
import Menu from './components/Menu'
import db from './util/db';


class App extends Component {
  constructor (props){
      super(props);
      this.state = {
        courses: [],
        years: [{Year: 'Freshman', Schedule: ['a', 'b']}, {Year: 'Sophomore', Schedule: ['a', 'b']}, {Year: 'Junior ', Schedule: ['a', 'b']}, {Year: 'Senior', Schedule: ['a', 'b']}]
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
  add(year) {
    /**
     * TODO: onclick, change the setState of the schedule, and on the click of the year
     */


  }
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="App">
          <List className="List" years={this.state.years}/> 
        </div>
      </div>
    );
  }
}

export default App;
