<script>
	import BackgroundDynamic from '../components/BackgroundDynamic.svelte';
	export let data
</script>


<svelte:head>
	<title>Filmsommer 2023 – 10. FILMSOMMER FESTIVAL MAINZ</title>
	<meta name="description" content="Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel.">
	<meta property="og:image" content="/FilmsommerLogo.png">
	<meta name="robots" content="{data.noIndexOnVercel}">
</svelte:head>
<div>
	<BackgroundDynamic />
	<slot />
</div>
