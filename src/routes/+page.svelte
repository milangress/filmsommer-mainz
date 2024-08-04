<script xmlns="http://www.w3.org/1999/html">
	import { DateTime } from "luxon";
	import LogoDynamic from "/src/components/Sections/LogoSectionDynamic.svelte";
	import BackToTopButton from "/src/components/UniqueButtons/BackToTopButton.svelte";
	import HeadlineDynamic from "/src/components/HeadlineDynamic.svelte";
	import TimetableBlock from "/src/components/Sections/TimetableSection.svelte";
	import PathText from "/src/components/PathText.svelte";
	import LogoBlock from "/src/components/Sections/LogoSection.svelte";

	import { dates, about, year } from "/src/data/2024.js";
	import Footer from "/src/components/Landmarks/FooterSection.svelte";
	import EssenTrinkenModal from "../components/UniqueButtons/EssenTrinkenModal.svelte";
	import ImageComponent from "../components/ImageComponent.svelte";
	import BackgroundDynamic from '../components/Uniques/BackgroundDynamic.svelte'
	import SkipToContent from '../components/UniqueButtons/SkipToContent.svelte'

	// onMount(async () => {
	//     const dataDates = await fetch(process.env.baseUrl + 'items/Dates').then((response) => response.json());
	//     dates = await dataDates.data;
	//
	//     const dataAbout = await fetch(process.env.baseUrl + 'items/about').then((response) => response.json());
	//     about = await dataAbout.data;
	// });

	function getImage(fileId) {
		// const url = new URL(`/fotos2023/${fileId}`);
		return `/fotos${year}/${fileId}`;
	}

	function getTime(time) {
		return DateTime.fromISO(time).toFormat("HH:mm");
	}

	function getDate(date) {
		const weekday = DateTime.fromISO(date).weekdayShort;
		const day = DateTime.fromISO(date).toFormat("dd.MM");
		return `${weekday}, ${day}`;
	}
</script>

<div>
	<BackgroundDynamic></BackgroundDynamic>
	<header>
		<SkipToContent />
		<BackToTopButton />

		<LogoDynamic />
		<HeadlineDynamic>
			<h1>Es geht weiter und wir legen wieder los!</h1>
		</HeadlineDynamic>
	</header>

	<TimetableBlock allDates={dates} />

	<main id="main">

<!--<a href="#kunstaktion" class="timetable-extra">
		<div class="content inner bg-green">
		<h3>18.–26. 08.</h3>
		<p>
		<b>Kunstaktion Lisa Schorr</b><br>
		DAS BETT, Zu sehen im Gewölbe der Kulturei
		</p>
		</div>
</a>-->

		<EssenTrinkenModal />

		<div class="content inner">{@html about.text}</div>

	{#each dates as date}
		<section aria-labelledby="{'section-' + date.date}">

			<HeadlineDynamic className="headline" id={'date-' + date.date}>
				<h1 id={'section-' + date.date}>
					<time class="date" datetime="{date.date}">{getDate(date.date)}</time>
					<br />
					<span class="name">{date.name}</span>
				</h1>
			</HeadlineDynamic>

			<div class="content inner">
				<section class="event-box-wrapper" aria-label="Events for {getDate(date.date)}">
					{#each date.events as event}
						<div class="event-short">
							{#if event.time && event.type}
								<b><time datetime="{event.time}">{getTime(event.time)}</time> • {event.type}</b>
								<p>{event.title}</p>
							{:else if event.type}
								<b>{event.type}</b>
								<p>{event.title}</p>
							{:else}
								<p>{event.title}</p>
							{/if}
						</div>
					{/each}
				</section>

				<div class="events-text-wrapper">
					{#each date.events as event}
						<section class="event">
							{#if typeof event.pathText === 'string'}
								<PathText text={event.pathText} />
							{/if}
							<h2>{event.title_long ? event.title_long : event.title}</h2>
							<p>{@html event.content}</p>
						</section>
					{/each}
				</div>
			</div>

			{#if date.image}
				<figure class="date-image">
					<ImageComponent
						imgSrc={getImage(date.image)}
						altText="An Image from the {date.events[1]?.title} event"
					/>
					<figcaption>{date.imageText ? date.imageText : date.events[1]?.title}</figcaption>
				</figure>
			{/if}
		</section>
	{/each}

		<HeadlineDynamic id="kunstaktion">
			<h1>Kunstaktion „DAS BETT“ Künstlerin Lisa Schorr</h1>
		</HeadlineDynamic>

		<div class="content inner">
			<p>
			Ein Bett. Im leeren Raum. Hingebungsvoll, fein säuberlich gemacht.
			</p><p>
			Die Kissen sind aufgeschüttelt. Die Decken sind geschichtet, glatt gestrichen und gelegt. Farbige Flächen bilden immer neue einladende Kompositionen.
		</p><p>
			Der sich wiederholende Akt ein klärendes Ritual. Das Tun trennt die Nacht vom Tage und bereitet den Ort. Verändert ihn auf gleiche Weise, immer neu. Für alles, was da kommen mag.
		</p><p>
			So steht es da. Das Bett. Gemacht.
		</p><p>
			Ganz still dem alltäglichen Kontext entzogen. Aufgeschlagen lädt es so zum Betrachten, Erinnern und Projizieren ein.
			</p><p>
			<i>Text von Rebekka Schulte</i>
			</p>
			<p>
				<b>Über die Künstlerin • <a href="https://www.lisa-schorr.de">www.lisa-schorr.de</a></b>
			</p><p>
		Lisa Schorr, geb. 1983, ist eine in Mainz lebende und arbeitende Künstlerin und Kuratorin. In ihren Arbeiten befasst sie sich mit der Sichtbarmachung von Farbräumen und den damit verbundenen Empfindungen von Atmosphären, hierfür lotet sie die Grenzen von Malerei, allgegenwärtigen Gegenständen und Raum aus.
		</p><p>
			Neben der eigenen künstlerischen Praxis leitet und kuratiert sie seit 2020, in Zusammenarbeit mit dem Kameramann und Musiker Heiner Brink, die Galerie Haus zum Stein in Mainz.
			</p>
		</div>

	</main>

	<aside aria-labelledby="unsere-partner">
		<HeadlineDynamic id="unsere-partner">
			<h1>Unsere Partner*innen</h1>
		</HeadlineDynamic>
		<div class="content inner">
			<LogoBlock />
		</div>
	</aside>

	<Footer />
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
		/*background-color: var(--fs-color-2);*/
		/*box-shadow: 5px 5px 0px 0px black;*/
		background-color: var(--fs-color-2);
		color: black;
		/*box-shadow: 0 0 0.5rem 0.5rem var(--fs-color-2);*/
		position: relative;
		contain: layout;
	}
	.event-box-wrapper .event-short + .event-short {
		margin-top: 0.6em;
	}
	/*.event-box-wrapper:after {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	z-index: -1;*/
	/*	background-color: transparent;*/
	/*	transform: translate(5px, 5px);*/
	/*	border: 1px solid var(--fs-color-2);*/
	/*}*/
	/*.event-box-wrapper:before {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	z-index: -1;*/
	/*	background-color: transparent;*/
	/*	transform: translate(10px, 10px);*/
	/*	border: 1px solid var(--fs-color-2);*/
	/*}*/
	.events-text-wrapper {
	}
	.bg-green {
		background-color: var(--fs-color-2);
	}
	.timetable-extra {
		text-decoration: none;
		color: inherit;
		transition: transform 0.1s ease-in-out;
		display: block;
	}
	.timetable-extra:hover {
		text-decoration: none;
		color: inherit;
		transform: scale(1.05);
	}
</style>
