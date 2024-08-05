<script>
	import { onMount } from 'svelte'

	let topRow = []
	let bottomRow = []
	let leftRow = []
	let amountOfElems = {
		top: 0,
		bottom: 0,
		left: 0
	}

	let headlineRef
	export let className = ''
	export let id = 'UNSET-' + Math.random()

	onMount(() => {
		reloadAllRows()
	})

	function reloadAllRows() {
		const { width, height } = headlineRef.getBoundingClientRect()
		amountOfElems = {
			top: Math.ceil(width / 100),
			bottom: Math.ceil(width / 100),
			left: Math.ceil(height / 100)
		}
		setTopRow()
		setBottomRow()
		setLeftRow()
	}

	function setTopRow() {
		topRow = Array.from({ length: amountOfElems.top }, () => Math.random() - 0.5)
	}

	function setBottomRow() {
		bottomRow = Array.from({ length: amountOfElems.bottom }, () => Math.random() - 0.5)
	}

	function setLeftRow() {
		leftRow = Array.from({ length: amountOfElems.left }, () => Math.random() - 0.5)
	}
</script>

<svelte:window on:resize={reloadAllRows} />

<div class="headline-dynamic {className}" bind:this={headlineRef} {id}>
	<div class="top-row">
		{#each topRow as item}
			<div
				class="top-row--item"
				style="transform: translate({Math.random() * 50}%, {item * 50}%)"
			/>
		{/each}
	</div>
	<div class="top-row">
		{#each topRow as item}
			<div
				class="top-row--item"
				style="transform: translate({Math.random() * 50}%, {item * 50}%)"
			/>
		{/each}
	</div>
	<div class="left-row">
		{#each leftRow as item}
			<div
				class="left-row--item"
				style="transform: translate({item * 50}%, {Math.random() * 50}%)"
			/>
		{/each}
	</div>
	<div class="left-row">
		{#each leftRow as item}
			<div
				class="left-row--item"
				style="transform: translate({item * 50}%, {Math.random() * 50}%)"
			/>
		{/each}
	</div>
	<slot />
	<div class="bottom-row">
		{#each bottomRow as item}
			<div
				class="bottom-row--item"
				style="transform: translate({-Math.random() * 50}%, {item * 50}%)"
			/>
		{/each}
	</div>
	<div class="bottom-row">
		{#each bottomRow as item}
			<div
				class="bottom-row--item"
				style="transform: translate({-Math.random() * 50}%, {item * 50}%)"
			/>
		{/each}
	</div>
</div>

<style>
	.headline-dynamic {
		width: var(--width-outer);
		margin: 0 auto;
		background-color: var(--fs-color-1);
		margin-block: 6rem;
		line-height: 1.2;
		contain: layout;

		scroll-margin-top: 10vh;
	}

	.top-row,
	.bottom-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 0;
		overflow: visible;
		z-index: -10;
	}

	.top-row--item,
	.bottom-row--item {
		width: 200px;
		aspect-ratio: 16/9;
		background-color: var(--fs-color-1);
		z-index: -1;
		transition: transform ease-in-out 0.5s;
		scale: 1.3;
	}

	.left-row {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 0;
		height: 100%;
		overflow: visible;
		z-index: -10;
		position: absolute;
		left: 100px;
	}

	.left-row--item {
		height: 100px;
		aspect-ratio: 16/9;
		background-color: var(--fs-color-1);
		z-index: -1;
		transition: transform ease-in-out 0.5s;
	}
</style>
