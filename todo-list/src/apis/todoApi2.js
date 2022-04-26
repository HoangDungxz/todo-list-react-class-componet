import axios from 'axios';

class todoApi {
	baseUrl = 'http://localhost:3004/';
	async GET() {
		const response = await axios.get(`${this.baseUrl}todos`);
		return response.data;
	}
	async SAVE(todo) {
		if (todo.id !== undefined) {
			const response = await axios.put(
				`${this.baseUrl}todos/` + todo.id,
				todo
			);
		} else {
			const response = await axios.post(`${this.baseUrl}todos`, todo);
		}
	}
	async DELETE(id) {
		const response = await axios.delete(`${this.baseUrl}todos/` + id);
	}
}

export default new todoApi();
