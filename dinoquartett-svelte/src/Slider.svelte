<script>
	import Card from "./Card.svelte";
	import dinosaurs from "./dinosaurs_data.js";

	// Standardstatistik und Wert
	let wantedStats = "number_eggs";
	let value = 0;

	// Verfügbare Statistiken aus dem Datensatz extrahieren
	let availableStats = Object.keys(dinosaurs[0]);

	// Höchster Wert für die ausgewählte Statistik
	let maxwantedStats = Math.max(
		...dinosaurs.map((dinosaur) => dinosaur[wantedStats])
	);

	// Gefilterte Dinosaurier basierend auf der gewählten Statistik und dem Wert
	let filteredDinosaurs = dinosaurs;

	// Funktion zum Aktualisieren der gefilterten Dinosaurier
	function handleChange() {
		filteredDinosaurs = dinosaurs.filter((dinosaur) => {
			return dinosaur[wantedStats] > value;
		});
	}

	// Funktion zum Ändern der ausgewählten Statistik
	function changeStat(event) {
		wantedStats = event.target.value; // Ändern der gewählten Statistik
		maxwantedStats = Math.max(
			...dinosaurs.map((dinosaur) => dinosaur[wantedStats])
		); // Neu berechnen des maximalen Wertes für die ausgewählte Statistik
		handleChange(); // Aktualisieren der gefilterten Dinosaurier basierend auf der neuen Statistik
	}
</script>

<div class="viewSlider">
	<div class="slidecontainer">
		<!-- Slider für den Wert der ausgewählten Statistik -->
		<input
			type="range"
			min="1"
			max={maxwantedStats}
			bind:value
			class="slider"
			id="myRange"
			on:change={handleChange}
		/>
		<label for="statSelect">Wähle eine Statistik:</label>
		<!-- Dropdown-Menü für die Auswahl der Statistik -->
		<select id="statSelect" bind:value={wantedStats} on:change={changeStat}>
			{#each availableStats as stat}
				<option value={stat}>{stat}</option>
			{/each}
		</select>

		<!-- Anzeige der ausgewählten Statistik und des Werts -->
		<p>{wantedStats} min: <span id="demo">{value}</span></p>
		<!-- Anzeige der Anzahl der gefilterten Dinosaurier -->
		<p>Gefunden: {filteredDinosaurs.length}</p>
	</div>

	<div id="gameField">
		<!-- Anzeige der gefilterten Dinosaurier als Karten -->
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
