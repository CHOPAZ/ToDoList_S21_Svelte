import { writable } from "svelte/store";
// import { get } from 'svelte/store';
import type { /* ICreateStore */ ITaskItem } from "$lib/Interfaces";


export const tasks: ITaskItem[] = []

export const toDoWritebleStore = writable(tasks)


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