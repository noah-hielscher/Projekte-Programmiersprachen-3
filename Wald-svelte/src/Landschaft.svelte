<script>
	import Bäume from "./Bäume.svelte";
	import Wasser from "./Wasser.svelte";

	//Größe der Wälder
	let landschaftWidth = Math.random() * 800;
	let landschaftHeight = Math.random() * 800;

	//Kollisionsvermeidung
	const minDistance = 30;

	// Bindings für die Breite und Höhe der .area
	let areaWidth = landschaftWidth + "px";
	let areaHeight = landschaftHeight + "px";

	// Erstelle ein Array mit 20 Bäumen, wobei jede Position zufällig generiert wird
	const treeInstances = Array.from({ length: 90 }, (_, i) => ({
		x: Math.random() * landschaftWidth,
		y: Math.random() * landschaftHeight,
	}));
	// Erstelle ein Array mit 2 Wasser, wobei jede Position zufällig generiert wird
	const waterInstances = Array.from({ length: 2 }, (_, i) => ({
		x: Math.random() * landschaftWidth,
		y: Math.random() * landschaftHeight,
	}));
	// const waterInstances = Array.from(Array(2).keys());
</script>

<div class="area" style="width: {areaWidth}; height: {areaHeight};">
	{#each treeInstances as position, i}
		<Bäume x={position.x} y={position.y} />
	{/each}
	{#each waterInstances as position, i}
		<Wasser x={position.x} y={position.y} />
	{/each}
</div>

<style>
	.area {
		background-color: rgb(79, 99, 85);
		width: 500px;
		height: 500px;
		border-radius: 5px;
		padding: 50px;
		margin: 50px;
		position: relative;
	}
</style>
