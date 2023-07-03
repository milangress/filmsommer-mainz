<script>
	import { DateTime } from 'luxon';
	import LogoDynamic from '/src/components/LogoDynamic.svelte';
	import BackToTopButton from '/src/components/BackToTopButton.svelte';
	import HeadlineDynamic from '/src/components/HeadlineDynamic.svelte';
	import TimetableBlock from '/src/components/TimetableBlock.svelte';
	import PathText from '/src/components/PathText.svelte';
	import LogoBlock from '/src/components/LogoBlock.svelte';

	import { dates } from '/src/data/2022.js';
	import { about } from '/src/data/2022.js';
	import Footer from "/src/components/Footer.svelte";
	import EssenTRickenModal from "../components/EssenTRickenModal.svelte";

	// onMount(async () => {
	//     const dataDates = await fetch(process.env.baseUrl + 'items/Dates').then((response) => response.json());
	//     dates = await dataDates.data;
	//
	//     const dataAbout = await fetch(process.env.baseUrl + 'items/about').then((response) => response.json());
	//     about = await dataAbout.data;
	// });

	function getImage(fileId) {
		const url = new URL(`https://milan.place/assets/${fileId}`);
		return url.href;
	}

	function getTime(time) {
		return DateTime.fromISO(time).toFormat('HH:mm');
	}

	function getDate(date) {
		const weekday = DateTime.fromISO(date).weekdayShort;
		const day = DateTime.fromISO(date).toFormat('dd.MM');
		return `${weekday}, ${day}`;
	}
</script>

<div>
	<BackToTopButton />
	<LogoDynamic />
	<HeadlineDynamic>
		<h1>Es geht weiter und wir legen wieder los!</h1>
	</HeadlineDynamic>
	<TimetableBlock allDates={dates} />

	<EssenTRickenModal></EssenTRickenModal>


	<div class="content inner">{@html about.text}</div>

	{#each dates as date}
		<div>
			<figure class="date-image">
				<img
					src={getImage(date.image)}
					alt="An Image from the {date.events[1].title} event"
					loading="lazy"
				/>
				<figcaption>{date.events[1].title}</figcaption>
			</figure>

			<HeadlineDynamic className="headline" id={'date-' + date.date}>
				<h1>
					<span class="date">{getDate(date.date)}</span>
					<br />
					<span class="name">{date.name}</span>
				</h1>
			</HeadlineDynamic>

			<div class="content inner">
				<div class="event-box-wrapper">
					{#each date.events as event}
						<div class="event-short">
							<strong>{getTime(event.time)} {event.type}</strong>
							<p>{event.title}</p>
						</div>
					{/each}
				</div>

				<div class="events-text-wrapper">
					{#each date.events as event}
						<div class="event">
							{#if typeof event.pathText === 'string'}
								<PathText text="{event.pathText}" />
							{/if}
							<h3>{event.title_long ? event.title_long : event.title}</h3>
							<p>{@html event.content}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}

	<HeadlineDynamic>
		<h1>Unsere Partner</h1>
	</HeadlineDynamic>
	<div class="content inner">
		<LogoBlock />
	</div>
	<Footer></Footer>
</div>

<style global>
	.date-image {
		width: var(--width-inner);
		/*max-height: 60vh;*/
		margin: 2rem auto 0 auto;
		transform: translateX(25%);
	}
	.date-image img {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
		background: lightgrey;
	}
	.date-image figcaption {
		font-weight: bold;
	}
	@media (max-width: 1100px) {
		.date-image {
			transform: translateX(0%);
		}
	}
	.event-box-wrapper {
		/*border: 1px solid black;*/
		width: fit-content;
		padding: 2rem;
		margin: 2rem 0;
		/*background-color: var(--green);*/
		/*box-shadow: 5px 5px 0px 0px black;*/
		background-color: var(--green);
		color: black;
		/*box-shadow: 0 0 0.5rem 0.5rem var(--green);*/
		position: relative;
		contain: layout;
	}
	/*.event-box-wrapper:after {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	z-index: -1;*/
	/*	background-color: transparent;*/
	/*	transform: translate(5px, 5px);*/
	/*	border: 1px solid var(--green);*/
	/*}*/
	/*.event-box-wrapper:before {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	z-index: -1;*/
	/*	background-color: transparent;*/
	/*	transform: translate(10px, 10px);*/
	/*	border: 1px solid var(--green);*/
	/*}*/
	.events-text-wrapper {
	}
</style>
