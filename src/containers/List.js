import React, { Component } from 'react';
import './List.css';
import db from '../util/db.js';

class List extends Component {
    constructor (props){
        super(props);
        this.state = {
            years: [{Year: 'Freshman', Schedule: []}, {Year: 'Sophomore', Schedule: []}, {Year: 'Junior ', Schedule: []}, {Year: 'Senior', Schedule: []}],
            courses: []
        }
        this.delete = this.delete.bind(this);

        db.collection("courses").get().then((querySnapshot) => {
            let dataAr = [];
            querySnapshot.forEach((doc) => {
                dataAr.push(doc.data());
                this.setState({courses: dataAr});
            });
        });
    }
    delete(index){
        let newState = {
            years: [...this.state.years.slice(0, index), ...this.state.years.slice(index + 1)]
        }
       this.setState(newState);
    }
    add(){
        let newState = {
            
        }
        
    }
    render(){
        let years = this.state.years.map((task, i)=>(
            <div className="listItem" key={i}>
                <div>{task.Year} </div>  
                <div>{task.Schedule} </div>
                <div onClick={() => {this.delete(i)}}>X</div>
            </div>  
        ));
        return(
            <div>
                <div>
                {
                    this.state.courses.map((a, i) => (
                        <div key={i}> {a.name}</div>
                    ))
                }
                </div>
                <div className="taskList">
                {years}
                </div>
            </div>
        )
    }
}

export default List;