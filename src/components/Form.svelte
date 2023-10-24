<script lang="ts">
	import { tasks } from '$lib/stores';
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

		tasks.update((values) => {
			return [...values, obj];
		});

		valueInput = '';
	}
</script>

<form class="toDo__form">
	<Input bind:value={valueInput} placeholder="Введите вашу задачу" />
	<Button role='add' on:click={addTask}>Добавить</Button>
</form>

<style>
	.toDo__form {
		display: flex;
	}
</style>
