import { writable } from "svelte/store";


export const tasks = writable([
  {
    id: Date.now(),
    textTask: 'Add new project in ToDo',
    isDone: false,
  }
]);


// function createStore() {
//   const { subscribe, update } = writable([]);
  
//   return {
//     subscribe,
//     addInStorage: () => update((values: any[], obj: any) => {
//       return [...values, obj]
//     })
//   };
// }

// export const tasks = createStore();


