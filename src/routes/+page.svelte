<script>
    import LogoDynamic from "../components/LogoDynamic.svelte"
    import HeadlineDynamic from "/src/components/HeadlineDynamic.svelte"
</script>

<LogoDynamic></LogoDynamic>

<HeadlineDynamic>
    <h1>10 Jahre Film&shy;sommer!</h1>
</HeadlineDynamic>

<div class="content inner">
    Liebe Filmsommer Freund*innen,<br>
    Wir feiern 10 Jahre Filmsommer vom <b>18.8.</b> bis <b>26.8.2013.</b>
    Hier gibt es bald das komplette Programm zu sehen.<br>
    Wir freuen uns auf euch!
</div>

<!--<div class="teaser">-->
<!--    <p>Liebe Filmsommer Freund*innen,<br>-->
<!--        Wir feiern 10 Jahre Filmsommer vom <b>18.8.</b> bis <b>26.8.2013.</b>-->
<!--        Hier gibt es bald das komplette Programm zu sehen.<br>-->
<!--        Wir freuen uns auf euch!-->
<!--    </p>-->
<!--</div>-->

<style>
    .teaser {
        font-size: 1em;
        margin-top: 2em;
        max-width: 43ch;
        position: absolute;
        top: 60%;
        left: 20%;
        background: var(--green);
        padding: 1em;
        border: 3px solid var(--pink);
    }
    :global(.logo) {
        max-height: 30vh;
    }
    .content {
        margin-bottom: 3rem;
        text-align: center;
    }
</style>
