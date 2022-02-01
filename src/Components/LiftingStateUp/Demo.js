import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Rahul Sharma"
        }
        this.handleNameChange=this.handleNameChange.bind(this)
    }

    handleNameChange(newName) {
        this.setState({
            name: newName
        })
    }

    render() {
        return (
            <div>
                <h1>Demo Component</h1>
                <h1>Name:{this.state.name}</h1>
                <User username={this.state.name}
                    parentNameChange={this.handleNameChange}
                />
                <Guest guestname={this.state.name} />
            </div>
        )
    }
}
