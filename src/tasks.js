import React, { Component } from 'react';
import { addTask } from './actions';
import { connect } from 'react-redux';


class Tasks extends Component {
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
                            <th>Data created</th>
                            <th>Classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map(task => (
                            <tr key={task.id}>
                                <th>{task.id}</th>
                                <td>{task.dateCreated}</td>
                                <td>{task.task}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task&nbsp;</label>
                        <input required type='text'
                                placeholder="Add Task"
                                value={this.state.task}
                                onChange={(e) => this.setState({ task: e.target.value })} />
                    </div>
                </form>
                <button onClick={() => { this.props.addTask(this.state.task) }}><span> Add </span></button>
            </div>

        );
    }
}


const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
})


export default connect(null, mapDispatchToProps)(Tasks);