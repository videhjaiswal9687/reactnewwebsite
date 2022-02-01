import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                 <h1>Guest Component</h1>
                 <h1>Name:{this.props.guestname}</h1>
            </div>
        )
    }
}
