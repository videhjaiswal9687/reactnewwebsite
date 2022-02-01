import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
        //creating ref
        this.textInput = React.createRef()
    }

    // componentDidMount() {
    //     console.log(this.textInput.current)
    //     this.textInput.current.focus()
    // }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            value:this.textInput.current.value
        })
    }

    render() {
        return (
            <div>
                <h1>Demo</h1>
                {/* <form>
                    Name:<input type="text"
                        placeholder="Enter a Name" /><br></br>
                    Password:<input type="text"
                        ref={this.textInput}
                        placeholder="Enter a Password" /><br></br>
                    Address:<input type="text" placeholder="Enter a Address" />
                </form> */}
                <h1>Data is:{this.state.value}</h1>
                <form onSubmit={this.handleSubmit}>
                     Input :<input type="text" ref={this.textInput}
                     placeholder="Enter a Value"
                     />
                     <input type="submit"/>
                </form> 
            </div>
        )
    }
}
