import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
	state = {
		task : ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid() });
		this.setState({
			task : ''
		});
	};

	render() {
		return (
			<form action='' onSubmit={this.handleSubmit}>
				<label htmlFor='task'>New Todo</label>
				<input
					type='text'
					placeholder='New Todo'
					id='task'
					value={this.state.task}
					onChange={this.handleChange}
					name='task'
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}
export default NewTodoForm;
