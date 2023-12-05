<script>
	import Card from "./Card.svelte";
	import dinosaurs from "./dinosaurs_data.js";

	let wantedStats = "number_eggs";
	let value = 0;

	//maximaler Wert der Stats height
	const maxwantedStats = Math.max(
		...dinosaurs.map((dinosaur) => dinosaur[wantedStats])
	);

	let filteredDinosaurs = dinosaurs;

	//Funktion zum erneuten filtern => Updaten
	function handleChange() {
		filteredDinosaurs = dinosaurs.filter((dinosaur) => {
			return dinosaur[wantedStats] > value;
		});
	}
</script>

<div class="viewSlider">
	<div class="slidecontainer">
		<input
			type="range"
			min="1"
			max={maxwantedStats}
			bind:value
			class="slider"
			id="myRange"
			on:change={handleChange}
		/>
		<p>{wantedStats} min: <span id="demo">{value}</span></p>
		<p>Gefunden: {filteredDinosaurs.length}</p>
	</div>

	<div id="gameField">
		{#if !filteredDinosaurs.length}
			<p>Keine Dinos gefunden</p>
		{:else}
			{#each filteredDinosaurs as dinosaur}
				<Card dino={dinosaur} />
			{/each}
		{/if}
	</div>
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
	/* Slider */
	.slidecontainer {
		width: 70%; /* Width of the outside container */
	}

	/* The slider itself */
	.slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 25px;
		outline: none;
		border-radius: 5px;
		border: 2px solid #000000;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	/* Mouse-over effects */
	.slider:hover {
		opacity: 1;
		background: #d3d3d3;
	}

	/* The slider handle */
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #04aa6d;
		cursor: pointer;
		border-radius: 5px;
	}
</style>
