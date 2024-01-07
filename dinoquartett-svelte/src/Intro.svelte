<script>
	import Buttons from "./UI/Buttons.svelte";
</script>

<main class="content">
	<div class="headline">
		<div class="Heading1">Dinosaurier</div>
		<Buttons buttonText="Noah Hielscher" href="" />
	</div>
	<div class="boxes"></div>
</main>

<style>
	/*Content Layout*/
	.content {
		margin-left: 30px;
		margin-right: 30px;
	}
	/*Headline*/
	.headline {
		display: flex;
		align-items: center;
		width: 100%;
	}
	.Heading1 {
		width: 200px;
		color: #000;
		font-family: Inter;
		font-size: 91.048px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin-right: 350px; /* Abstand zwischen Heading1 und Creator */
	}
</style>
