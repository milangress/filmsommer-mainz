<script>
	import BackgroundDynamic from '../components/BackgroundDynamic.svelte';
	export let data
</script>


<svelte:head>
	<title>Filmsommer 2023 – 10. FILMSOMMER FESTIVAL MAINZ</title>
	<meta name="description" content="Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel.">
	<meta property="og:image" content="https://www.filmsommer-mainz.de/og-filmsommer.png">
	<meta property="og:title" content="10. FILMSOMMER FESTIVAL MAINZ – Filmsommer 2023">
	<meta property="og:description" content="Wir feiern 10 Jahre Filmsommer vom 18.8. bis 26.8.2013. Hier gibt es bald das komplette Programm zu sehen. Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel." />
	<meta name="robots" content="{data.noIndexOnVercel}">
</svelte:head>
<div>
	<BackgroundDynamic />
	<slot />
</div>
