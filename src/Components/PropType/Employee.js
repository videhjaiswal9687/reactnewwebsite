import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Employee extends Component {
    render() {
        return (
            <div>
                <h1>PropTypeDemo</h1>
                <h1>Hello, {this.props.name}!!,Salary: {this.props.salary } </h1>
                <h1>Department:{this.props.depart}</h1>
            </div>
        )
    }
}
Employee.propTypes = {
    name:PropTypes.string.isRequired,
    salary:PropTypes.number.isRequired,
    depart:PropTypes.string.isRequired
}

//Default Props
Employee.defaultProps = {
    name:"Videh Jaiswal",
    salary:1000.0,
    depart:"IT"
}