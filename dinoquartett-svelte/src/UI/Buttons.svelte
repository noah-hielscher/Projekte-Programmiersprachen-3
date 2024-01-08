<!-- Verwendung:  -->
<!-- import Buttons from "./Buttons.svelte"; -->
<!-- <Buttons buttonText="Game" href="#/game" /> -->

<script>
	export let buttonText = "Default Text";
	export let href = "#"; // Prop für den Link
</script>

<div class="Creator">
	<button class="link-button">
		<a class="creator-text" {href}>{buttonText}</a>
	</button>
</div>

<style>
	@import "../typo.css";
	.Creator {
		display: flex;
		align-items: center;
	}

	.creator-text {
		/* color: #000; */
		/* font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 300;
		line-height: normal; */
		/* color: black; */
	}

	.link-button {
		display: inline-flex;
		align-items: center;
		padding: 8px 12px; /* Anpassen der Polsterung für den Button */
		border: none; /* Entfernen der Rahmen */
		background-color: transparent; /* Transparenter Hintergrund */
		color: #3498db; /* Blaue Textfarbe */
		cursor: pointer;
		transition: color 0.3s ease; /* Übergang für die Textfarbe */
		position: relative;
	}

	.link-button::before {
		content: "";
		position: absolute;
		bottom: +5px; /* Verschiebung der Linie nach oben, näher am Text */
		left: 0;
		right: 0;
		height: 2px; /* Dicke der Linie */
		background-color: #3498db; /* Blaue Farbe */
		transform: scaleX(0); /* Beginnt unsichtbar */
		transition: transform 0.3s ease; /* Übergang beim Hover */
		transform-origin: left; /* Beginnt von rechts */
	}

	.link-button:hover::before {
		transform-origin: left; /* Beginnt von links */
		transform: scaleX(1); /* Erstreckt sich zur vollen Länge */
	}

	a {
		text-decoration: none;
	}
</style>
