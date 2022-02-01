/*

Constructor is a method used to intialize an object's state in a class.It called automatically
during the creation of an object in a class

In React
1.) It used for initialzing local state of the component by assigning an object to this.state.
2.) It used for binding event handler methods that occur in our component.
3.) We need to call super(props) method before any other statement, if we do not call , then
this.props will be undefined in the constructor
4.) If we want to update the state , we have to call this.setState() method.
*/

import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props){
        super(props)
        this.state = {
            salary:34567.343,
            name:this.props.setName
        }
       this.stateHandling = this.stateHandling.bind(this)
    }

    //arrow function
    // updateState = ()=> {
    //     //passing object in setState
    //     this.setState({
    //         salary: this.state.salary + 100
    //     })
    //    // console.log(this)
    // }

    updateState = ()=> {
        //passing object in setState
        // this.setState(function(state,props){
        //     //console.log(state)
        //     return {
        //         salary:state.salary + 100
        //     }
        // })
        this.setState((state)=> (
            {
                salary:state.salary + 100,
                name: state.name + " Sharma"
            }
        ))
      
    }

    //normal function
    stateHandling(){
        this.updateState()
        this.updateState()
        //console.log(this)
    }

    render() {
        return (
            <div style={{backgroundColor:'teal',color:'white'}}>
                <h1>Employee Details</h1>
                {/* <h1>Name:{this.props.setName}</h1> */}
                <h1>Name:{this.state.name}</h1>
                <h1>Salary:{this.state.salary}</h1>
                <button onClick={this.updateState}
                style={{fontSize:'32px'}}
                >Update</button>
                <button onClick={this.stateHandling}
                style={{fontSize:'32px'}}
                >Update1</button>
            </div>
        )
    }
}
