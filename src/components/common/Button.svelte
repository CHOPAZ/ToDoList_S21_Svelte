<script lang="ts">
	import type { IFormBrn } from '$lib/Interfaces';
	export let role: 'del' | 'add';

	const formBtn: IFormBrn = {
		del: 'Del',
		add: 'Add'
	};

	function getClass(): string {
		return `btn${formBtn[role]}`;
	}

	$: classes = getClass();
</script>

<button class={classes} on:click>
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
