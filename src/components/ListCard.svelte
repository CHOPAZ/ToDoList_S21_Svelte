<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
	import { toDoWritebleStore } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { ITaskItem } from '$lib/Interfaces';

	/* Удаление задачи из store writable */
	function deleteTask(item: ITaskItem): void {
		toDoWritebleStore.update(() => get(toDoWritebleStore).filter((el) => el.id !== item.id));
	}

	/* Изменение статуса задачи */
	function changeStatusTask(item: ITaskItem): void {
		if(toDoWritebleStore) {
			toDoWritebleStore.update(() => get(toDoWritebleStore).map((el) => ({
					...el,
					isDone: el.id == item.id ? !el.isDone : el.isDone
			})))
		}
	}
</script>

<section class="toDo__list">
	{#if $toDoWritebleStore.length}
		{#each $toDoWritebleStore as el}
		<Card isDone={el.isDone ? 'done' : 'active'}>
			<div class="toDo__list-content">
				<InputCheckBox on:change={() => changeStatusTask(el)} />
				<span>{el.textTask}</span>
			</div>
			<Button role='del' on:click={() => deleteTask(el)} />
		</Card>
		{/each}
		{:else} 
		<div class="toDo__list-noContent">Нет задач</div>
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
		height: 621px;
		overflow: auto;
	}

	.toDo__list-content {
		display: flex;
		gap: 17px;
		align-items: center;
	}

	.toDo__list-noContent {
		text-align: center;
	}
</style>
