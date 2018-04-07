import React, { Component } from 'react';
import './List.css';

class List extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
        //this.delete = this.delete.bind(this);
    }
    // delete(index){
    //     let newState = {
    //         years: [...this.state.years.slice(0, index), ...this.state.years.slice(index + 1)]
    //     }
    //    this.setState(newState);
    // }
    add(){
        let newState = {
            
        } 
    }
    render(){
        let years = this.props.years.map((task, i)=>(

            <div className="listItem" key={i}>
                <div>{task.Year} </div>  
                <div>{task.Schedule}</div>
                {/*<div onClick={() => {this.delete(i)}}>X</div>*/}
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