<script>
	import { lazyLoad } from '../util/lazyload.js'
	export let imgSrc = ''
	export let altText = ''

	const imagePath = `${imgSrc}`

	// import webp from 'example.jpg?w=500;900;1200&format=webp&as=srcset'

	// let webp = await import(imagePath);
</script>

<img use:lazyLoad={imagePath} alt={altText} />

<style>
	img {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
</style>
