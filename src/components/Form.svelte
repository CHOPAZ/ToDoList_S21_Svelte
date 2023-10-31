<script lang="ts">
	import { setTasksInStorage, toDoWritebleStore } from '$lib/stores';
	import { get } from 'svelte/store';
	import Button from './common/Button.svelte';
	import Input from './common/Input.svelte';

	let valueInput = '';

	/* Добавленеи задачи в sstore writable*/
	function addTask() {
		if (!valueInput) {
			return false;
		}

		const obj = {
			id: Date.now(),
			textTask: valueInput.trim(),
			isDone: false
		};

		const storeTasks = get(toDoWritebleStore);
		storeTasks.push(obj);
		toDoWritebleStore.update(() => storeTasks);

		// toDoWritebleStore.addToStorage(obj);

		setTasksInStorage($toDoWritebleStore);
		valueInput = '';
	}
</script>

<form class="toDo__form">
	<Input bind:value={valueInput} placeholder="Введите вашу задачу" />
	<Button role="add" on:click={addTask}>Добавить</Button>
</form>

<style>
	.toDo__form {
		display: flex;
	}
</style>
