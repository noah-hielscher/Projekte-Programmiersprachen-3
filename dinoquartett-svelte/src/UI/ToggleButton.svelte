<!-- DogButton.svelte -->
<script>
	let isChecked = false;
	let viewMode = "hell";

	function toggleCheck() {
		if (viewMode === "hell") {
			document.documentElement.style.setProperty("--text-color", "#fff");
			document.documentElement.style.setProperty(
				"--background-color",
				"#555"
			);
			viewMode = "dunkel";
		} else {
			document.documentElement.style.setProperty("--text-color", "#555");
			document.documentElement.style.setProperty(
				"--background-color",
				"#fff"
			);
			viewMode = "hell";
		}
		console.log(viewMode);
	}
</script>

<label class="switcher" on:click={toggleCheck}>
	<!-- <input type="checkbox" bind:checked={isChecked} /> -->
	<span class="slider"></span>
</label>

<style>
	.switcher {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
		background-color: black;
		border-radius: 20px;
	}

	.switcher input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 5px;
		left: 5px;
		width: 24px;
		height: 24px;
		background-color: wheat;
		border-radius: 50%;
		transition: 0.4s;
	}

	input:checked + .slider {
		transform: translateX(26px);
	}

	.slider:focus {
		box-shadow: 0 0 1px #000;
	}
</style>
