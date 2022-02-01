import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {

    state = {
        message: "",
        value: 0
    }

    callBackFunction = (childData, childValue) => {
        this.setState({
            message: childData,
            value: childValue
        })
    }

    render() {
        return (
            <div>
                <h1>Parent1 Component</h1>
                <Child1 parentCallBack={this.callBackFunction} />
                <h1>Message:{this.state.message}</h1>
                <h1>Value:{this.state.value}</h1>
            </div>
        )
    }
}
