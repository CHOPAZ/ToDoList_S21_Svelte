<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './common/Button.svelte';

	export let id: number;
	export let text: string;
	export let is_done: boolean;

	const dispatch = createEventDispatcher();

	function changeCheck() {
		dispatch('changeStatus', { id, is_done: !is_done });
	}

	function removeTask() {
		dispatch('removeTask', id);
	}
</script>

<div class="todo-taskItem" class:done={is_done}>
	<label class="todo-taskItem__label">
		<input
			type="checkbox"
			name="isDone"
			class="todo-taskItem__checkbox"
			checked={is_done}
			on:change={changeCheck}
		/>
		<span class="todo-taskItem__text">{text}</span>
	</label>
	<Button role="del" on:click={removeTask} />
</div>

<style lang="scss">
	.todo-taskItem {
		padding: 30px 20px;
		border-radius: var(--border-10);
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--color-bg-active);

		&__label {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: 17px;
			align-items: center;
		}

		&__checkbox {
			width: 25px;
			height: 25px;
		}

		&__text {
			text-align: center;
		}
	}

	/* Если задача выолненна */
	.done {
		background-color: var(--color-bg-done);
		text-decoration: line-through;
	}
</style>
