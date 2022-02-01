import React, { Component } from 'react'

export default class FormDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            age: 0
        }
    }
    handleChangeName = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            // name:event.target.value.toUpperCase(),
            name: event.target.value.substr(0, 10)
        })
    }

    handleChangeAge = e => {
        const value = e.target.value
        this.setState({
            age: value
        })
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.name === "age" ?
            e.target.value.substr(0, 2) : (e.target.name === "name" ? e.target.value.toUpperCase() :
                e.target.value)

        this.setState({
            [name]:value
        })

        console.log([name],value)

    }



    render() {
        return (
            <div>
                <h1>FormDemo</h1>
                <input type="text"
                    // defaultValue="Hello"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Enter a name" /><br></br>

                <input type="text"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChange}
                    placeholder="Enter a age" />
            </div>
        )
    }
}
