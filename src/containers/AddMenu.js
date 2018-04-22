import React, { Component } from 'react';
import './AddMenu.css';

const years = ['fresh','soph', 'junior', 'senior']
const subjects = ['eng', 'math','pe', 'sci','socsci','art','lang']
const courses = {
   eng: ['English 1', 'English 2', 'AP Language and Composition', 'Creative Writing'],
   math: ['Algebra 1', 'Algebra 2','Precalculus', 'AP Statistics'],
   pe: ['PE Basketball', 'PE Tennis'],
   sci: [],
   socsci: [],
   art: [],
   lang: []
}

class AddMenu extends Component {
    constructor (props){
        super(props);
        this.state = {
            years: years[0],
            subject: subjects[0],
            courses: courses.eng 
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        console.log(event.target.value);
        this.setState({
            subject: event.target.value,
            courses: courses[event.target.value]
        });
    }
    render(){
        return(
            <nav className="nav flex-column">
                <select value={this.state.subject} onChange={this.onChange}>
                    {subjects.map((s, i) => (
                        <option value={s} key={i}>{s}</option>
                    ))}
                </select>
                <div >
                    {this.state.courses.map((c,i) => {
                        return(
                            <div className="courses" key={i}>{c}</div>
                    )})}
                </div>
            </nav>
        )
    }
}

export default AddMenu;