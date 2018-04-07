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
        console.log(this.state.courses.length);
    }
    add(index) {
        // needs to change the setState of schedule in List
    }
    render(){
        return(
            <nav className="nav flex-column">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Year
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Freshman</a>
                        <a className="dropdown-item" href="#">Sophomore</a>
                        <a className="dropdown-item" href="#">Junior</a>
                        <a className="dropdown-item" href="#">Senior</a>
                    </div>
                </div>
                {
                    this.state.courses.map((d,i) => (
                        <button key={i} className="btn btn-primary" type="submit" onClick={() => {this.props.add}}>{d.name}</button>
                    ))
                }
            </nav>
        )
    }
}

export default LeftMenu;