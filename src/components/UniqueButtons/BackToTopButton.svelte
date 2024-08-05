<script>
	let y

	$: isVisible = y > 1500

	function scrollToTop() {
		const el = document.querySelector(`#timetable`)
		console.log(el)
		if (!el) return
		el.scrollIntoView({
			behavior: 'smooth'
		})
	}
</script>

<svelte:window bind:scrollY={y} />

<button
	class="backToTopButton"
	style="display: {isVisible ? 'block' : 'none'}"
	on:click={scrollToTop}
>
	<span>↑ Programmübersicht</span>
</button>

<style>
	.backToTopButton {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 100;
		background-color: #fff;
		border-radius: 1em;
		padding: 0.5rem;
		font-size: 0.8rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		border: 0;
	}

	.backToTopButton:hover {
		transform: scale(1.1);
		background-color: var(--fs-color-2);
		color: white;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
	}

	/* .slideTop-enter-active,
	.slideTop-leave-active {
		transition: all 0.6s ease-in-out;
	}

	.slideTop-enter,
	.slideTop-leave-to {
		transform: translateY(50px);
	} */
</style>
