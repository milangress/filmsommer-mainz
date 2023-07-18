<script>
	let logos = []

	/*async function fetchLogos() {
		logos = Array.from(Array(23).keys()).map((i) => ({
			file: `sponsor_logo_${i}`
		}))
	}

	fetchLogos()*/
</script>

<!--<div class="logos">
	{#each logos as logo}
		<img src={`logos/${logo.file}.svg`} loading="lazy" alt="Sponsor Logo" class="sponsor" />
	{/each}
</div>-->
<div class="logoblock">
	<img src="logos.png" alt="logos">
</div>

<style>
	.logos {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-auto-rows: auto;
		grid-gap: 2rem;
		background-color: white;
		padding: 2rem;
	}

	@media (max-width: 1100px) {
		.logos {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}

	@media (max-width: 800px) {
		.logos {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
