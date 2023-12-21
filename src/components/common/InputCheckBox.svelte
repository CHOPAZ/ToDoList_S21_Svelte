<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let isDone: boolean = false;

	const dispatch = createEventDispatcher();

	function changeCheck() {
		dispatch('change');
	}
</script>

<input type="checkbox" class="checkbox" on:change={changeCheck} checked={isDone} />

<style>
	.checkbox {
		width: 25px;
		height: 25px;
	}
</style>
