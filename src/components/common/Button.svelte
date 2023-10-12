<script lang="ts">
	export let add: boolean = false;
	export let del: boolean = false;

	function getClasses(): string {
		const tmp: string[] = [];
		if (add) tmp.push('Add');
		if (del) tmp.push('Del');
		return tmp.join(' ');
	}

	$: classes = getClasses();
</script>

<button class={`btn${classes}`} on:click>
	<slot />
</button>

<style>
	.btnAdd {
		border: none;
		border-radius: var(--border-btn);
		background-color: var(--color-btn);
		font-size: 18px;
		padding: 20px 30px;
		cursor: pointer;
	}

	.btnAdd:hover {
		background-color: var(--color-btn-hover);
	}

	.btnDel {
		width: 29px;
		height: 32px;
		border: none;
		background: none;
		cursor: pointer;
		background-image: url('/garbage.svg');
	}
</style>
