<script lang="ts">
	import '../assets/global.css';
	import Form from '../components/Form.svelte';
	import ListCard from '../components/ListCard.svelte';
</script>

<main class="toDo">
	<div class="toDo__wrapper">
		<Form />
		<ListCard />
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.toDo__wrapper {
		background-color: var(--color-bg);
		border-radius: var(--border-15);
		padding: 44px 60px;
		min-width: 636px;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
</style>
