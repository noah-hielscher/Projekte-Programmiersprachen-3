<script>
	import { onMount } from "svelte";

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
	let propertySelected = false; // Flag, um zu überprüfen, ob eine Eigenschaft ausgewählt wurde

	//Flip Zustand Karte
	let canFlipCard = false; // Zustand, der überprüft, ob eine IconButton ausgewählt wurde

	function flipCard() {
		if (canFlipCard) {
			isFlipped = !isFlipped;
		}
	}

	//Auswahl der Eigenschaften
	function compareDinos(property) {
		if (!propertySelected) {
			const setting1 = randomDino1[property];
			const setting2 = randomDino2[property];
			if (setting1 > setting2) {
				score--;
				console.log("links");
			} else if (setting2 > setting1) {
				score++;
				console.log("rechts");
			} else {
				console.log("Gleichstand!");
			}
			currentComparison = property;
			propertySelected = true;

			// Deaktiviere andere Buttons
			buttons.forEach((button) => {
				if (button.dataset.property !== property) {
					button.disabled = true;
					button.style.opacity = "0.5";
				}
			});
			// Setze canFlipCard auf true
			canFlipCard = true;
		}
	}

	//neue Karten generieren
	function generateNewCards() {
		randomDino1 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
		randomDino2 = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
		isFlipped = true;
		propertySelected = false; // Setze die Auswahl zurück

		// Setze alle Buttons zurück
		buttons.forEach((button) => {
			button.disabled = false;
			button.style.opacity = "1";
		});
		// Setze canFlipCard auf false,
		canFlipCard = false;
	}

	// Funktion, die aufgerufen wird, wenn auf eine Karte geklickt wird
	function handleCardClick() {
		flipCard(); // Karten umdrehen, wenn auf eine Karte geklickt wird
	}

	// Array zur Speicherung der DOM-Elemente für die Buttons
	let buttons = [];
	//aufgerufen, nachdem die Komponente montiert wurde
	onMount(() => {
		// Selektiere alle Elemente mit der Klasse .iconButton und speichere sie im buttons-Array
		buttons = Array.from(document.querySelectorAll(".iconButton"));
	});
</script>

<div id="gameField">
	<Card dino={randomDino1} {isFlipped} on:click={handleCardClick} />
	<Card dino={randomDino2} on:click={handleCardClick} />
	<button on:click={generateNewCards}>weiter</button>

	<button
		class="iconButton"
		on:click={() => compareDinos("speed")}
		data-property="speed"
		bind:this={buttons[0]}
	>
		<img src="./public/img/speed.png" alt="Speed Icon" />
	</button>
	<button
		class="iconButton"
		on:click={() => compareDinos("height")}
		data-property="height"
		bind:this={buttons[1]}
	>
		<img src="./public/img/height.png" alt="height Icon" />
	</button>
	<button
		class="iconButton"
		on:click={() => compareDinos("years")}
		data-property="years"
		bind:this={buttons[2]}
	>
		<img src="./public/img/years.png" alt="years Icon" />
	</button>
	<button
		class="iconButton"
		on:click={() => compareDinos("iq")}
		data-property="iq"
		bind:this={buttons[3]}
	>
		<img src="./public/img/iq.png" alt="iq Icon" />
	</button>
	<button
		class="iconButton"
		on:click={() => compareDinos("number_eggs")}
		data-property="number_eggs"
		bind:this={buttons[4]}
	>
		<img src="./public/img/eggs.png" alt="number_eggs Icon" />
	</button><button
		class="iconButton"
		on:click={() => compareDinos("number_teeth")}
		data-property="number_teeth"
		bind:this={buttons[5]}
	>
		<img src="./public/img/teeth.png" alt="number_teeth Icon" />
	</button>

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
	.iconButton {
		background-color: transparent;
		border: none;
	}
</style>
