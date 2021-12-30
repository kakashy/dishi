<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: 70vh;
	}
	@media screen and (min-width: 550px) {
		main {
			padding: 5px 10%;
		}
	}
</style>
