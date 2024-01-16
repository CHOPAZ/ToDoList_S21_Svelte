<script lang="ts">
	import { apiModules } from '$lib/api';
	import type { ITaskItem } from '$lib/Interfaces';
	import Form from './Form.svelte';
	import ToDoTask from './ToDoTask.svelte';

	let items: ITaskItem[];
	let isLoading = true;
	loadData();
	/* Получение всех записей */
	async function loadData() {
		apiModules.getToDos().then((val) => {
			items = val;
			isLoading = false;
		});
	}

	/* Добавление новой задачи */
	async function createToDo(event: CustomEvent<ITaskItem>) {
		await apiModules.createToDo({
			text: event.detail.text,
			is_done: false
		});
		// items = loadData();
	}

	/* Удаление задачи */
	async function removeTask(event: CustomEvent<number>) {
		await apiModules.deleteToDo(event.detail);
		// items = loadData();
	}

	/* Обновление статуса задачи */
	async function updateTask(event: CustomEvent<ITaskItem>) {
		const res = await apiModules.updateToDo({
			id: event.detail.id,
			is_done: event.detail.is_done
		});

		const idx = items.findIndex((i) => (i.id = res.id));
		items[idx] = res;
		items = items;
	}
</script>

<section class="toDo">
	<Form on:addTask={createToDo} />
	<div class="toDo__list">
		{#if isLoading}
			<p>Loading ...</p>
		{:else}
			{#each items as task (task.id)}
				<ToDoTask {...task} on:removeTask={removeTask} on:changeStatus={updateTask} />
			{/each}
		{/if}
		<!-- {#await items}
			<p>Loading ...</p>
		{:then value}
			{#each value as task (task.id)}
				<ToDoTask {...task} on:removeTask={removeTask} on:changeStatus={updateTask} />
			{/each}
		{/await} -->
	</div>
</section>

<style>
	.toDo {
		background-color: var(--color-bg);
		border-radius: var(--border-15);
		padding: 24px 20px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		overflow: auto;
		flex-grow: 1;
	}

	.toDo__list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 20px;
		border-radius: 15px;
		background-color: #ffffff;
		overflow: auto;
		flex-grow: 1;
	}
</style>
