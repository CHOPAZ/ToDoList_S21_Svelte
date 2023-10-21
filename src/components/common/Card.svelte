<script lang="ts">
	export let statusActive: boolean = false;
	export let statusDone: boolean = false;

	function getClassesStatus(): string {
		const tmp: string[] = [];
		if (statusActive) tmp.push('toDo__list-card_active');
		if (statusDone) tmp.push('toDo__list-card_done');
		return tmp.join(' ');
	}

	$: classesStatus = getClassesStatus();
</script>

<div class={`toDo__list-card ${classesStatus}`}>
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

	/* .toDo__list-card_done {
		background-color: var(--color-bg-done);
		text-decoration: line-through;
	} */
</style>
