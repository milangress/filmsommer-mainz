<script>

	import {getTime, getDate, goToDate, isDateToday, isDatePast} from '../../util/dateUtils'

	export let allDates = []
</script>

<nav class="timetable" id="timetable" aria-label="Timetable Navigation (gleiche Seite aber scrollt zu Tag & Event)">
	<h2 class="visually-hidden">Timetable</h2>
	<div class="day flat bg-star">
		<h3>Eröffnungs-<br>abend</h3>
	</div>
	{#each allDates as date}
		<a
			class="day {isDateToday(date.date) ? 'isToday' : ''} {isDatePast(date.date) ? 'isPast' : ''}"
			tabindex="0"
			on:click={(event) => goToDate(event, date.date)}
			on:keydown={(event) => goToDate(event, date.date)}
			href="#date-{date.date}"
		>
			<h3><time datetime="{date.date}">{getDate(date.date)}</time></h3>
			{#each date.events as event}
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
			{/each}
		</a>
	{/each}
</nav>

<style>
	.timetable {
		padding: 0.5rem;
		width: var(--width-outer);
		margin: 0 auto;
		background-color: var(--fs-color-1);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-rows: auto;
		grid-gap: 1rem;
		line-height: 1.25;

		scroll-margin-top: 15vh;
	}
	@media (max-width: 700px) {
		.timetable {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media (max-width: 500px) {
		.timetable {
			grid-template-columns: 1fr 1fr;
		}
	}

	.timetable a {
		text-decoration: none;
		display: block;
	}
	h3 {
		padding-block-end: 1rem;
		/*font-family: 'Obviously', sans-serif;*/
	}

	.day {
		background-color: var(--fs-color-1);
		padding: 0.5rem;
		transition: transform 0.15s ease-in-out;
		position: relative;
		/*border: 5px solid transparent;*/
	}
	.day:not(.flat) {
      cursor: pointer;
  }
	.bg-star {
      background: url("/FS24-stern.svg") no-repeat center center;
  }
	/*.day:after,*/
	/*.day:before {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	z-index: -1;*/
	/*	background-color: transparent;*/
	/*	border: 1px solid var(--fs-color-2);*/
	/*	transition: transform 0.15s ease-in-out;*/
	/*}*/
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
	/*.day:hover:after {*/
	/*	transform: translate(5px, 5px);*/
	/*}*/
	/*.day:hover:before {*/
	/*	transform: translate(10px, 10px);*/
	/*}*/
	.event {
		min-height: 5em;
	}
	.visually-hidden {
		position: absolute;
		left:     -10000px;
		top:      auto;
		width:    1px;
		height:   1px;
		overflow: hidden;
	}
</style>
