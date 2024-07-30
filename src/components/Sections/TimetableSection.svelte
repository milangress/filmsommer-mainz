<script>

	import {getDate, goToDate, isDateToday, isDatePast} from '../../util/dateUtils'
	import TimetableEvent from './TimetableEvent.svelte'
	import Card from './TimetableDay.svelte'

	export let allDates = []
</script>

<nav class="timetable" id="timetable" aria-label="Timetable Navigation (gleiche Seite aber scrollt zu Tag & Event)">
	<h2 class="visually-hidden">Timetable</h2>
	<div class="day flat bg-star">
		<h3>Eröffnungs-<br>abend</h3>
	</div>
	{#each allDates as date}
		<Card {date} />
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

	/*.day:hover:after {*/
	/*	transform: translate(5px, 5px);*/
	/*}*/
	/*.day:hover:before {*/
	/*	transform: translate(10px, 10px);*/
	/*}*/

	.visually-hidden {
		position: absolute;
		left:     -10000px;
		top:      auto;
		width:    1px;
		height:   1px;
		overflow: hidden;
	}
</style>
