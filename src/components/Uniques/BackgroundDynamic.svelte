<script>
	import { onMount } from 'svelte'

	let bars = [
		{ color: 'var(--fs-color-1)', width: '314' },
		{ color: 'var(--fs-color-3)', width: '473' },
		{ color: 'var(--fs-color-2)', width: '103' },
		{ color: 'var(--fs-color-3)', width: '97' },
		{ color: 'var(--fs-color-1)', width: '336' }
	]

	function setBar() {
		bars = bars.map((bar) => ({
			width: Math.random() * 10,
			color: bar.color
		}))
	}

	export const animate = false

	onMount(() => {
		if (animate) {
			setInterval(setBar, 5000)
		}
	})
</script>

<div class="background">
	<div class="bar-left-out out" />
	<div class="bar-left" />
	<div class="wrapper--inner">
		{#each bars as bar}
			<div class="bar" style="background-color: {bar.color}; flex-grow: {bar.width}" />
		{/each}
	</div>
	<div class="bar-right" />
	<div class="bar-right-out out" />
</div>

<style lang="scss">
	.background {
		inset: 0;
		z-index: -10;
		position: fixed;
		height: 100vh;
		display: flex;
	}

	.wrapper--inner {
		margin: 0 auto;
		width: var(--width-inner);
		display: flex;
		justify-content: center;
	}

	.bar {
		min-width: 10px;
		transition: all ease-in-out 0.5s;
	}

	.bar-left {
		height: 100%;
		flex-grow: 0.6;
		background-color: var(--fs-color-2);
	}
	.bar-left-out {
		height: 100%;
		flex-grow: 0.3;
		background-color: var(--fs-color-3);
	}

	.bar-right {
		height: 100%;
		flex-grow: 0.6;
		background-color: var(--fs-color-3);
	}
	.bar-right-out {
		height: 100%;
		flex-grow: 0.3;
		background-color: var(--fs-color-2);
	}
	@media (max-width: 1100px) {
		.out {
			display: none;
		}
		.bar-left {
			flex-grow: 1;
		}
		.bar-right {
			flex-grow: 1;
		}
	}
</style>
