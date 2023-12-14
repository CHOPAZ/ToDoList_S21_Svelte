<script lang="ts">
	import Button from './common/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	let valueInput: string = '';

	const dispatch = createEventDispatcher();

	function addTask() {
		if (valueInput.trim()) {
			dispatch('addTask', { text: valueInput });
		}
		valueInput = '';
	}
</script>

<form class="toDo__form" on:submit|preventDefault={addTask}>
	<input
		type="text"
		class="toDo__input"
		bind:value={valueInput}
		placeholder="Введите вашу задачу"
	/>
	<Button role="add">Добавить</Button>
</form>

<style>
	.toDo__form {
		display: flex;
	}

	.toDo__input {
		border: none;
		border-radius: var(--border-input);
		width: 100%;
		font-size: 18px;
		padding: 20px 15px;
	}
</style>
