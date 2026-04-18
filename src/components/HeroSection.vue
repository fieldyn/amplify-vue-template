<script setup lang="ts">
import InnovatioXLogo from './InnovatioXLogo.vue'

const trustedOn = ['.NET', 'Azure', 'AWS', 'OpenAI', 'Vue.js', 'Kubernetes']
</script>

<template>
  <section class="hero">
    <!-- Watermark mark, very large, fades into background -->
    <div class="hero__watermark" aria-hidden="true">
      <InnovatioXLogo
        :size="640"
        id="hero-watermark"
        background="transparent"
      />
    </div>

    <!-- Soft gradient orbs -->
    <div class="hero__orbs" aria-hidden="true">
      <span class="hero__orb hero__orb--sky" />
      <span class="hero__orb hero__orb--violet" />
    </div>

    <div class="ix-container hero__grid">
      <div class="hero__copy">
        <span class="hero__eyebrow">
          <span class="hero__eyebrow-dot" /> Cloud · AI · .NET
        </span>

        <h1 class="hero__title">
          Engineering the
          <span class="hero__title-em">next layer</span>
          of cloud
          <span class="hero__title-block">
            <span class="hero__title-and">&amp;</span>
            <span class="ix-grad-text">intelligence.</span>
          </span>
        </h1>

        <p class="hero__lead">
          We architect production-grade systems where modern .NET, machine learning,
          and cloud-native infrastructure meet — turning ambitious software ideas
          into platforms that scale.
        </p>

        <div class="hero__actions">
          <a href="#contact" class="hero__btn hero__btn--primary">
            <span>Start a project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#services" class="hero__btn hero__btn--ghost">
            See what we build
          </a>
        </div>

        <div class="hero__trust">
          <span class="hero__trust-label">Working across</span>
          <ul class="hero__trust-list">
            <li v-for="name in trustedOn" :key="name">{{ name }}</li>
          </ul>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__mark-card">
          <div class="hero__mark-frame">
            <InnovatioXLogo :size="220" id="hero-card" />
          </div>

          <div class="hero__mark-meta">
            <div>
              <p class="hero__mark-label">Brand mark</p>
              <p class="hero__mark-value">innovatio<span class="ix-grad-text">X</span><span class="hero__mark-tld">.com</span></p>
            </div>
            <span class="hero__mark-tag">v 2.0</span>
          </div>

          <div class="hero__mark-grid" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>

        <!-- Floating chip -->
        <div class="hero__chip hero__chip--01" aria-hidden="true">
          <span class="hero__chip-dot" />
          <span>Production · ready</span>
        </div>
        <div class="hero__chip hero__chip--02" aria-hidden="true">
          <span class="hero__chip-num">99.9</span>
          <span class="hero__chip-text">% uptime SLA</span>
        </div>
      </div>
    </div>

    <a href="#services" class="hero__scroll" aria-label="Scroll to services">
      <span class="hero__scroll-text">Scroll</span>
      <span class="hero__scroll-line" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  padding: clamp(7rem, 14vh, 10rem) 0 clamp(3rem, 8vh, 6rem);
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* ─── Watermark X behind everything ─── */
.hero__watermark {
  position: absolute;
  right: -240px;
  bottom: -240px;
  opacity: 0.04;
  pointer-events: none;
  z-index: 0;
  filter: blur(0.4px);
  transform: rotate(-12deg);
}

[data-theme="light"] .hero__watermark {
  opacity: 0.05;
}

/* ─── Orbs ─── */
.hero__orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.36;
  will-change: transform;
}

.hero__orb--sky {
  width: 520px;
  height: 520px;
  background: var(--ix-sky);
  top: -160px;
  left: -120px;
  animation: orb-drift 26s ease-in-out infinite;
}

.hero__orb--violet {
  width: 640px;
  height: 640px;
  background: var(--ix-violet);
  bottom: -240px;
  right: -180px;
  animation: orb-drift 30s ease-in-out -10s infinite;
}

[data-theme="light"] .hero__orb {
  opacity: 0.16;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(40px, -30px) scale(1.06); }
}

/* ─── Grid layout ─── */
.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.95fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 4rem;
  }
}

/* ─── Copy column ─── */
.hero__copy {
  animation: fadeup 0.9s ease-out both;
}

@keyframes fadeup {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.4rem 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ix-text-soft);
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 999px;
  margin-bottom: 1.6rem;
}

.hero__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ix-sky);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.7);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.6; transform: scale(0.85); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6.4vw, 4.8rem);
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: var(--ix-text);
  margin-bottom: 1.6rem;
}

.hero__title-em {
  font-style: italic;
  font-weight: 500;
  color: var(--ix-text);
  position: relative;
}

.hero__title-em::after {
  content: '';
  position: absolute;
  inset: auto 0 -4px 0;
  height: 2px;
  background: var(--ix-gradient);
  border-radius: 2px;
  transform: scaleX(0.0);
  transform-origin: left;
  animation: underline-in 1s cubic-bezier(0.65, 0, 0.35, 1) 0.6s forwards;
}

@keyframes underline-in {
  to { transform: scaleX(1); }
}

.hero__title-block {
  display: block;
  font-style: italic;
  font-weight: 500;
}

.hero__title-and {
  font-family: var(--font-display);
  color: var(--ix-muted);
  margin-right: 0.4rem;
  font-style: normal;
  font-weight: 400;
}

.hero__lead {
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  line-height: 1.65;
  color: var(--ix-text-soft);
  max-width: 540px;
  margin-bottom: 2.4rem;
}

/* ─── CTAs ─── */
.hero__actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 12px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}

.hero__btn--primary {
  color: #06090f;
  background: var(--ix-gradient);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.hero__btn--primary svg {
  transition: transform 0.25s ease;
}

.hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px rgba(168, 85, 247, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.hero__btn--primary:hover svg {
  transform: translateX(3px);
}

[data-theme="light"] .hero__btn--primary {
  color: #ffffff;
}

.hero__btn--ghost {
  color: var(--ix-text);
  background: transparent;
  border: 1px solid var(--ix-border-strong);
}

.hero__btn--ghost:hover {
  transform: translateY(-2px);
  border-color: var(--ix-sky);
  background: rgba(56, 189, 248, 0.06);
  color: var(--ix-sky);
}

/* ─── Trust row ─── */
.hero__trust {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.hero__trust-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-muted);
}

.hero__trust-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
}

.hero__trust-list li {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--ix-text-soft);
  position: relative;
  padding-right: 1rem;
}

.hero__trust-list li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--ix-muted);
  transform: translateY(-50%);
  opacity: 0.5;
}

/* ─── Visual column ─── */
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 460px;
  animation: fadeup 0.9s ease-out 0.15s both;
}

.hero__mark-card {
  position: relative;
  width: min(380px, 90%);
  padding: 1.3rem;
  background: linear-gradient(180deg, rgba(19, 28, 51, 0.85), rgba(13, 20, 38, 0.9));
  border: 1px solid var(--ix-border-strong);
  border-radius: 28px;
  backdrop-filter: blur(12px);
  box-shadow:
    0 30px 80px rgba(2, 6, 16, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: rotate(-2deg);
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  overflow: hidden;
}

[data-theme="light"] .hero__mark-card {
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow:
    0 30px 80px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.hero__mark-card:hover {
  transform: rotate(0deg) translateY(-6px);
}

.hero__mark-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
  border-radius: 20px;
  background:
    radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.10), transparent 70%);
  margin-bottom: 1.2rem;
}

.hero__mark-meta {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.4rem;
}

.hero__mark-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ix-muted);
  margin-bottom: 0.4rem;
}

.hero__mark-value {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ix-text);
}

.hero__mark-tld {
  color: var(--ix-muted);
  font-weight: 400;
}

.hero__mark-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--ix-border-strong);
  color: var(--ix-text-soft);
  background: rgba(56, 189, 248, 0.05);
}

/* tiny dot grid in card corner */
.hero__mark-grid {
  position: absolute;
  top: 18px;
  right: 18px;
  display: grid;
  grid-template-columns: repeat(6, 4px);
  gap: 6px;
  opacity: 0.5;
}

.hero__mark-grid span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ix-muted);
}

/* Floating chips */
.hero__chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.85rem;
  background: rgba(13, 20, 38, 0.92);
  border: 1px solid var(--ix-border-strong);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--ix-text-soft);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(2, 6, 16, 0.4);
}

[data-theme="light"] .hero__chip {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.10);
}

.hero__chip--01 {
  top: 12%;
  right: 4%;
  animation: float 6s ease-in-out infinite;
}

.hero__chip--02 {
  bottom: 14%;
  left: -4%;
  padding: 0.55rem 1rem;
  animation: float 7s ease-in-out -3s infinite;
}

.hero__chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.7);
}

.hero__chip-num {
  font-size: 0.95rem;
  font-weight: 700;
  background: var(--ix-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__chip-text {
  color: var(--ix-muted);
  font-weight: 500;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}

/* ─── Scroll indicator ─── */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  color: var(--ix-muted);
  z-index: 2;
}

.hero__scroll-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.hero__scroll-line {
  width: 1px;
  height: 42px;
  background: linear-gradient(to bottom, var(--ix-sky), transparent);
  animation: scroll-pulse 2.4s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
  50%      { opacity: 1;   transform: scaleY(1); }
}

@media (max-width: 960px) {
  .hero__visual {
    min-height: 420px;
  }
  .hero__chip--02 { left: 2%; }
  .hero__chip--01 { right: 2%; }
}

@media (max-width: 600px) {
  .hero__title { font-size: clamp(2.2rem, 9vw, 3.4rem); }
  .hero__lead  { font-size: 1rem; }
}
</style>
