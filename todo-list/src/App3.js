import { Component, React } from 'react';
import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';

class App extends Component {
	state = {};

	render() {
		return (
			<div className='App'>
				<div className='title'>
					Todo <strong>list</strong>
				</div>
				<div className='todo-list'>
					<Form />

					<List />
				</div>
			</div>
		);
	}
}

export default App;
