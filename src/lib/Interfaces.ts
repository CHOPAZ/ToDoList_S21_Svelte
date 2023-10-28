import type { Writable } from "svelte/store";

export interface ITaskItem {
  id: number,
  textTask: string
  isDone: boolean,
}

export type IsDone = 'active' | 'done';

export interface IFormBrn {
  del: string,
  add: string
}


//TODO протипизировать правильно item
export interface ICreateStore<T> extends Writable<T> {
  addToStorage: (item: keyof T) => void 
}
