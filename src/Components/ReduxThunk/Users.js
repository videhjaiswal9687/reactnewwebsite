import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
import { fetchUser } from './Action'

class Users extends Component {
    render() {
        return (
            <div>
                <h1>UserDetails</h1>
                <Button onClick={() => this.props.getUsers()}>
                    GetRecord
                </Button>
                {this.props.loading ? <h1>Downloading...</h1> :
                    <Table responsive border='1' style={{ color: 'white' }}>
                        {this.props.users.length > 0 ?
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Street</th>
                                    <th>City</th>
                                </tr>
                            </thead> : null }
                        <tbody>
                            {this.props.users.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        users: state.user.users,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);