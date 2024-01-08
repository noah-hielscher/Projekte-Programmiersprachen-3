<!-- Start.svelte -->
<script>
	import Cardpreview from "./UI/Cardpreview.svelte";
</script>

<div class="layout">
	<div class="big">
		<Cardpreview
			titleClass="Trau dich - 
				spiele Qurtett
				gegen mich!"
			subtitleClass="Game"
			href="#/game"
		/>
	</div>
	<div class="small">
		<div>
			<Cardpreview
				titleClass="custom-subtitle"
				subtitleClass="Filter Optionen"
				containerColor="#788675"
				href="#/slider"
			/>
		</div>
		<div>
			<Cardpreview
				titleClass="ustom-subtitle"
				subtitleClass="Wikipedia"
				containerColor="#788675"
				href="#/wiki"
			/>
		</div>
	</div>
</div>

<style>
	.layout {
		width: 100%;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 2fr 1fr;
		grid-template-areas: "big big small";
		gap: 20px;
	}

	.big {
		grid-area: big;
	}
	.small {
		display: grid;
		gap: 20px;
		grid-area: small;
	}
</style>
