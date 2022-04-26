import { Component, React } from 'react';
import status from '../../constants/status';

class Item2 extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		const { todo } = this.props;
		return (
			<li className='todo-2'>
				<div className='todo-content'>{todo.name}</div>
				<div className={`todo-status ${status.getClass(todo.status)}`}>
					{status.getDisplayName(todo.status)}
				</div>
				<div className='todo-action'>
					<button className='todo-edit'>Edit</button>
					<button className='todo-delete'>Delete</button>
				</div>
			</li>
		);
	}
}

export default Item2;
