<script>
 import Card from "./Card.svelte";
 import dinosaurs from "./dinosaurs_data.js";
 console.log("umgedreht")
</script>


<div id="gameFeeld">
	{#each dinosaurs as dinosaur}
		<Card dino={dinosaur} />
	{/each}
</div>



<style>
	#gameFeeld {
  }
</style>