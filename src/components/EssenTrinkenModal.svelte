<script>
	import Modal from './Modal.svelte'
	let showModal = false

	import image from "/src/assets/essentrinken.svg"
</script>

<Modal
	id="EssenTrinkenModal"
	modalHeadlineID="e-d-modal-headline"
	bind:showModal
>
	<object data="{image}" width="80%" title="Essen und Trinken Headline" type="image/svg+xml"></object>
	<br />
	<h3 id="e-d-modal-headline">Kulturei Festivaltheke</h3>
	<p>
		Wir freuen uns auf regionale, biozertifizierte Weine aus Rheinhessen aus dem Weingut Gutzler, auf Wasser, Saftschorlen und Bier aus der Region und vieles mehr.
	</p>
	<p>
		Ganz bewusst legen wir bei Speisen & Getränken den Fokus auf regionale Anbieter*innen, mit dem Schwerpunkt saisonal, biologisch, vegetarisch bzw. vegan, fair hergestellt und fair gehandelt.
	</p>
	<p>
		Schon bei ökologisch vermeintlich harmlosen Freizeitaktivitäten können wir durch ein bewusstes Planen ALLE einen wesentlichen Beitrag zum Umweltschutz leisten.
	</p>

</Modal>

<button
	class="EssenTrinkenBtn"
	on:click={() => (showModal = true)}
	aria-label="Öffne Essen & Trinken"
	aria-haspopup="dialog"
>
	<span>Essen & Trinken</span>
</button>

<style>
	.EssenTrinkenBtn {
		background-color: #fff;
		border-radius: 1em;
		border: 0;
		padding: 0.5rem;
		font-size: 0.8rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	@media (max-width: 800px) {
		.EssenTrinkenBtn {
			/*background-color: var(--fs-color-2);*/
			box-shadow: 0 0.5rem 1rem var(--fs-color-2);
			font-size: 1.6rem;
			display: block;
			margin-block: 3rem;
			margin-left: auto;
			margin-right: auto;
			padding: 0.8em 2em;
		}
	}
	@media (min-width: 800px) {
		.EssenTrinkenBtn {
			position: fixed;
			bottom: 1rem;
			left: 1rem;
			z-index: 100;
			background-color: #fff;
			padding: 0.5rem;
		}
	}

	.EssenTrinkenBtn:hover {
		transform: scale(1.1);
		background-color: var(--fs-color-2);
		color: white;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
	}
	h3 {
		margin-block-end: 0.5em;
	}
</style>
