//Class Component (StateFull Component)
import React, { Component } from "react";

const stu_Style = {
    backgroundColor:'orange',
    color:'white',
    border:'5px solid black'
}

const fac_Style = {
    backgroundColor:'teal',
    color:'white',
    border:'5px solid black'
}

export class Student extends React.Component
{
   render(){
       return (
           <div style={stu_Style}>
               {/* <Faculty name="Vishal Verma" id={343} salary={34567.34} subject="Math"/> */}
               <h1>STUDENT DETAILS</h1>
               <h1 style={{backgroundColor:'red',color:'white'}}>Name:{this.props.name}</h1>
               <h1>Rollno:{this.props.rollno}</h1>
               <h1>Course:{this.props.course}</h1>
               <h1>Fees:{this.props.fees}</h1>
           </div>
       )
   }
}

export class Faculty extends Component
{
   render(){
       return(
           <div style={fac_Style}>
               <h1>FACULTY DETAILS</h1>
               <h1>Name:{this.props.name}</h1>
               <h1>Id:{this.props.id}</h1>
               <h1>Salary:{this.props.salary}</h1>
               <h1>Subject:{this.props.subject}</h1>
           </div>
       )
   }
}

//export default Student
//export {Student,Faculty}