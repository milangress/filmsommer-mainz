<script>
export let imgSrc = ''
export let altText = ''

const imagePath = `src/assets${imgSrc}?w=70`

// import webp from 'example.jpg?w=500;900;1200&format=webp&as=srcset'

// let webp = await import(imagePath);


</script>


<img
  src={imagePath}
  alt="{altText}"
  loading="lazy"
/>

<style>
     img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
</style>
