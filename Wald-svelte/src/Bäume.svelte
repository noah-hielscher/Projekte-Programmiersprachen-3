<script>
	export let x = 0;
	export let y = 0;

	let baumgröße = Math.random() * 25;
</script>

<div
	class="baum"
	style="position: absolute; left: {x}px; top: {y}px; width: {baumgröße}px; height: {baumgröße}px;"
>
	<div
		class="blätter"
		style="width: {baumgröße - 18}px; height: {baumgröße - 18}px;"
	></div>
</div>

<style>
	.baum {
		background-color: rgb(91, 150, 111);
		/* width: 20px;
		height: 20px; */
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.blätter {
		background-color: rgb(127, 91, 62);
		width: 6px;
		height: 6px;
	}
</style>
