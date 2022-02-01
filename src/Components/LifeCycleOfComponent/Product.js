/*
Class Component's Life Cycle

Each Component has several lifecycle methods.These methods are used for Mount,Update and UnMount Component

Mounting:- Component is rendered to the DOM for the first time 

Updating:- Re-rendered the Component by Changes to props or state.

UnMounting:- Component is removed from DOM.

Mounting:These methods are called in the following order when component inserted into the DOM.

1.) Constructor()
2.) static getDerivedStateFromProps()
3.) render()
4.) componentDidMount()

Updating:- These methods are called in the following order when component is being re-rendered

1.) static getDerivedStateFromProps()
2.) shouldComponentUpdate()
3.) render()

Unmouting:- Component removed from the DOM
1.) componentWillUnMount()
*/

import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            product_price:this.props.price,
            show : true
        }
        console.log("Calling constructor!!!")
    }
    
    //Called immediately after a component is mounted
    componentDidMount(){
        console.log("Calling componentDidMount!!")
        setTimeout(()=>{
            this.setState({
                product_price:this.state.product_price + 123.121
            })
        },3000)
    }

    static getDerivedStateFromProps(props,state){
        console.log("Calling getDerivedStateFromProps!!!",props,state)
        return state
    }

    shouldComponentUpdate(){
        console.log("calling shouldComponentUpdate!!")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Calling getSnapshotBeforeUpdate!!")
        document.getElementById("div1").innerHTML = "<h1> Before Update, Product Price was in Rs:"+prevState.product_price+"</h1>"
        return null
    }

    componentDidUpdate(){
        console.log("Calling componentDidUpdate!!")
        document.getElementById("div2").innerHTML = "<h1> After Update, Product Price  is Rs:"+this.state.product_price+"</h1>"
    }

    updateProductPrice =()=> {
        this.setState({
            product_price:this.state.product_price + 123.121
        })
    }

    delChild = ()=> {
        this.setState({
            show:false
        })
    }

    render() {
        console.log("Calling render!!!")
        //destructuring of props
        const {name,rollno,course,fees} = this.props.getStudent
        const { product_price } = this.state
        return (
            <div>
                <h1>Life Cycle Of Component</h1>
                {this.state.show ? <ChildComponent /> : <h1 style={{color:'red'}}>Component has been removed</h1>}
                <h1>Product Price:{product_price}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                <button onClick={this.updateProductPrice}>Update</button>
                <button onClick={this.delChild}>Delete</button>
                <h2>Name:{this.props.getStudent.name}</h2>
                <h2>Rollno:{rollno}</h2>
                <h2>Course:{course}</h2>
            </div>
        )
    }
}

class ChildComponent extends Component
{
//Called immediately before a component is destroyed. 
    componentWillUnmount(){
    console.log("Calling componentWillUnmount")
    }

    render(){
        return (
            <h1>ChildComponent</h1>
        )
    }
}