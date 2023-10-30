import { writable } from 'svelte/store';
// import { get } from 'svelte/store';
import type { /* ICreateStore */ ITaskItem } from '$lib/Interfaces';

export const tasks: ITaskItem[] = [];

export const toDoWritebleStore = writable(tasks);

const TASK_KEY = 'TASK_LIST';
/* Загрузка задач из LocalStorage */
export function getTasksListFromStorage() {
	return JSON.parse(localStorage.getItem(TASK_KEY)) ?? [];
}

/* Запись в LocalStorage */
export function setTasksInStorage(elements: ITaskItem) {
	localStorage.setItem(TASK_KEY, JSON.stringify(elements));
}

//TODO Расширение методов стора

// export const toDoWritebleStore = createStore(tasks)

// function createStore<T>(obj: T): ICreateStore<T> {
//   /* создали стор */
//   const writableValue = writable(obj);

//   /* возврат методов для конкретного стора */
//   return {
//     subscribe: writableValue.subscribe,
//     addToStorage: (item) => {
//       const items = get(writableValue);
//       if(Array.isArray(items)) {
//         items.push(item);
//       }
//       writableValue.set(items);
//     },
//     update: writableValue.update,
//     set: writableValue.set
//   };
// }

// function createStore1<I, T extends Array<I> | Record<string, I>>(storage: T) {
//   const writableStore: ReturnType <typeof writable> & {
//     addStorage: (value: I) => void
//   } = writable(storage)
//   writableStore.addStorage = (value: I) => {
//     const storeObj = writableStore.get()
//     if(Array.isArray(storeObj)) {
//       storeObj.push(value);
//     }
//     writableStore.set(storeObj)
//   }
//   return writableStore
// }
