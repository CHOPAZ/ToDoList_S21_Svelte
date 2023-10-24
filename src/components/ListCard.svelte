<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
	import { tasks } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { ITaskItem } from '$lib/Interfaces';

	/* Удаление задачи из store writable */
	function deleteTask(item: ITaskItem): void {
		tasks.update(() => get(tasks).filter((el) => el.id !== item.id));
	}

	/* Изменение статуса задачи */
	let showModal = false;
	const toggleModal = () => showModal = !showModal;
</script>

<section class="toDo__list">
	{#each $tasks as el}
		<Card isDone={showModal ? 'done' : 'active'}>
			<div class="toDo__list-content">
				<InputCheckBox on:change={toggleModal} />
				<span>{el.textTask}</span>
			</div>
			<Button role='del' on:click={() => deleteTask(el)} />
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

	.toDo__list-content {
		display: flex;
		gap: 17px;
		align-items: center;
	}
</style>
