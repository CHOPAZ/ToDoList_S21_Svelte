<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import InputCheckBox from './common/InputCheckBox.svelte';
</script>

<section class="toDo__list">
	<Card>
		<InputCheckBox>asd</InputCheckBox>
		<Button del />
	</Card>
</section>

<style>
	.toDo__list {
		background-color: var(--color-bg-list);
		border-radius: var(--border-15);
		padding: 24px 20px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		height: 621px;
		overflow: auto;
	}
</style>
