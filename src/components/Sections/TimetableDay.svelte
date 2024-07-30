<script>
	import { getDate, goToDate, isDatePast, isDateToday, getTime } from '../../util/dateUtils.js'
	import { onMount } from 'svelte'

	export let heading = '';
		export let link = '';

		export let date = {
			date: '',
			events: []
		}

	let cardElement;
	let down;

	function handleMouseDown() {
		down = Date.now();
	}

	function handleMouseUp() {
		const up = Date.now();
		if ((up - down) < 200) {
			const link = cardElement.querySelector('a');
			if (link) link.click();
		}
	}

	onMount(() => {
		cardElement.style.cursor = 'pointer';
	});

	$: shouldSpanTwoCells = date.events.length >= 4;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
	bind:this={cardElement}
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	class="
	card day 
	{isDateToday(date.date) ? 'isToday' : ''} 
	{isDatePast(date.date) ? 'isPast' : ''}
	{shouldSpanTwoCells ? 'span-two' : ''}"

>
	<h3>
		<a
		on:click={(event) => goToDate(event, date.date)}
		on:keydown={(event) => goToDate(event, date.date)}
		href="#date-{date.date}"
	>
			<time datetime="{date.date}">
				{getDate(date.date)}
			</time>
		</a>
	</h3>

	<section class="events">
		{#each date.events as event}
			<div class="event">
				{#if event.time && event.type}
					<b><time datetime="{event.time}">{getTime(event.time)}</time> • {event.type}</b>
					<p>{event.title}</p>
				{:else if event.type}
					<b>{event.type}</b>
					<p>{event.title}</p>
				{:else}
					<b>{event.title}</b>
				{/if}
			</div>
		{/each}
	</section>

	  {#if link && link !== ''}
		<h2>
			<a href="{link}">{heading}</a>
		</h2>
		{:else}
		<slot name="heading"></slot>
		{/if}
		<slot></slot>
</li>


<style>
	.card {
		list-style: none;
		position: relative;
		display: contents;
	}

    .day {
        background-color: var(--fs-color-1);
        padding: 0.5rem;
        transition: transform 0.15s ease-in-out;
        position: relative;
        /*border: 5px solid transparent;*/
		grid-column: span 1;
    	display: flex;
    	flex-direction: column;
    }
	.day.span-two {
		grid-column: span 2;
  	}

	  .span-two .events {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	.event {
        min-height: 5em;
    }

@media (max-width: 700px) {
  .span-two {
    grid-column: span 1;
  }
  
  .span-two .event {
    grid-template-columns: 1fr;
  }
}

    .day:not(.flat) {
        cursor: pointer;
    }
    .card a {
        text-decoration: none;
    }

    .card a:focus {
        outline: none;
        text-decoration: underline;
    }

    .card:focus-within, .card:hover {
        box-shadow: 0 0 0 0.25rem;
    }

    .card:focus-within a:focus {
        text-decoration: none;
    }
		a {
				text-decoration: none;
		}
		a:hover {
				color: inherit;
    }
    h3 {
        padding-block-end: 1rem;
        /*font-family: 'Obviously', sans-serif;*/
    }

    a::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .isToday {
        /*border-top: 2px solid black;*/
        background-color: var(--fs-color-2);
    }
    .isPast {
        opacity: 0.7;
    }
    .day:hover:not(.flat){
        background-color: var(--fs-color-2);
        /*color: var(--fs-color-1);*/
        z-index: 100;
        /*border: 5px solid var(--fs-color-1);*/
        transform: scale(1.1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
        color: unset;
        text-decoration: none;
        text-shadow: none;
    }


</style>
