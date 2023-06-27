<script>
	import BackgroundDynamic from '../components/BackgroundDynamic.svelte';
	import { VERCEL_ENV } from '$env/static/private';

	function noIndexOnVercel() {
		if (
			VERCEL_ENV === 'preview' || VERCEL_ENV === 'development'
		) {
			return 'noindex'
		} else {
			return  'index, follow'
		}
	}
</script>


<svelte:head>
	<meta name="robots" content="{noIndexOnVercel()}">
	{noIndexOnVercel()} {VERCEL_ENV}
</svelte:head>
<div>
	<BackgroundDynamic />
	<slot />
</div>
