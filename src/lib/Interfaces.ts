export interface ITaskItem {
  id: number,
  textTask: string
  isDone: boolean,
}

export type IsDone = 'active' | 'done';

export interface IObj {
  del: string,
  add: string
}
