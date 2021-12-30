<script>
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

<h3 class="ml13">
	<span class="text-wrapper">
		<span class="line line1" />
		<span class="letters">Mister Boombastic</span>
	</span>
</h3>

<style>
	.ml13 {
		font-size: 1.9em;
		text-transform: uppercase;
		letter-spacing: 0.5em;
		font-weight: 600;
	}

	.ml13 .letter {
		display: inline-block;
		line-height: 1em;
	}
</style>
