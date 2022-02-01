import React, { Component } from 'react'


export default class StudentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stuRecord: [
                {
                    id: 121,
                    name: "Rahul Sharma",
                    rollno: 1212,
                    course: "BCA",
                    fees: 34567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 44,
                    name: "Neha Sharma",
                    rollno: 454,
                    course: "MCA",
                    fees: 45567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 565,
                    name: "Priya Verma",
                    rollno: 565,
                    course: "BTech",
                    fees: 56789.454,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 5656,
                    name: "Vijay Sharma",
                    rollno: 244512,
                    course: "BCom",
                    fees: 24567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 676,
                    name: "Raj Yadav",
                    rollno: 4334,
                    course: "MTech",
                    fees: 64567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 121,
                    name: "Rahul Sharma",
                    rollno: 1212,
                    course: "BCA",
                    fees: 34567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 44,
                    name: "Neha Sharma",
                    rollno: 454,
                    course: "MCA",
                    fees: 45567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 565,
                    name: "Priya Verma",
                    rollno: 565,
                    course: "BTech",
                    fees: 56789.454,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 5656,
                    name: "Vijay Sharma",
                    rollno: 244512,
                    course: "BCom",
                    fees: 24567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    id: 676,
                    name: "Raj Yadav",
                    rollno: 4334,
                    course: "MTech",
                    fees: 64567.343,
                    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
            ]
        }
    }

    render() {
        return (
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',
            flexWrap:'wrap'}}>
                {/* <h1>Student Record</h1> */}
                {/* <table>
                    <thead>
                        <tr style={{ fontSize: 28 }}>
                            <th>Name</th>
                            <th>Rollno</th>
                            <th>Course</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.stuRecord.map((student) =>
                            <tr key={student.id} style={{ backgroundColor: 'red', fontSize: 28 }}>
                                <td>{student.name}</td>
                                <td>{student.rollno}</td>
                                <td>{student.course}</td>
                                <td>{student.fees}</td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
                {this.state.stuRecord.map((student) =>
                    <div style={{backgroundColor:'orange'}}>
                        <div>
                            <a href={student.img}>
                                <img src={student.img} style={{ width: 100, height: 100 }}>
                                </img>
                            </a>
                        </div>
                        <h1>{student.name}</h1>
                        <h1>{student.rollno}</h1>
                        <h1>{student.course}</h1>
                        <h1>{student.fees}</h1>
                    </div>
                )}
            </div>
        )
    }
}
