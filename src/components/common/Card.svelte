<script lang="ts">
	import type { IsDone } from '$lib/Interfaces';
	export let isDone: IsDone = 'active';
</script>

<div class={`toDo__list-card toDo__list-card_${isDone}`}>
	<slot />
</div>

<style>
	.toDo__list-card {
		padding: 30px 20px;
		border-radius: var(--border-10);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* Если задача не выолненна */
	.toDo__list-card_active {
		background-color: var(--color-bg-active);
	}

	/* Если задача выолненна */
	.toDo__list-card_done {
		background-color: var(--color-bg-done);
		text-decoration: line-through;
	}
</style>
