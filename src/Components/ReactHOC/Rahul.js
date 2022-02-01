import React, { Component } from 'react'
import Skilled from './SkilledStudent'
class Rahul extends Component {
    render() {
        return (
            <div>
                <h1>Student Name :Rahul </h1>
                <h1>Course:{this.props.hoccourse}</h1>
                <h1>Hours:{this.props.hochours}</h1>
                <h1>Address:{this.props.address}</h1>
                <h1>IntershipGrade:{this.props.hocgrade}</h1>
                <button onClick={this.props.hoctrainingProgress}>UpdateHours</button>
            </div>
        )
    }
}
export default Skilled(Rahul,6);