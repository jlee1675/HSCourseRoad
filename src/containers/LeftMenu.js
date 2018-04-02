import React, { Component } from 'react';
import './LeftMenu.css';

class LeftMenu extends Component {
    constructor (props){
        super(props);
        this.state = {
            courses: []
        }
        this.props.db.collection("courses").get().then((querySnapshot) => {
            let dataAr = []
            querySnapshot.forEach((doc) => {
                dataAr.push(doc.data());
                this.setState({courses: dataAr});
            });
        });
        this.add = this.add.bind(this);
    }
    add(index) {
        // needs to change the setState of schedule in List
    }
    render(){
        return(
            <nav className="nav flex-column">
                {
                    this.state.courses.map((d,i) => (
                        <a key={i} className="nav-link active" href="#" onClick={() => {this.props.add(i)}}> {d.name} </a>
                    ))
                }
            </nav>
        )
    }
}

export default LeftMenu;