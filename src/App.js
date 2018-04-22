import React, { Component } from 'react';
import './App.css';
import List from './containers/List';
import AddMenu from './containers/AddMenu'
import Menu from './components/Menu'
import DataCollection from './util/DataCollection'


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      courses: [],
      years: [{Year: 'Freshman', Schedule: ['a', 'b']}, {Year: 'Sophomore', Schedule: ['a', 'b']}, {Year: 'Junior ', Schedule: ['a', 'b']}, {Year: 'Senior', Schedule: ['a', 'b']}],
      data: [],
      newText: "",
      selectedYear: -1,
      loading: false
    };
    this.loadData();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.addCourse = this.addCourse.bind(this);
  }
  addCourse(year, course) {
    let scheduleArray = [...this.state.years[year].Schedule];
    let index = scheduleArray.indexOf(course);
    if (index < 0) {
      scheduleArray.push(course);
    } else {
      scheduleArray = [...scheduleArray.slice(0, index), ...scheduleArray.slice(index + 1)]
    }
    let newYears = [...this.state.years];
    newYears[year] = scheduleArray;
    this.setState({years: newYears});
  }
  async loadData() {
   let data = await DataCollection.list(); 
   this.setState({courses: this.state.courses, years: this.state.years, data: data});  
  }
  async onButtonClick() {
    this.setState({loading: true});
    let item = {class: this.state.newText};
    let docref = await DataCollection.insert(item);

    let newData = [...this.state.data];
    item.id = docref.id;
    newData.push(item);
    this.setState({
      data: newData,
      newText: "",
      loading: false
    });
    //this.loadData();
  }
  render() {
    // controlled input = comes from the state
    return (
      <div className="container">
        <Menu />
        <div className="App">
          <List className="List" years={this.state.years} addCourse={this.addCourse} /> 
        </div>
        {this.state.data.map((doc, i) => {
          return (
            <div key={i}> 
              <span> {doc.id} </span>
              <span> {doc.class} </span>
            </div> 
          )
        })}

        <input 
          type="text" 
          value={this.state.newText}
          onChange={ (event) => {
            this.setState({newText: event.target.value});
          } }
        /> 
        <button onClick={this.onButtonClick}> submit </button>
          <div className={"loadingScreen" + (this.state.loading ? " active" : "")}>
            <div className="fa-3x">
              <i className="fas fa-circle-notch fa-spin"></i>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
