<script>
	import Start from "./Start.svelte";
	import Game from "./Game.svelte";

	let showStart = true; // Zeige zuerst Startseite an

function showStartPage() {
    showStart = true;
}

function showGamePage() {
    showStart = false;
}
</script>

<header>
			<logo
				><img id="logo" src="./img/Logo.png" alt="Logo von Qartett" />
			</logo>
			<nav>
				<h3 class="navi" on:click={showStartPage}>Startseite</h3>
				<h3 class="navi" on:click={showGamePage}>Umgedreht</h3>
			</nav>
		</header>
		<main>
			<div id="layout">
				<div id="text">
					<h1>Dinosaurier aus der Geschichte!</h1>
					<p>
						Tauchen Sie ein in die faszinierende Welt der
						<a
							href="https://de.wikipedia.org/wiki/Dinosaurier"
							target="_blank"
							>Dinosaurier!</a
						>
						Vor Millionen von Jahren bevölkerten diese
						majestätischen Kreaturen unseren Planeten. Vom
						imposanten Brachiosaurus bis zum furchterregenden
						Tyrannosaurus Rex - erleben Sie die spannende Geschichte
						dieser prähistorischen Giganten. Gemeinsam begeben wir
						uns auf eine musikalische Reise durch die Ära der
						Dinosaurier, erkundend, wie ihre einzigartigen
						Lebenswelten durch die Klänge eines Quartetts zum Leben
						erwachen.
					</p>
				</div>
				{#if showStart}
    				<Start />
				{:else}
    				<Game />
				{/if}	
				<!-- <div id="start">
					<Start />
				</div> -->
			</div>
		</main>
		<footer>
			<p>Diese Webseite wurde erstellt von</p>
			<img id="dino" src="./img/cursor-animat.gif" alt="Dino" />
			<p>imprint | GTC</p>
		</footer>

<style>
 
</style>
