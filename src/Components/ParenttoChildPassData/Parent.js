import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Videh Jaiswal"
        }
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <Child getName={this.state.name}/>
            </div>
        )
    }
}
