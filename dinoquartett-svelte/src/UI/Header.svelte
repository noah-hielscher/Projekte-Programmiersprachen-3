<script>
	import Buttons from "./Buttons.svelte";
	export let routes;
</script>

<header>
	<img class="logo" src="./img/Logo.png" alt="Logo von Qartett" />
	<menu>
		<Buttons buttonText="Startseite" href="#/" />
		<Buttons buttonText="Slider" href="#/slider" />
		<Buttons buttonText="Game" href="#/game" />
		<Buttons buttonText="Wiki" href="#/wiki" />
	</menu>
	<div class="space"></div>
	<div class="space"></div>
	<div class="mode">
		<div class="switcher"></div>
	</div>
</header>

<style>
	/* Header */
	header {
		display: grid;
		margin-left: 30px;
		margin-right: 30px;
		grid-template-columns: repeat(6, 1fr);
		grid-template-areas: "logop menu menu space space mode";
		position: relative;
		animation: slideDown 1.5s ease-in-out forwards;
		transform: translateY(-100%);
	}
	@keyframes slideDown {
		to {
			transform: translateY(0);
		}
	}

	/* Logo */
	.logo {
		display: flex;
		padding: 0px;
		padding-left: 0px;
		justify-content: left;
		align-items: center;
		height: 100px;
		grid-area: logop;
		transition: transform 0.3s;
	}
	.logo:hover {
		transform: scale(1.2);
	}

	/* Menu */
	menu {
		display: flex;
		padding: 0px;
		gap: 20px;
		justify-content: left;
		align-items: center;
		grid-area: menu;
	}
	/* Space */
	.space {
		grid-area: space;
	}
	/* DisplayMode Dark - White */
	.mode {
		display: flex;
		justify-content: right;
		align-items: center;
		grid-area: mode;
	}
	.switcher {
		width: 112.048px;
		height: 46.035px;
		flex-shrink: 0;
		border-radius: 87px;
		background: var(--Wireframe-1, #47409c);
	}
</style>
