<script>
	export let delay;
	import { scale } from 'svelte/transition';
</script>

<div in:scale={{ delay: delay, duration: 300 }} class="foodmg" />

<style>
	.foodmg {
		height: 200px;
		border-radius: 10px;
		box-shadow: var(--shadow);
		background-image: var(--divm);
		background-size: cover;
		background-position: center;
	}
</style>
