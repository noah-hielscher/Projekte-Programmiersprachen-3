<script>
	import Header from "./UI/Header.svelte";
	import Start from "./Start.svelte";
	import Slider from "./Slider.svelte";
	import Game from "./Game.svelte";
	import Intro from "./Intro.svelte";
	import Wiki from "./Wiki.svelte";

	import Router from "svelte-spa-router";

	const routes = {
		"/": Start,
		"/slider": Slider,
		"/game": Game,
		"/wiki": Wiki,
	};
</script>

<header><Header {routes} /></header>
<div><Intro /></div>
<main>
	<div><Router {routes} /></div>
</main>

<style>
	@import "./typo.css";
	main {
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
