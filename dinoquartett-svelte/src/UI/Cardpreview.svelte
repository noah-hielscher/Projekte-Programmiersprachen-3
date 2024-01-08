<script>
	export let titleClass = "title";
	export let subtitleClass = "subtitle";
	export let containerColor = "#334b4d";
	export let href = "#"; // Prop für den Link

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("click");
		if (href !== "#") {
			window.location.href = href;
		}
	}
</script>

<div
	class="card-container"
	style="background-color: {containerColor}"
	on:click={handleClick}
>
	<div class="content">
		<h4 class={subtitleClass}>{subtitleClass}</h4>
		<h2 class={titleClass}>{titleClass}</h2>
	</div>
	<img class="rectangle" src="../public/UI/arrow-up.svg" alt="Arrow-up" />
</div>

<style>
	@import "../typo.css";
	.card-container {
		position: relative;
		width: 100%;
		height: 100%;
		/* background: #334b4d; */
		border-radius: 20px;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 40px;
		color: white;
	}

	.content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.title {
		color: white;
		word-wrap: break-word;
		margin: 0;
	}

	.subtitle {
		color: #cbcbcb;
		word-wrap: break-word;
		margin: 0;
		margin-bottom: 10px;
	}

	.rectangle {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 40px;
		right: 40px;
	}
	.card-container:hover {
		transform: scale(1.01); /* Vergrößern beim Hover */
	}

	.card-container:hover .rectangle {
		top: 20px;
		right: 20px; /* Verschiebung des Pfeils beim Hover */
	}

	/* Übergang für die Vergrößerung und Bewegung */
	.card-container {
		transition: transform 0.3s ease;
	}

	.rectangle {
		transition:
			top 0.3s ease,
			right 0.3s ease; /* Übergang für die Pfeilposition */
	}
</style>
