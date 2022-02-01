import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: "",
            email: "",
            password: "",
            gender: "Male",
            city: "",
            address: "",
            dob: ""
        }
        this.state = this.initialState
    }
    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]:value
        })
    }
    handleSubmit = e =>{
        //It prevents a browser to reload or refresh
        e.preventDefault()
        console.log(this.state)
        this.setState(this.initialState)
    }
    render() {
        return (
            <div>
                <marquee><h1>User Details</h1></marquee>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Name:</label>
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Enter a Name"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Email:</label>
                        <input type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="Enter a Email"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Password:</label>
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            placeholder="Enter a Password"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Gender:</label>
                        <input type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        />
                        <label style={{ fontWeight: 'bold' }}>Male</label>

                        <input type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        />
                        <label style={{ fontWeight: 'bold' }}>Female</label>

                        <input type="radio"
                            name="gender"
                            value="Other"
                            checked={this.state.gender === "Other"}
                            onChange={this.handleChange}
                        />
                        <label style={{ fontWeight: 'bold' }}>Other</label>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>City:</label>
                        <select name="city" value={this.state.city}
                            onChange={this.handleChange}>
                            <optgroup label="M.P">
                                <option value="Indore">Indore</option>
                                <option value="Ujjain">Ujjain</option>
                            </optgroup>

                            <optgroup label="Maharastra">
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Address:</label>
                        <textarea name="address" value={this.state.address}
                            placeholder="Enter a Address"
                            onChange={this.handleChange}
                            rows={5}
                            cols={15}
                        ></textarea>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold' }}>Date Of Birth:</label>
                        <input type="date" name="dob" value={this.state.dob}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
