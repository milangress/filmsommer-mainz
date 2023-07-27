<div class="background">
	<slot />
</div>
<div class="background-behind" />

<style>
	.background {
		background: url('/FS_Website_Hintergrund-cut.svg'),
			linear-gradient(
				90deg,
				rgba(239, 111, 31, 1) 0%,
				rgba(239, 111, 31, 1) 51%,
				rgba(49, 172, 98, 1) 50%,
				rgba(49, 172, 98, 1) 100%
			);
		background-repeat: repeat-y;
		background-position-x: center;
		/*background-size: 100% auto;*/
		background-size: 1920px;
		scroll-padding-top: 2rem;
	}
	@media (max-width: 1100px) {
		.background {
			background-size: 100% auto;
		}
	}
	.background-behind {
		position: fixed;
		inset: 0;
		z-index: -1;

		background: linear-gradient(
			90deg,
			rgba(239, 111, 31, 1) 0%,
			rgba(239, 111, 31, 1) 50%,
			rgba(49, 172, 98, 1) 50%,
			rgba(49, 172, 98, 1) 100%
		);
	}
</style>
