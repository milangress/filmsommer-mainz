<script>
	import { DateTime } from 'luxon'
	import LogoDynamic from '/src/components/Sections/LogoSectionDynamic.svelte'
	import BackToTopButton from '/src/components/UniqueButtons/BackToTopButton.svelte'
	import HeadlineDynamic from '/src/components/HeadlineDynamic.svelte'
	import TimetableBlock from '/src/components/Sections/TimetableSection.svelte'
	import PathText from '/src/components/PathText.svelte'
	import LogoBlock from '/src/components/Sections/LogoSection.svelte'

	import { dates } from '/src/data/2022.js'
	import { about } from '/src/data/2022.js'
	import Footer from '../../components/Landmarks/FooterSection.svelte'

	// onMount(async () => {
	//     const dataDates = await fetch(process.env.baseUrl + 'items/Dates').then((response) => response.json());
	//     dates = await dataDates.data;
	//
	//     const dataAbout = await fetch(process.env.baseUrl + 'items/about').then((response) => response.json());
	//     about = await dataAbout.data;
	// });

	function getImage(fileId) {
		const url = new URL(`https://milan.place/assets/${fileId}`)
		return url.href
	}

	function getTime(time) {
		return DateTime.fromISO(time).toFormat('HH:mm')
	}

	function getDate(date) {
		const weekday = DateTime.fromISO(date).weekdayShort
		const day = DateTime.fromISO(date).toFormat('dd.MM')
		return `${weekday}, ${day}`
	}
</script>

<div>
	<BackToTopButton />
	<LogoDynamic />
	<HeadlineDynamic>
		<h1>Es geht weiter und wir legen wieder los!</h1>
	</HeadlineDynamic>
	<TimetableBlock allDates={dates} />

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
							{#if event.pathtext}
								<PathText text={event.pathtext} />
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
	<Footer />
</div>

<style global>
	.date-image {
		width: var(--width-inner);
		/*max-height: 60vh;*/
		margin: 2rem auto 0 auto;
		transform: translateX(25%);
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
		margin: 2rem;
		/*background-color: var(--fs-color-2);*/
		/*box-shadow: 5px 5px 0px 0px black;*/
		background-color: var(--fs-color-2);
		color: var(--fs-color-1);
		/*box-shadow: 0 0 0.5rem 0.5rem var(--fs-color-2);*/
		position: relative;
		contain: layout;
	}
	.event-box-wrapper:after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: transparent;
		transform: translate(5px, 5px);
		border: 1px solid var(--fs-color-2);
	}
	.event-box-wrapper:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: transparent;
		transform: translate(10px, 10px);
		border: 1px solid var(--fs-color-2);
	}
	.events-text-wrapper {
	}
</style>
