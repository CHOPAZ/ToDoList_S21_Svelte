<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
	import { tasks } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { ITaskItem } from '$lib/Interfaces';

	/* Удаление задачи из store writable */
	function deleteTask(item: ITaskItem) {
		const tasksValues = get(tasks);

		for (let el in tasksValues) {
			if (tasksValues[el].id == item.id) {
				tasksValues.splice(el, 1);
			}
		}

		tasks.update(() => {
			return tasksValues;
		});
	}
</script>

<section class="toDo__list">
	{#each $tasks as el}
		<Card statusActive>
			<InputCheckBox>
				{el.textTask}
			</InputCheckBox>
			<Button del on:click={deleteTask(el)} />
		</Card>
	{/each}
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
</style>
