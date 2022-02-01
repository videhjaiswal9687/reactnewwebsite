import React, { Component } from 'react'

export default class Eventhandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: true,
            name:"",
            age:"",
            address:"",
            emp_name:"",
            emp_id:0,
            emp_salary:0.0
        }
        //this.showHideContent = this.showHideContent.bind(this)
    }

    showHideContent() {
        this.setState((state) => ({
            isShow: !state.isShow
        }))
    }

    empDetails = (name,id,salary) =>{
        console.log(name,id,salary)
        this.setState({
            emp_name:name,
            emp_id:id,
            emp_salary:salary
        })
    }

    userDetails(name,age,address){
        console.log(name,age,address)
        this.setState({
            name:name,
            age:age,
            address:address
        })
    }

    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <button onClick={this.showHideContent.bind(this)}>
                    {this.state.isShow ? 'Hide' : 'Show'}
                </button>
                {this.state.isShow ? <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        pesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div> : null}<br></br> 
                <button onClick={()=>this.userDetails("Neha Sharma",23,"Indore M.P")}>
                  UserDetails
                </button>
                {/* <button onClick={this.userDetails.bind(this,"Neha Sharma",23,"Indore M.P")}>
                  UserDetails
                </button> */}
                <h1>Name:{this.state.name}</h1>
                <h1>Age:{this.state.age}</h1>
                <h1>Address:{this.state.address}</h1>
                <button onClick={()=> this.empDetails("Priya Sharma",34343,23456.232)}>
                  EmpDetails
                </button>
                <h1>EmpName:{this.state.emp_name}</h1>
                <h1>EmpId:{this.state.emp_id}</h1>
                <h1>EmpSalary:{this.state.emp_salary}</h1>

            </div>
        )
    }
}
