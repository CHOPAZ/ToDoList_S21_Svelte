<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './common/Button.svelte';
	import Input from './common/Input.svelte';
</script>

<form class="toDo__form">
	<Input placeholder="Введите вашу задачу" />
	<Button add>Добавить</Button>
</form>

<style>
	.toDo__form {
		display: flex;
	}
</style>
