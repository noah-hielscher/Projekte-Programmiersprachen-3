<script>
	import Card from "./Card.svelte";
	import dinosaurs from "./dinosaurs_data.js";
</script>

<div id="gameField">
	<Card dino={dinosaurs[1]} />
	<Card dino={dinosaurs[0]} />
</div>

<style>
	#gameField {
		/* width: 100vw; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		grid-area: container;
	}
</style>
