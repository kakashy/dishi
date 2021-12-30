<script>
	// @ts-nocheck

	import { fly } from 'svelte/transition';
	import Divmg from '../components/Divmg.svelte';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	onMount(async () => {
		// Wrap every letter in a span
		const textWrapper = document.querySelector('.ml13 .letters');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/([^\x00-\x80]|\w)/g,
			"<span class='letter'>$&</span>"
		);

		anime
			.timeline({ loop: true })
			.add({
				targets: '.ml13 .letter',
				translateY: [100, 0],
				translateZ: 0,
				opacity: [0, 1],
				easing: 'easeOutExpo',
				duration: 1400,
				delay: function (el, i) {
					return 300 + 30 * i;
				}
			})
			.add({
				targets: '.ml13 .letter',
				translateY: [0, -100],
				opacity: [1, 0],
				easing: 'easeInExpo',
				duration: 1200,
				delay: function (el, i) {
					return 100 + 30 * i;
				}
			});
	});
</script>

<svelte:head>
	<title>DISHI</title>
</svelte:head>
<div class="karibu">
	<Divmg delay="0" --divm="url('/media/adalia.jpg')" />
	<h2 in:fly={{ x: -50, duration: 300 }}>
		We know why you're here, and we've got <em>just</em> what you need
	</h2>
	<Divmg delay="100" --divm="url('/media/adalia2.jpg')" />
	<p class="ml13">
		<span class="text-wrapper">
			<span class="line line1" />
			<span class="letters">Authentic Meals</span>
		</span>
	</p>
</div>
<div class="menuu">
	<div class="check-menuu">
		<p>We have a diverse selection suitable for all kinds of gatherings and periods.</p>
		<a href="/menu">
			<button> Take a look at our menu </button>
		</a>
	</div>
</div>

<style>
	em {
		color: var(--accent2);
	}
	.ml13 {
		font-size: 1.9em;
		letter-spacing: 0.2em;
		font-weight: 600;
		text-align: center;
	}
	.menuu {
		height: 500px;
		background-image: url('/media/dan.jpg');
		background-size: cover;
		padding: 10px;
		border-radius: 4px;
		box-shadow: var(--shadow);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		filter: saturate(1);
		transition: filter 0.3s ease;
	}
	.menuu:hover {
		filter: saturate(0);
	}
	.check-menuu {
		width: 70%;
		height: 45%;
		padding: 7px;
		background-color: #00000080;
		backdrop-filter: blur(2px);
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		text-align: center;
		border-radius: 3px;
	}
	.check-menuu button:hover {
		background-color: var(--accent1);
		color: white;
	}
</style>
