<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
	import { apiModules } from '$lib/api';
	import { items, setTasksInStorage } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { ITaskItem } from '$lib/Interfaces';
	import Form from './Form.svelte';

	let items1 = loadData();

	/* Получение всех записей */

	async function loadData() {
		return await apiModules.getToDos()
		
	}

	/* Добавление новой задачи */
	async function createToDo(event: CustomEvent) {
		await apiModules.createToDo({
			text: event.detail.text,
			is_done: false
		});
		items1 = loadData();
	}

	/* Удаление задачи */
	async function deleteTask(item: ITaskItem): void {
		const id = items1.filter((el) => el.id !== item.id));
		setTasksInStorage($items);
	}

	/* Изменение статуса задачи */
	function changeStatusTask(item: ITaskItem): void {
		if (items) {
			items.update(() =>
				get(items).map((el) => ({
					...el,
					isDone: el.id == item.id ? !el.is_done : el.is_done
				}))
			);
			setTasksInStorage($items);
		}
	}
</script>

<section class="toDo__list">
	<Form on:addTask={createToDo} />
	{#await items1}
		<p>Loading ...</p>
	{:then value}
		{#each value as el}
			<div class="todo__wrapper">
				<Card isDone={el.is_done ? 'done' : 'active'}>
					<div class="toDo__list-content">
						<InputCheckBox on:change={() => changeStatusTask(el)} isDone={el.is_done} />
						<span>{el.text}</span>
					</div>
					<Button role="del" on:click={() => deleteTask(el)} />
				</Card>
			</div>
		{/each}
	{/await}
</section>

<style>
	.toDo__list {
		background-color: var(--color-bg);
		border-radius: var(--border-15);
		padding: 24px 20px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		overflow: auto;
		flex-grow: 1;
	}

	.toDo__list-content {
		display: flex;
		gap: 17px;
		align-items: center;
	}
</style>
