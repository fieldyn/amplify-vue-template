<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
import InnovatioXLogo from './InnovatioXLogo.vue'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const channels = [
  {
    label: 'Email',
    value: 'info@innovatiox.com',
    href: 'mailto:info@innovatiox.com',
  },
  {
    label: 'Web',
    value: 'innovatiox.com',
    href: 'https://innovatiox.com',
    external: true,
  },
  {
    label: 'Hours',
    value: 'Mon–Fri · 09:00–19:00 CET',
  },
]
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact" :class="{ revealed: isVisible }">
    <div class="ix-container">
      <div class="contact__grid">
        <!-- Left: editorial CTA -->
        <div class="contact__copy">
          <span class="contact__eyebrow">
            <span class="contact__eyebrow-bar" />
            Let's build together
          </span>

          <h2 class="contact__title">
            Have a problem worth
            <em class="ix-grad-text">solving?</em>
          </h2>

          <p class="contact__lead">
            Whether you're modernizing legacy systems, shipping AI-powered products,
            or scaling cloud infrastructure — we'd love to hear what you're building.
            Drop a line; expect a reply within one business day.
          </p>

          <a href="mailto:info@innovatiox.com" class="contact__cta">
            <span>Start the conversation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <!-- Right: contact card -->
        <aside class="contact__card">
          <div class="contact__card-orb" aria-hidden="true" />

          <div class="contact__card-head">
            <InnovatioXLogo :size="56" id="contact-mark" />
            <div>
              <p class="contact__card-name">
                innovatio<span class="ix-grad-text">X</span><span class="contact__card-tld">.com</span>
              </p>
              <p class="contact__card-sub">Cloud · AI · .NET studio</p>
            </div>
          </div>

          <ul class="contact__channels">
            <li v-for="ch in channels" :key="ch.label">
              <span class="contact__channel-label">{{ ch.label }}</span>
              <a
                v-if="ch.href"
                :href="ch.href"
                :target="ch.external ? '_blank' : undefined"
                :rel="ch.external ? 'noopener' : undefined"
                class="contact__channel-value"
              >
                {{ ch.value }}
              </a>
              <span v-else class="contact__channel-value contact__channel-value--static">
                {{ ch.value }}
              </span>
            </li>
          </ul>

          <div class="contact__card-foot">
            <span class="contact__status">
              <span class="contact__status-dot" />
              Currently accepting projects · Q2
            </span>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
  position: relative;
}

.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

@media (max-width: 880px) {
  .contact__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
}

/* ─── Left copy ─── */
.contact__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ix-sky);
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.contact__eyebrow-bar {
  width: 28px;
  height: 1px;
  background: currentColor;
}

.revealed .contact__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: var(--ix-text);
  margin-bottom: 1.4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.contact__title em {
  font-style: italic;
  font-weight: 500;
}

.revealed .contact__title {
  opacity: 1;
  transform: translateY(0);
}

.contact__lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ix-text-soft);
  max-width: 520px;
  margin-bottom: 2.2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
}

.revealed .contact__lead {
  opacity: 1;
  transform: translateY(0);
}

.contact__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 1.7rem;
  font-family: var(--font-mono);
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #06090f;
  background: var(--ix-gradient);
  border-radius: 12px;
  box-shadow:
    0 12px 32px rgba(56, 189, 248, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  opacity: 0;
  transform: translateY(20px);
}

[data-theme="light"] .contact__cta {
  color: #ffffff;
}

.revealed .contact__cta {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s 0.3s, transform 0.7s 0.3s, box-shadow 0.25s ease;
}

.contact__cta:hover {
  transform: translateY(-3px);
  box-shadow:
    0 18px 44px rgba(168, 85, 247, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.contact__cta svg {
  transition: transform 0.25s ease;
}

.contact__cta:hover svg {
  transform: translateX(3px);
}

/* ─── Right card ─── */
.contact__card {
  position: relative;
  padding: 2.2rem;
  background: var(--ix-surface);
  border: 1px solid var(--ix-border-strong);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--ix-shadow-soft);
  opacity: 0;
  transform: translateY(28px) rotate(0.3deg);
  transition: opacity 0.7s 0.25s, transform 0.7s 0.25s;
}

.revealed .contact__card {
  opacity: 1;
  transform: translateY(0) rotate(0deg);
}

.contact__card-orb {
  position: absolute;
  top: -120px;
  right: -100px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.22), transparent 65%);
  filter: blur(20px);
  pointer-events: none;
}

[data-theme="light"] .contact__card-orb {
  background: radial-gradient(circle, rgba(168, 85, 247, 0.10), transparent 65%);
}

.contact__card-head {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.6rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--ix-border);
}

.contact__card-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ix-text);
  line-height: 1.1;
}

.contact__card-tld {
  color: var(--ix-muted);
  font-weight: 400;
}

.contact__card-sub {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ix-muted);
  margin-top: 0.3rem;
}

.contact__channels {
  position: relative;
  display: grid;
  gap: 0.9rem;
  margin-bottom: 1.6rem;
}

.contact__channels li {
  display: grid;
  grid-template-columns: 70px 1fr;
  align-items: baseline;
  gap: 0.8rem;
}

.contact__channel-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-muted);
  font-weight: 600;
}

.contact__channel-value {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--ix-text);
  letter-spacing: -0.005em;
  border-bottom: 1px dashed transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
  word-break: break-word;
}

a.contact__channel-value:hover {
  color: var(--ix-sky);
  border-bottom-color: var(--ix-sky);
}

.contact__channel-value--static {
  color: var(--ix-text-soft);
  font-weight: 400;
}

.contact__card-foot {
  position: relative;
  padding-top: 1.2rem;
  border-top: 1px solid var(--ix-border);
}

.contact__status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--ix-text-soft);
}

.contact__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.7);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(0.85); }
}
</style>
