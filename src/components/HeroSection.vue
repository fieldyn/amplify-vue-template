<script setup lang="ts">
import InnovatioXLogo from './InnovatioXLogo.vue'
</script>

<template>
  <section class="hero">
    <!-- Ambient orbs -->
    <div class="hero__orbs" aria-hidden="true">
      <div class="hero__orb hero__orb--cyan" />
      <div class="hero__orb hero__orb--purple" />
      <div class="hero__orb hero__orb--pink" />
    </div>

    <div class="hero__content">
      <div class="hero__logo-mark">
        <InnovatioXLogo :size="80" id="hero-logo" />
      </div>

      <p class="hero__eyebrow">Cloud · AI · .NET</p>

      <h1 class="hero__title">
        Building Tomorrow's<br />
        <span class="hero__title-accent">Cloud Solutions</span>
      </h1>

      <p class="hero__subtitle">
        We architect intelligent cloud systems powered by AI and modern .NET,
        transforming how businesses innovate, scale, and lead.
      </p>

      <div class="hero__actions">
        <a href="#contact" class="hero__btn hero__btn--primary">Get Started</a>
        <a href="#services" class="hero__btn hero__btn--ghost">Our Services</a>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
}

/* ─── Gradient orbs ─── */
.hero__orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.28;
  will-change: transform;
}

.hero__orb--cyan {
  width: min(600px, 80vw);
  height: min(600px, 80vw);
  background: var(--ix-cyan);
  top: -15%;
  left: -10%;
  animation: orb-drift 22s ease-in-out infinite;
}

.hero__orb--purple {
  width: min(450px, 60vw);
  height: min(450px, 60vw);
  background: var(--ix-purple);
  top: 30%;
  right: -8%;
  animation: orb-drift 22s ease-in-out infinite -7s;
}

.hero__orb--pink {
  width: min(400px, 55vw);
  height: min(400px, 55vw);
  background: var(--ix-pink);
  bottom: -10%;
  left: 25%;
  animation: orb-drift 22s ease-in-out infinite -14s;
}

[data-theme="light"] .hero__orb {
  opacity: 0.12;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.06); }
  66% { transform: translate(-25px, 20px) scale(0.94); }
}

/* ─── Content ─── */
.hero__content {
  position: relative;
  text-align: center;
  max-width: 780px;
  animation: hero-enter 1s ease-out both;
}

@keyframes hero-enter {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero__logo-mark {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  animation: hero-enter 1s ease-out 0.15s both;
}

.hero__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ix-cyan);
  margin-bottom: 1.5rem;
  animation: hero-enter 1s ease-out 0.25s both;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 600;
  line-height: 1.12;
  color: var(--ix-text);
  margin-bottom: 1.5rem;
  animation: hero-enter 1s ease-out 0.35s both;
}

.hero__title-accent {
  background: linear-gradient(
    135deg,
    var(--ix-cyan) 0%,
    var(--ix-purple) 50%,
    var(--ix-pink) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: var(--ix-muted);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  animation: hero-enter 1s ease-out 0.45s both;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: hero-enter 1s ease-out 0.55s both;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 2rem;
  font-family: var(--font-tech);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 10px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.hero__btn--primary {
  color: var(--ix-night);
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple));
  box-shadow: 0 4px 24px rgba(92, 224, 248, 0.2);
}

[data-theme="light"] .hero__btn--primary {
  color: #fff;
}

.hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(92, 224, 248, 0.35);
}

.hero__btn--ghost {
  color: var(--ix-text);
  background: rgba(140, 224, 255, 0.08);
  border: 1px solid var(--ix-border);
}

.hero__btn--ghost:hover {
  transform: translateY(-2px);
  border-color: var(--color-border-hover);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* ─── Scroll indicator ─── */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--ix-cyan), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50%      { opacity: 0.8; transform: scaleY(1); }
}
</style>
