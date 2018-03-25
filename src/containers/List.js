import React, { Component } from 'react';
import './List.css';

class List extends Component {
    constructor (props){
        super(props);
        this.state = {
            years: [{Year: 'Freshman', Schedule: []}, {Year: 'Sophomore', Schedule: []}, {Year: 'Junior ', Schedule: []}, {Year: 'Senior', Schedule: []}]
        }
        this.delete = this.delete.bind(this);
    }
    delete(index){
        let newState = {
            years: [...this.state.years.slice(0, index), ...this.state.years.slice(index + 1)]
        }
       this.setState(newState);
    }
 
    render(){
        
        let years = this.state.years.map((task, i)=>(
            <div className="listItem">
                <div>{task.Year} </div>  
                <div>{task.Schedule} </div>
                <div onClick={() => {this.delete(i)}}>X</div>
            </div>  
        ));

        return(
            <div>
                <div className="taskList">
                {years}
                </div>
            </div>
        )
    }
}

export default List;