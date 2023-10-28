<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function changeCheck() {
		dispatch('change');
	}
</script>

<input type="checkbox" class="checkbox" on:change={changeCheck} />

<style>
	.checkbox {
		width: 25px;
		height: 25px;
	}
</style>
