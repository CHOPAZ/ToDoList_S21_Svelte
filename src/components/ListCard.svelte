<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
	import { items, getTasksListFromStorage, setTasksInStorage } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { ITaskItem } from '$lib/Interfaces';
	import { onMount } from 'svelte';

	/* Удаление задачи из store writable */
	function deleteTask(item: ITaskItem): void {
		items.update(() => get(items).filter((el) => el.id !== item.id));
		setTasksInStorage($items);
	}

	/* Изменение статуса задачи */
	function changeStatusTask(item: ITaskItem): void {
		if (items) {
			items.update(() =>
				get(items).map((el) => ({
					...el,
					isDone: el.id == item.id ? !el.isDone : el.isDone
				}))
			);
			setTasksInStorage($items);
		}
	}

	/* Инициализация */
	onMount(() => {
		$items = getTasksListFromStorage();
	});
</script>

<section class="toDo__list">
	{#if $items.length}
		{#each $items as el}
			<Card isDone={el.isDone ? 'done' : 'active'}>
				<div class="toDo__list-content">
					<InputCheckBox on:change={() => changeStatusTask(el)} isDone={el.isDone} />
					<span>{el.textTask}</span>
				</div>
				<Button role="del" on:click={() => deleteTask(el)} />
			</Card>
		{/each}
	{:else}
		<div class="toDo__list-absence">Нет задач</div>
	{/if}
</section>

<style>
	.toDo__list {
		background-color: var(--color-bg-list);
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

	.toDo__list-absence {
		text-align: center;
	}
</style>
