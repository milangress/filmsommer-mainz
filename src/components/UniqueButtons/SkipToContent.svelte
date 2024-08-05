<script>
	let visible = false

	function handleFocus() {
		visible = true
	}

	function handleBlur() {
		visible = false
	}
</script>

<a href="#main" class="skipLink" class:visible on:focus={handleFocus} on:blur={handleBlur}>
	Zum Inhalt springen
</a>

<style>
	.skipLink {
		--padding-all: 1rem;
		position: absolute;
		top: -200px;
		left: var(--padding-all);
		right: var(--padding-all);
		z-index: 100;
		background-color: #fff;
		color: #000;
		text-align: center;
		transition: top 0.3s;

		border-radius: 1em;
		padding: 0.5rem;
		font-size: 0.8rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		cursor: pointer;
		border: 0;
		text-decoration: none;
	}

	.skipLink:focus {
		top: var(--padding-all);
		outline: 2px solid #000;
	}

	.visible {
		top: var(--padding-all);
	}
</style>
