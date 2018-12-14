import React, { Component } from 'react';
import { addUser } from './actions';
import { connect } from 'react-redux';
import Tasks from './tasks';


class Users extends Component {
    state = {
        task: ""
    }


    render() {
        return (
            <div id='item'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.tasks.map(x=><div key={x}>{x.task}</div>)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
}


const mapDispatchToProps = dispatch => ({
  addUser: task => dispatch(addUser(task))
})


export default connect(null, mapDispatchToProps)(Users);