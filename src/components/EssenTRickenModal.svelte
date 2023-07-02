
<script>

import Modal from "./Modal.svelte";
let showModal = false;
</script>

<Modal bind:showModal>
  <img src="/essentrinken.svg" width="80%" alt="Essen und Trinken Headline">
  <br>
  <h3>Kulturei Festivaltheke</h3>
<p>
    Wir freuen uns auf regionale, bio-zertifizierte Weine aus Rheinhessen aus dem Weingut Gutzler, auf Wasser, Saftschorlen und Bier aus der Region und vieles mehr.
    Ganz bewusst legen wir bei Speisen & Getränken den Fokus auf regionale Anbieter*innen, mit dem Schwerpunkt saisonal, biologisch, vegetarisch bzw. vegan, fair hergestellt und fair gehandelt.
    Schon bei ökologisch vermeintlich harmlosen Freizeitaktivitäten können wir durch ein bewusstes Planen ALLE einen wesentlichen Beitrag zum Umweltschutz leisten.

  </p>
  <p>Herzlich willkommen zum 9. Filmsommer in Mainz. Wir werden bunter, lauter, vielfältiger und legen in diesem Jahr einen besonderen Fokus auf die Nachhaltigkeit.

    Wir freuen uns, vom 16. – 27. August an unserem wunderschönen Spielort Kulturei, Zitadelle Mainz, wieder gelebte Filmkultur zu präsentieren. Livemusik, Kunst, Film und ganz viel Lebensfreude … Sommerwetter trifft Filmkultur – ein Genuss!

    Nach 2 Jahren Pandemie starten wir wieder voll durch. Der Eintritt zu unseren Veranstaltungen ist wie immer frei, für Speis und Trank ist bestens gesorgt. Seid herzlich willkommen bei unserer tollen Open-Air-Reihe!

    Beste Grüße und „Film ab!“

    Euer Filmsommer-Team</p>
  <p>Herzlich willkommen zum 9. Filmsommer in Mainz. Wir werden bunter, lauter, vielfältiger und legen in diesem Jahr einen besonderen Fokus auf die Nachhaltigkeit.

    Wir freuen uns, vom 16. – 27. August an unserem wunderschönen Spielort Kulturei, Zitadelle Mainz, wieder gelebte Filmkultur zu präsentieren. Livemusik, Kunst, Film und ganz viel Lebensfreude … Sommerwetter trifft Filmkultur – ein Genuss!

    Nach 2 Jahren Pandemie starten wir wieder voll durch. Der Eintritt zu unseren Veranstaltungen ist wie immer frei, für Speis und Trank ist bestens gesorgt. Seid herzlich willkommen bei unserer tollen Open-Air-Reihe!

    Beste Grüße und „Film ab!“

    Euer Filmsommer-Team</p>
  <p>Herzlich willkommen zum 9. Filmsommer in Mainz. Wir werden bunter, lauter, vielfältiger und legen in diesem Jahr einen besonderen Fokus auf die Nachhaltigkeit.

    Wir freuen uns, vom 16. – 27. August an unserem wunderschönen Spielort Kulturei, Zitadelle Mainz, wieder gelebte Filmkultur zu präsentieren. Livemusik, Kunst, Film und ganz viel Lebensfreude … Sommerwetter trifft Filmkultur – ein Genuss!

    Nach 2 Jahren Pandemie starten wir wieder voll durch. Der Eintritt zu unseren Veranstaltungen ist wie immer frei, für Speis und Trank ist bestens gesorgt. Seid herzlich willkommen bei unserer tollen Open-Air-Reihe!

    Beste Grüße und „Film ab!“

    Euer Filmsommer-Team</p>
</Modal>

<button
  class="EssenTrinkenBtn"
  on:click={() => (showModal = true)}
>
  <span>Essen & Trinken</span>
</button>

<style>
    .EssenTrinkenBtn {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        z-index: 100;
        background-color: #fff;
        border-radius: 1em;
        padding: 0.5rem;
        font-size: 0.8rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .EssenTrinkenBtn:hover {
        transform: scale(1.1);
        background-color: var(--green);
        color: white;
    }
    h3 {
        margin-block-end: 0.5em;
    }
 </style>
