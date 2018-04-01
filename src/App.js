import React, { Component } from 'react';
import './App.css';
import List from './containers/List';
import Menu from './components/Menu'
import db from './util/db';


class App extends Component {
  constructor (props){
      super(props);
      this.state = {
        users: []
      }

    db.collection("users").get().then((querySnapshot) => {
      let dataAr = [];

      querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          dataAr.push(doc.data());
          this.setState({users: dataAr});
      });
    });
  }
  render() {
    return (
      <div className="container">
        {
          /*this.state.users.map((d,i) => (
            <div key={i}> {d.firstName}</div>
          ))*/
        }
        <Menu />
        <List className= "List" /> 
        <div className = "LeftMenu"></div>
      </div>
    );
  }
}

export default App;
