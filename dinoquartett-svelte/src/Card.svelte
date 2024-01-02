<script>
	export let dino;
	export let isFlipped = false;

	//img Pfad
	$: imgPfad =
		"../public/Dino-img/" +
		dino.group_letter +
		dino.card_number +
		"_" +
		dino.name +
		".png";

	//Farben
	const colorVariants = [
		"#f39ebd",
		"#7fadbb",
		"#8fbf9e",
		"#e4df8e",
		"#b587bf",
		"#e18c54",
		"#77c2c2",
		"#e8c9a5",
	];

	//Objekt mit den Color Keys
	const alphabetColors = {
		A: colorVariants[0],
		B: colorVariants[1],
		C: colorVariants[2],
		D: colorVariants[3],
		E: colorVariants[4],
		F: colorVariants[5],
		G: colorVariants[6],
		H: colorVariants[7],
	};

	//Hintergrundfarbe des Buchstabens
	const bgLetterColor = alphabetColors[dino.group_letter];
</script>

<div class="quartet-card" on:click>
	{#if !isFlipped}
		<!-- Vorderseite -->
		<div class="front">
			<div class="wrapper">
				<h2 style="background-color: {bgLetterColor};">
					{dino.group_letter}
				</h2>
				<div class="description">
					<h3>{dino.name}</h3>
					<h5>{dino.group}</h5>
				</div>
				<img id="image" src={imgPfad} alt="Brachiosaurus" />
				<article id="wrapper2">
					<section class="card topLeftRounded" id="karte-1">
						<img
							class="icon"
							src="./img/years.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card" id="karte-2">
						<div class="cardText">
							<h5>years</h5>
							<h4>{dino.years}</h4>
						</div>
					</section>
					<section class="card" id="karte-3">
						<img
							class="icon"
							src="./img/speed.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card topRightRounded" id="karte-4">
						<div class="cardText">
							<h5>speed</h5>
							<h4>{dino.speed}</h4>
						</div>
					</section>
					<section class="card" id="karte-5">
						<img
							class="icon"
							src="./img/height.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card" id="karte-6">
						<div class="cardText">
							<h5>height</h5>
							<h4>{dino.height}</h4>
						</div>
					</section>
					<section class="card" id="karte-7">
						<img
							class="icon"
							src="./img/teeth.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card" id="karte-8">
						<div class="cardText">
							<h5>teeth</h5>
							<h4>{dino.number_teeth}</h4>
						</div>
					</section>
					<section class="card bottomLeftRounded" id="karte-9">
						<img
							class="icon"
							src="./img/iq.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card" id="karte-10">
						<div class="cardText">
							<h5>iq</h5>
							<h4>{dino.iq}</h4>
						</div>
					</section>
					<section class="card" id="karte-11">
						<img
							class="icon"
							src="./img/eggs.png"
							alt="BrachiosaurusStats-icons"
						/>
					</section>
					<section class="card bottomRightRounded" id="karte-12">
						<div class="cardText">
							<h5>eggs</h5>
							<h4>{dino.number_eggs}</h4>
						</div>
					</section>
				</article>
			</div>
		</div>
	{:else}
		<!-- Rückseite -->
		<div class="back"></div>
	{/if}
</div>

<style>
	/* Kartengestaltung */
	.quartet-card {
		margin: 50px auto;
		border-radius: 20px;
		animation: fadeIn 2s ease-in-out forwards;
		transition:
			transform 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
		transform-style: preserve-3d;
	}
	.quartet-card:hover {
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.692);
	}

	.front,
	.back {
		backface-visibility: hidden;
	}

	.front {
		transform-style: preserve-3d;
		animation: rotateFront 1s ease-in-out forwards;
	}

	.back {
		background-color: grey;
		border-radius: 20px;
		border: 3px solid black;
		width: 400px;
		height: 650px;
		transform-style: preserve-3d;
		animation: rotateBack 1s ease-in-out forwards;
	}

	/* Karten Animationen */

	@keyframes rotateFront {
		from {
			transform: rotateY(180deg);
		}
		to {
			transform: rotateY(0);
		}
	}

	@keyframes rotateBack {
		from {
			transform: rotateY(180deg);
		}
		to {
			transform: rotateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Karteninhalt */

	.wrapper {
		width: 400px;
		height: 650px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-template-areas:
			"h2 above above above"
			"img img img img"
			"article article article article"
			"article article article article"
			"article article article article";
		gap: 7px;
		background-color: aliceblue;
		border-radius: 20px;
		border: 3px solid black;
		opacity: 0;
		animation: fadeIn 2s ease-in-out forwards;
	}

	h2 {
		background-color: rgba(0, 81, 51, 1);
		color: rgb(255, 255, 255);
		grid-area: h2;
		border: 3px solid black;
		border-radius: 15px;
		font-size: 5em;
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
	}
	.description {
		grid-area: above;
		border: 3px solid black;
		border-radius: 15px;
		padding: 20px;
	}

	h3 {
		font-size: 1.45em;
	}
	h5 {
		font-size: 1em;
		font-weight: 500;
		text-transform: uppercase;
		line-height: 1;
	}

	h4 {
		font-size: 2em;
		color: rgba(0, 81, 51, 1);
		line-height: 1.4;
	}
	p {
		font-size: 13px;
	}
	#image {
		grid-area: img;
		width: 100%;
		height: 250px;
		object-fit: cover;
		border: 3px solid black;
		border-radius: 15px;
	}

	article {
		grid-area: article;
	}

	#wrapper2 {
		width: 100%;
		height: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-template-areas:
			"eins zwei drei vier"
			"fuenf sechs sieben acht"
			"neun zehn elf zwoelf";
		border: 2px solid black;
		border-radius: 15px;
	}
	.icon {
		max-width: 50px;
		transition: transform 0.3s ease-in-out;
	}

	.icon:hover {
		transform: rotate(180deg);
	}

	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
	}
	.cardText {
		padding-top: 8px;
		text-align: center;
	}

	#eins {
		grid-area: eins;

		border-radius: 13px 0 0 0;
	}
	#zwei {
		grid-area: zwei;
	}
	#drei {
		grid-area: drei;
	}
	#vier {
		grid-area: vier;
		border-radius: 0 13px 0 0;
	}
	#fuenf {
		grid-area: fuenf;
	}
	#sechs {
		grid-area: sechs;
	}
	#sieben {
		grid-area: sieben;
	}
	#acht {
		grid-area: acht;
	}
	#neun {
		grid-area: neun;
		border-radius: 0 0 0 13px;
	}
	#zehn {
		grid-area: zehn;
	}
	#elf {
		grid-area: elf;
	}
	#zwoelf {
		grid-area: zwoelf;
		border-radius: 0 0 13px 0;
	}

	.topLeftRounded {
		border-top-left-radius: 10px;
	}

	.topRightRounded {
		border-top-right-radius: 10px;
	}

	.bottomLeftRounded {
		border-bottom-left-radius: 10px;
	}

	.bottomRightRounded {
		border-bottom-right-radius: 10px;
	}
</style>
