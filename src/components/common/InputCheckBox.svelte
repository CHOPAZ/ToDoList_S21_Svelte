<div class="toDo__list-inputStatus">
	<input type="checkbox" class="checkbox" />
	<slot />
</div>

<style>
	.toDo__list-inputStatus {
		display: flex;
		gap: 17px;
		align-items: center;
	}

	.checkbox {
		width: 25px;
		height: 25px;
	}
</style>
