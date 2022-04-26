import { React, Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='todo-form'>
				<form>
					<input type='text' placeholder=' ' name='name' />
					<button
						className='todo-save'
						placeholder='Input todo'
						type='submit'
					>
						SAVE
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
