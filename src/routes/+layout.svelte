<script>
	import BackgroundDynamic from '../components/BackgroundDynamic.svelte';
	export let data
</script>


<svelte:head>
	<meta name="robots" content="{data.noIndexOnVercel}">
	{data.noIndexOnVercel}
</svelte:head>
<div>
	<BackgroundDynamic />
	<slot />
</div>
