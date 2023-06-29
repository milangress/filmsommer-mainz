<script>
	import BackgroundDynamic from '../components/BackgroundDynamic.svelte';
	export let data
</script>


<svelte:head>
	<meta name="robots" content="{data.noIndexOnVercel}">
</svelte:head>
<div>
	{data.env} {data.VERCEL_ENV}
	<BackgroundDynamic />
	<slot />
</div>
