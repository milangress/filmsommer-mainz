<script>
	export let showModal // boolean
	export let modalHeadlineID

	let dialog // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	aria-modal=true
	bind:this={dialog}
	aria-labelledby="{modalHeadlineID}"
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-autofocus -->
	<button
		autofocus
		on:click={() => dialog.close()}
		aria-label="Close"
	>×</button>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		max-height: 90vh;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		top: auto;
		background: var(--fs-color-1);
		contain: layout;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	button {
		position: sticky;
		top: 0.5em;
		left: 90%;
		border: none;
		border-radius: 0.5em;
		background: white;
		font-size: 1.5em;
		line-height: 1;
		padding: 0.25em 0.5em;
		cursor: pointer;
		color: black;
		box-shadow: var(--fs-color-2) 3px 3px 5px;
		aspect-ratio: 1;
		transition: transform 0.2s ease-out;
	}
	button:hover {
		background: var(--fs-color-2);
		color: white;
		transform: scale(1.1);
	}
	@media (max-width: 800px) {
		button {
			font-size: 2.5em;
			left: 85%;
		}
	}
	@keyframes zoom {
		from {
			transform: scale(0.95) translateX(-5%);
		}
		to {
			transform: scale(1) translateX(0%);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
