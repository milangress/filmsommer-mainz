<script>
    import BackgroundDynamic from "../components/BackgroundDynamic.svelte"
    export const prerender = true
</script>

<div>
    <BackgroundDynamic></BackgroundDynamic>
    <slot></slot>
</div>


