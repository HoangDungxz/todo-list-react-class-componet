import { Component, React } from 'react';
import todoApi from './apis/todoApi';
import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';

class App extends Component {
	initTodo = { id: undefined, name: '', status: undefined };
	state = {
		todos: [this.initTodo],
		todo: this.initTodo,
	};
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSaveTodo = this.handleSaveTodo.bind(this);
		this.handlePrepareEdit = this.handlePrepareEdit.bind(this);
	}
	componentDidMount() {
		this.renderData();
	}

	handleSaveTodo(todo) {
		let oldTodo = this.state.todo;

		todoApi.SAVE({ ...todo, status: todo.status ?? 0 });

		todo = { ...this.initTodo };

		if (oldTodo.id === undefined) {
			todo = { ...this.initTodo };
		} else if (oldTodo.status != todo.status) {
			todo = { ...this.initTodo };
		}

		this.renderData(todo);
	}

	handlePrepareEdit(todo) {
		this.setState({
			...this.state,
			todo: todo,
		});
	}

	handleDelete(id) {
		todoApi.DELETE(id);
		this.renderData();
	}

	renderData(todo = this.initTodo) {
		const response = todoApi.GET();
		this.setState({
			...this.state,
			todos: response,
			todo: todo,
		});
	}

	render() {
		return (
			<div className='App'>
				<div className='title'>
					Todo <strong>list</strong>
				</div>
				<div className='todo-list'>
					<Form
						handleSaveTodo={this.handleSaveTodo}
						todo={this.state.todo}
						check={Math.random()}
					/>

					<List
						todos={this.state.todos}
						handleDelete={this.handleDelete}
						handlePrepareEdit={this.handlePrepareEdit}
						handleSaveTodo={this.handleSaveTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
