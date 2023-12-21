<script lang="ts">
	import '../assets/global.css';
	import ToDoApp from '../components/ToDoApp.svelte';
</script>

<div class="wrapper">
	<main class="toDo">
		<ToDoApp />
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
		border-radius: var(--border-15);
		background-color: var(--color-bg-list);
		padding: 44px 60px;
		width: 636px;
		height: 80%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
</style>
