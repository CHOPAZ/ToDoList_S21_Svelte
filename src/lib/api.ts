import axios from 'axios';
import type { ITaskItem } from './Interfaces';

const baseUrl = 'http://localhost:3000';

/* Получение всех записей */
async function getToDos() {
	return (await axios.get(`${baseUrl}/todo`)).data;
}

/* Создание новой записи */
async function createToDo(dto: ITaskItem) {
	return await axios.post(`${baseUrl}/todo`, dto);
}

/* Удаление записи */
async function deleteToDo(id: number) {
	return await axios.delete(`${baseUrl}/todo${id}`);
}

/* Обновление статуса зачади */
async function updateToDo(id: number) {
	return await axios.put(`${baseUrl}/todo`, id);
}

export const apiModules = {
	getToDos,
	createToDo,
	deleteToDo,
	updateToDo
};
