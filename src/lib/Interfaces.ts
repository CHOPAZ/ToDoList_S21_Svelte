export interface ITaskItem {
	id: number;
	text: string;
	is_done: boolean;
}

export type IsDone = 'active' | 'done';

export interface IFormBrn {
	del: string;
	add: string;
}
