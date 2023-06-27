<script>
    import { DateTime } from 'luxon';
    import LogoDynamic from "/src/components/LogoDynamic.svelte"
    import BackToTopButton from '/src/components/BackToTopButton.svelte';
    import HeadlineDynamic from '/src/components/HeadlineDynamic.svelte';
    import TimetableBlock from '/src/components/TimetableBlock.svelte';
    import PathText from '/src/components/PathText.svelte';
    import LogoBlock from '/src/components/LogoBlock.svelte';

    import {dates} from "/src/data/2022.js"
    import {about} from "/src/data/2022.js"

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
    <LogoDynamic/>
    <HeadlineDynamic>
        <h1>Es geht weiter und wir legen wieder los!</h1>
    </HeadlineDynamic>
    <TimetableBlock allDates="{dates}" />

    <div class="content inner">{@html about.text}</div>

    {#each dates as date}
        <div>
            <figure class="date-image">
                <img
                        src="{getImage(date.image)}"
                        alt="An Image from the {date.events[1].title} event"
                        loading="lazy"
                />
                <figcaption>{date.events[1].title}</figcaption>
            </figure>

            <HeadlineDynamic className="headline" id="{'date-' + date.date}">
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
                                <PathText text="{event.pathtext}" />
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
    <footer class="content inner">
        <a
                class="instagram social-media-link"
                href="https://www.instagram.com/filmsommerfestivalmainz/"
                target="_blank"
                title="Filmsommerfestival Mainz auf Instagram"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
        </a>
        <a
                class="facebook social-media-link"
                href="https://www.facebook.com/filmsommer"
                target="_blank"
                title="Filmsommerfestival Mainz auf Facebook"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
        </a>
        <a href="/impressum" title="Impressum Filmsommerfestival Mainz">Impressum</a>
    </footer>
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
        /*background-color: var(--green);*/
        /*box-shadow: 5px 5px 0px 0px black;*/
        background-color: var(--green);
        color: var(--pink);
        /*box-shadow: 0 0 0.5rem 0.5rem var(--green);*/
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
        border: 1px solid var(--green);
    }
    .event-box-wrapper:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: transparent;
        transform: translate(10px, 10px);
        border: 1px solid var(--green);
    }
    .events-text-wrapper {
    }
    footer.content {
        padding: 4rem 0;
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    footer.content > * {
        margin-left: 1rem;
    }
    .social-media-link {
        height: 1em;
        width: 1em;
    }
</style>
