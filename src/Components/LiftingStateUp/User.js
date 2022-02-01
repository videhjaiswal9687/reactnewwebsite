import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <h1>Name:{this.props.username}</h1>
                <button onClick={()=> this.props.parentNameChange("Videh Jaiswal")}>
                    UserSendData
                </button>
            </div>
        )
    }
}
