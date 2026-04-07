<section class="hero" aria-label="Introduction" role="banner">
	<div class="hero-content">
		<!-- Logo: record + name side by side -->
		<div class="hero-logo reveal-up" style="--d: 0s">
			<!-- Vinyl record mark -->
			<div class="hero-record">
				<svg viewBox="-44 -48 88 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<circle cx="0" cy="0" r="38" fill="none" stroke="#c8a96e" stroke-width="0.4" opacity="0.15"/>
					<circle cx="0" cy="0" r="34" fill="none" stroke="#c8a96e" stroke-width="0.3" opacity="0.2"/>
					<circle cx="0" cy="0" r="30" fill="none" stroke="#c8a96e" stroke-width="0.3" opacity="0.25"/>
					<circle cx="0" cy="0" r="26" fill="none" stroke="#c8a96e" stroke-width="0.4" opacity="0.3"/>
					<circle cx="0" cy="0" r="36" fill="none" stroke="#c8a96e" stroke-width="0.2" stroke-dasharray="1.5 3" opacity="0.12"/>
					<circle cx="0" cy="0" r="32" fill="none" stroke="#c8a96e" stroke-width="0.2" stroke-dasharray="1 2.5" opacity="0.1"/>
					<circle cx="0" cy="0" r="28" fill="none" stroke="#c8a96e" stroke-width="0.2" stroke-dasharray="2 4" opacity="0.1"/>
					<circle cx="0" cy="0" r="40" fill="none" stroke="#c8a96e" stroke-width="1" opacity="0.4"/>
					<circle cx="0" cy="0" r="16" fill="none" stroke="#c8a96e" stroke-width="0.6" opacity="0.5"/>
					<circle cx="0" cy="0" r="15" fill="#0a0a0a" stroke="none"/>
					<circle cx="0" cy="0" r="15" fill="none" stroke="#c8a96e" stroke-width="0.3" opacity="0.3"/>
					<circle cx="0" cy="0" r="2" fill="#c8a96e" opacity="0.3"/>
					<text x="-0.5" y="0.5" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-size="11" letter-spacing="1" fill="#c8a96e" opacity="0.85">NJ</text>
					<line x1="28" y1="-42" x2="12" y2="-18" stroke="#c8a96e" stroke-width="1" opacity="0.3"/>
					<circle cx="12" cy="-18" r="1.5" fill="#c8a96e" opacity="0.25"/>
					<circle cx="30" cy="-44" r="3" fill="none" stroke="#c8a96e" stroke-width="0.6" opacity="0.2"/>
				</svg>
			</div>

			<!-- Name text block -->
			<div class="hero-text">
				<h1 class="hero-name">Nick Jennings</h1>
				<p class="hero-music">music</p>
			</div>
		</div>

		<!-- Taglines nestled underneath -->
		<div class="hero-rule reveal-up" style="--d: 0.6s" aria-hidden="true"></div>
		<p class="hero-sub reveal-up" style="--d: 0.85s">Multi-instrumentalist</p>
		<p class="hero-loc reveal-up" style="--d: 1s">Prague, Czech Republic</p>
	</div>

	<!-- Scroll hint -->
	<div class="scroll-hint reveal-up" style="--d: 2.2s" aria-hidden="true"></div>
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

	@media (max-width: 767px) {
		.hero {
			min-height: auto;
			padding-top: 10vh;
			padding-bottom: 8vh;
		}
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		width: 100%;
	}

	.hero-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 90vw;
		max-width: 64rem;
	}

	.hero-record {
		flex-shrink: 0;
		width: clamp(8rem, 30vw, 12rem);
		aspect-ratio: 1;
	}

	.hero-record :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.hero-name {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.8rem, 8vw, 2.4rem);
		letter-spacing: -0.015em;
		line-height: 1;
		color: #f5f0e8;
		text-align: center;
	}

	.hero-music {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: clamp(0.6rem, 1.2vw, 0.9rem);
		letter-spacing: 0.32em;
		text-transform: lowercase;
		color: #c8a96e;
		opacity: 0.55;
		text-align: center;
	}

	@media (min-width: 768px) {
		.hero-logo {
			flex-direction: row;
			gap: clamp(1.5rem, 4vw, 3rem);
		}

		.hero-record {
			width: clamp(12rem, 42vh, 26rem);
		}

		.hero-text {
			align-items: flex-start;
		}

		.hero-name {
			font-size: clamp(2.4rem, 6vw, 5.5rem);
			white-space: nowrap;
			text-align: left;
		}

		.hero-music {
			text-align: left;
		}
	}

	.hero-rule {
		width: 2.5rem;
		height: 1px;
		background: #c8a96e;
		opacity: 0.25;
		margin-top: 0.75rem;
	}

	.hero-sub {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #f5f0e8;
		opacity: 0.3;
		margin-top: 0.75rem;
	}

	.hero-loc {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.6rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #f5f0e8;
		opacity: 0.18;
		margin-top: 0.25rem;
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

	@media (prefers-reduced-motion: reduce) {
		.reveal-up {
			opacity: 1;
			transform: none;
			animation: none;
		}
	}

	@keyframes revealUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
