<script lang="ts">
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined;
</script>


<!-- TODO переделать на dispatch -->
<input type="text" class="toDo__input" bind:value {placeholder} />

<style>
	.toDo__input {
		border: none;
		border-radius: var(--border-input);
		width: 100%;
		font-size: 18px;
		padding: 20px 15px;
	}
</style>
