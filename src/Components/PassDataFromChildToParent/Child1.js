import React, { Component } from 'react'

export default class Child1 extends Component {

    sendData = () => {
        this.props.parentCallBack("Hello EveryOne!!", 223232)
    }

    render() {
        return (
            <div>
                <h1>Child1 Component</h1>
                <button onClick={this.sendData}>
                    SendDataToParent
                </button>
                <button onClick={()=> this.props.parentCallBack("Hii Guys",45454)}>
                    SendDataToParent1
                </button>
            </div>
        )
    }
}
