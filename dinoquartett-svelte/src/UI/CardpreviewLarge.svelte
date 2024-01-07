<!-- UI/CardpreviewLarge.svelte -->
<div class="card-container">
	<h1 class="title">Trau dich, <br />spiele Qurtett<br />gegen mich!</h1>
	<h4 class="subtitle">Game</h4>
	<div class="rectangle"></div>
</div>

<style>
	@import "../typo.css";
	.card-container {
		width: 100%;
		height: 100%; /* Ändere die Höhe für die Darstellung */
		position: relative;
		background: #334b4d;
		border-radius: 20px;
		overflow: hidden;
	}

	.title {
		position: absolute;
		left: 20px; /* Ändere die Positionierung entsprechend */
		top: 20px; /* Ändere die Positionierung entsprechend */
		color: white;
		word-wrap: break-word;
		margin: 0; /* Setze den Margin auf 0, um Standardabstände zu entfernen */
	}

	.subtitle {
		position: absolute;
		left: 20px; /* Ändere die Positionierung entsprechend */
		top: 50px; /* Ändere die Positionierung entsprechend */
		color: #cbcbcb;
		word-wrap: break-word;
		margin: 0; /* Setze den Margin auf 0, um Standardabstände zu entfernen */
	}

	.rectangle {
		position: absolute;
		border: 1px white solid; /* Ändere die Darstellung des Rechtecks */
		width: 20px; /* Ändere die Größe des Rechtecks */
		height: 20px; /* Ändere die Größe des Rechtecks */
		left: 150px; /* Ändere die Positionierung entsprechend */
		top: 30px; /* Ändere die Positionierung entsprechend */
	}
</style>
