<script>
	import '../assets/css/fonts.css'
	import '../assets/css/reset.css'
	import '../assets/css/styles.css'
	import BackgroundBackBack from '../components/BackgroundBackBack.svelte'

	export let data
</script>

<svelte:head>
	<title>Filmsommer 2023 – 10. FILMSOMMER FESTIVAL MAINZ</title>
	<meta
		name="description"
		content="Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel."
	/>
	<meta property="og:image" content="https://www.filmsommer-mainz.de/og-filmsommer.png" />
	<meta property="og:image:alt" content="Logo des Filmsommer Mainz" />
	<meta property="og:title" content="10. FILMSOMMER FESTIVAL MAINZ – Filmsommer 2023" />
	<meta
		property="og:description"
		content="Wir feiern 10 Jahre Filmsommer vom 18.8. bis 26.8.2013. Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel."
	/>
	<meta property="og:url" content="https://www.filmsommer-mainz.de" />
	<meta property="og:type" content="website" />

	<meta name="robots" content={data.noIndexOnVercel} />
</svelte:head>
<div>
	<BackgroundBackBack>
		<slot />
	</BackgroundBackBack>
</div>
