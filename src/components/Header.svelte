<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	onMount(async () => {});
	function openMenu() {
		let el = document.getElementById('nav-menu');
		el.style.display = 'flex';
	}
	function closeMenu(e) {
		e.target.parentNode.style.display = 'none';
	}
</script>

<header>
	<a href="/">
		<h1>DISHI</h1>
	</a>
	<button on:click={openMenu}>&rarr;</button>
	<nav id="nav-menu" transition:fly={{ y: -100, duration: 700 }}>
		<button class="closebtn" on:click={(e) => closeMenu(e)}>&uarr;</button>
		<a class:active={$page.url.pathname === '/'} href="/">Home</a>
		<a class:active={$page.url.pathname === '/menu'} href="/menu">Menu</a>
		<a class:active={$page.url.pathname === '/menu'} href="/menu">About Us</a>
	</nav>
</header>

<style>
	header {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	button {
		background-color: var(--accent1);
		color: white;
	}
	button:hover {
		background-color: var(--accent2);
	}
	header a:hover {
		background-color: transparent;
	}
	a:hover h1 {
		color: var(--accent2);
	}
	h1 {
		color: var(--accent1);
		text-shadow: var(--shadow);
		font-size: 3rem;
		margin: 0;
	}
	nav {
		position: absolute;
		right: 20px;
		top: 80px;
		min-width: 200px;
		padding: 10px;
		border-radius: 4px;
		box-shadow: var(--shadow);
		background-color: #916642aa;
		backdrop-filter: blur(4px);
		display: none;
		flex-direction: column;
		z-index: 99;
	}
	nav a {
		color: black;
		margin: 5px 0;
	}
	a.active {
		color: white;
	}
	nav a:hover {
		background-color: transparent;
		color: white;
	}
	@media screen and (max-width: 550px) {
		nav {
			width: 80%;
		}
	}
</style>
