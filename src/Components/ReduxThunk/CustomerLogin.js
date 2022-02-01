import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { custLogin } from './Action'

class CustomerLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.getCustomerLogin(this.state.email,this.state.password)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        details: state.login.details,
        error: state.login.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCustomerLogin: (email, password) => {
            dispatch(custLogin(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLogin)