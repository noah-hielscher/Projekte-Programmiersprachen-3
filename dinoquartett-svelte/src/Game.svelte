<script>
	import Card from "./Card.svelte";
	import dinosaurs from "./dinosaurs_data.js";

	//random Dino
	let randomDino1 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
	let randomDino2 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
	//Punktestand
	let score = 0;
	//Karte drehen
	let isFlipped = true;
	//aktueller Vergleich
	let currentComparison = "";
	// console.log(currentComparison);

	//Auswahl der Eigenschaften
	function compareDinos(property) {
		const setting1 = randomDino1[property];
		const setting2 = randomDino2[property];
		if (setting1 > setting2) {
			score--; // Linkes Dino hat mehr
			console.log("links");
		} else if (setting2 > setting1) {
			score++; // Rechtes Dino hat mehr
			console.log("rechts");
		} else {
			console.log("Gleichstand!");
		}
		currentComparison = property;
	}

	//neue Karten generieren
	function generateNewCards() {
		randomDino1 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
		randomDino2 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
		isFlipped = true;
	}
</script>

<div id="gameField">
	<Card dino={randomDino1} {isFlipped} />
	<Card dino={randomDino2} />
	<button on:click={generateNewCards}>weiter</button>
	<button on:click={() => compareDinos("speed")}>speed</button>
	<button on:click={() => compareDinos("height")}>height</button>
	<button on:click={() => compareDinos("years")}>years</button>
	<button on:click={() => compareDinos("iq")}>iq</button>
	<button on:click={() => compareDinos("number_eggs")}>eggs</button>
	<button on:click={() => compareDinos("number_teeth")}>teeth</button>
	<p>Punktestand: {score}</p>
</div>

<!-- Buggs:
1. Umdrehen
2. nach einer Auswhal keine zweite -->

<style>
	#gameField {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		grid-area: container;
	}
</style>
