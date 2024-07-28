<script>
    export let event
    import {getTime} from '../../util/dateUtils'
</script>


<section class="event">
    {#if event.time && event.type}
        <b><time datetime="{event.time}">{getTime(event.time)}</time> • {event.type}</b>
        <p>{event.title}</p>
    {:else if event.type}
        <b>{event.type}</b>
        <p>{event.title}</p>
    {:else}
        <b>{event.title}</b>
    {/if}
</section>


<style>
    .event {
        min-height: 5em;
    }
</style>