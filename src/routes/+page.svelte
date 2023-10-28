<script lang="ts">
	import '../assets/global.css';
	import Form from '../components/Form.svelte';
	import ListCard from '../components/ListCard.svelte';
</script>

<div class="wrapper">
	<main class="toDo">
		<Form />
		<ListCard />
	</main>
</div>

<style>
	.wrapper {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	main {
		background-color: var(--color-bg);
		border-radius: var(--border-15);
		padding: 44px 60px;
		width: 636px;
		height: 80%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
</style>
