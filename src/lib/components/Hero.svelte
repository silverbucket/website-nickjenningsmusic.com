<section class="hero">
	<div class="hero-content">
		<!-- Name — equal weight, one line -->
		<h1 class="hero-name reveal-up" style="--d: 0s">
			Nick Jennings
		</h1>

		<!-- music — quiet counterpoint -->
		<p class="hero-music reveal-up" style="--d: 0.25s">
			music
		</p>

		<!-- Thin gold rule -->
		<div class="hero-rule reveal-up" style="--d: 0.6s"></div>

		<!-- Details -->
		<p class="hero-sub reveal-up" style="--d: 0.85s">
			Multi-instrumentalist
		</p>
		<p class="hero-loc reveal-up" style="--d: 1s">
			Prague, Czech Republic
		</p>
	</div>

	<!-- Scroll hint — a breath, not an instruction -->
	<div class="scroll-hint reveal-up" style="--d: 2.2s"></div>
</section>

<style>
	.hero {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 1.5rem 6vh;
		position: relative;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}

	.hero-name {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.4rem, 5.5vw, 4.8rem);
		letter-spacing: -0.015em;
		line-height: 1;
		color: #f5f0e8;
		white-space: nowrap;
	}

	.hero-music {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: clamp(0.6rem, 1.2vw, 0.8rem);
		letter-spacing: 0.32em;
		text-transform: lowercase;
		color: #c8a96e;
		opacity: 0.55;
		margin-top: 0.75rem;
	}

	.hero-rule {
		width: 2.5rem;
		height: 1px;
		background: #c8a96e;
		opacity: 0.25;
		margin-top: 2.5rem;
	}

	.hero-sub {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #f5f0e8;
		opacity: 0.3;
		margin-top: 2rem;
	}

	.hero-loc {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.6rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #f5f0e8;
		opacity: 0.18;
		margin-top: 0.35rem;
	}

	.scroll-hint {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		width: 1px;
		height: 2rem;
		background: linear-gradient(to bottom, rgba(200, 169, 110, 0.2), transparent);
	}

	/* Animation — slow theater-lights fade */
	.reveal-up {
		opacity: 0;
		transform: translateY(0.5rem);
		animation: revealUp 1.4s cubic-bezier(0.23, 1, 0.32, 1) var(--d, 0s) forwards;
	}

	@keyframes revealUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
