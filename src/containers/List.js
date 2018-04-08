import React, { Component } from 'react';
import './List.css';
import AddMenu from './AddMenu'

class List extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
    }
    add(){
        let newState = {
        } 
    }
    render(){
        let years = this.props.years.map((task, i)=>(
            <div>
                <div className="listItem" key={i}>
                    <div>{task.Year} </div>
                    <button type="button" className="btn btn-primary btn-sm"> + </button>
                </div>
            </div>
        ));
        return(
            <div>
                <div className="taskList">{years}</div>
            </div>
        )
    }
}

export default List;