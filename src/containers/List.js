import React, { Component } from 'react';
import './List.css';
import AddMenu from './AddMenu'

const Popup = (props) => {
    if (props.addid < 0) return null;
    return (
        <div className="popup" style={{
                                        top: props.popupPos[1] + 20 + "px",
                                        left: props.popupPos[0] - 50 + "px"
                                        }}>
            <AddMenu />
            <button className="popupButton" onClick={props.onClose}> Cancel </button>
            <button className="popupButton" onClick={props.onClose}> </button>
        </div>
    )
}

class List extends Component {
    constructor (props){
        super(props);
        this.state = {
            addid: -1,
            popupPos: [-1000,-1000],
            schedule:[]
        }
        this.setAddId = this.setAddId.bind(this);
    }
    setAddId(newaddid, event){
        let newPopupPos = (event) ? [event.clientX, event.clientY] : [-1000,-1000]
        this.setState({addid: newaddid, popupPos: newPopupPos })
    }
    render(){
        console.log(this.props.years.length);
        let years = this.props.years.map((task, i)=>(
            <div className="listItem" key={i}>
                <div>{task.Year} </div>
                <button type="button" className="addButton" onClick={ev => this.setAddId(i,ev)}> 
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        ));
        return(
            <div>
                <div className="taskList">{years}</div>
                <Popup 
                    menuid={this.state.menuid} 
                    popupPos={this.state.popupPos}
                    onClose={ () => { this.setAddId(-1) }}
                />
            </div>
        )
    }
}

export default List;