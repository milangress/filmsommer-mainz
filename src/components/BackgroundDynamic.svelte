<script>
	import { onMount } from 'svelte'

	let bars = [
		{ color: '#93D5F6', width: '314' },
		{ color: '#FFD500', width: '473' },
		{ color: '#37AD60', width: '103' },
		{ color: '#FFD500', width: '97' },
		{ color: '#93D5F6', width: '336' }
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
	<div class="bar-left" />
	<div class="wrapper--inner">
		{#each bars as bar}
			<div class="bar" style="background-color: {bar.color}; flex-grow: {bar.width}" />
		{/each}
	</div>
	<div class="bar-right" />
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
		flex-grow: 1;
		background-color: var(--fs-color-2);
	}

	.bar-right {
		height: 100%;
		flex-grow: 1;
		background-color: var(--fs-color-3);
	}
</style>
