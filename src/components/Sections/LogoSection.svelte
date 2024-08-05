<script>
	import { lazyLoad } from '../../util/lazyload.js'

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
	<img use:lazyLoad={'logos.png'} alt="logos" />
</div>

<style>
	img {
		aspect-ratio: 900/1258;
	}
</style>
