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

	//auswertung
	function compareSpeed() {
		const speed1 = randomDino1.speed;
		const speed2 = randomDino2.speed;

		if (speed1 > speed2) {
			score--; // Linkes Dino hat mehr
			console.log("links");
		} else if (speed2 > speed1) {
			score++; // Rechtes Dino hat mehr
			console.log("rechts");
		} else {
			console.log("Gleichstand!");
		}
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
	<button on:click={compareSpeed}>speed</button>
	<button on:click={generateNewCards}>weiter</button>
	<p>Punktestand: {score}</p>
</div>

<style>
	#gameField {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		grid-area: container;
	}
</style>
