import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                 <h1>Child Component</h1>
                 <h1>Name:{this.props.getName}</h1>
            </div>
        )
    }
}
