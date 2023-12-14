import { writable } from 'svelte/store';
import type { ITaskItem } from '$lib/Interfaces';

/* Инициализация пустого массива задач */
export const store: ITaskItem[] = [];
/* запись в writebleStore Svelte */
export const items = writable(store);

/* ключ localStorage */
const TASK_KEY = 'TASK_LIST';

/* Получение задач из LocalStorage */
export function getTasksListFromStorage() {
	let res: ITaskItem[];
	const items = localStorage.getItem(TASK_KEY);
	items ? (res = JSON.parse(items)) : (res = []);
	return res;
}

/* Запись в LocalStorage */
export function setTasksInStorage(elements: ITaskItem[]) {
	localStorage.setItem(TASK_KEY, JSON.stringify(elements));
}
