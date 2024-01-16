import axios from 'axios';
import type { ITaskItem } from './Interfaces';

const baseUrl = 'http://localhost:3001';

/* Получение всех записей */
async function getToDos(): Promise<ITaskItem[]> {
	return (await axios.get(`${baseUrl}/todo`)).data;
}

/* Создание новой записи */
async function createToDo(dto: Omit<ITaskItem, 'id'>) {
	return await axios.post(`${baseUrl}/todo`, dto);
}

/* Удаление записи */
async function deleteToDo(id: number) {
	return await axios.delete(`${baseUrl}/todo/${id}`);
}

/* Обновление статуса зачади */
async function updateToDo(dto: Omit<ITaskItem, 'text'>): Promise<ITaskItem> {
	return (await axios.put(`${baseUrl}/todo`, dto)).data;
}

export const apiModules = {
	getToDos,
	createToDo,
	deleteToDo,
	updateToDo
};
