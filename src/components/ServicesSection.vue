<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const services = [
  {
    num: '01',
    icon: 'cloud',
    title: 'Cloud',
    titleEm: 'architecture.',
    description:
      'Scalable, secure infrastructure on AWS, Azure, and beyond. Migration, optimization, and serverless platforms designed to grow with your business.',
    bullets: ['Serverless · Containers', 'Multi-region resilience', 'Cost engineering'],
    featured: true,
  },
  {
    num: '02',
    icon: 'ai',
    title: 'AI &',
    titleEm: 'machine learning.',
    description:
      'Intelligent solutions that learn and adapt. From foundation models to bespoke pipelines that automate, predict, and decide.',
    bullets: [],
    featured: false,
  },
  {
    num: '03',
    icon: 'code',
    title: 'Modern',
    titleEm: '.NET craft.',
    description:
      'Enterprise-grade APIs, microservices, and full-stack apps engineered with the latest .NET — robust, observable, and built to last.',
    bullets: [],
    featured: false,
  },
]
</script>

<template>
  <section id="services" ref="sectionRef" class="services" :class="{ revealed: isVisible }">
    <div class="ix-container">
      <header class="services__head">
        <div>
          <span class="services__eyebrow">
            <span class="services__eyebrow-bar" />
            What we build
          </span>
          <h2 class="services__title">
            Solutions engineered for
            <em class="ix-grad-text">scale</em>
            and signal.
          </h2>
        </div>

        <p class="services__intro">
          Three disciplines, one practice. We work end-to-end so each layer
          informs the next — from infrastructure to interface, from data to decision.
        </p>
      </header>

      <div class="services__grid">
        <article
          v-for="(svc, i) in services"
          :key="svc.num"
          class="card"
          :class="{ 'card--featured': svc.featured }"
          :style="{ '--delay': `${i * 0.12}s` }"
        >
          <div class="card__top">
            <span class="card__num">{{ svc.num }}</span>
            <span class="card__icon-wrap">
              <svg
                v-if="svc.icon === 'cloud'"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 24h16a6 6 0 0 0 .56-11.96A9 9 0 0 0 7 15a5.5 5.5 0 0 0 1 9Z" />
                <line x1="13" y1="20" x2="13" y2="26" />
                <line x1="19" y1="20" x2="19" y2="26" />
                <line x1="16" y1="22" x2="16" y2="28" />
              </svg>
              <svg
                v-else-if="svc.icon === 'ai'"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              >
                <circle cx="16" cy="16" r="3" />
                <circle cx="16" cy="5" r="2" />
                <circle cx="16" cy="27" r="2" />
                <circle cx="5" cy="16" r="2" />
                <circle cx="27" cy="16" r="2" />
                <line x1="16" y1="9" x2="16" y2="12" />
                <line x1="16" y1="20" x2="16" y2="25" />
                <line x1="9" y1="16" x2="12" y2="16" />
                <line x1="20" y1="16" x2="25" y2="16" />
                <circle cx="7" cy="7" r="1.4" />
                <circle cx="25" cy="7" r="1.4" />
                <circle cx="7" cy="25" r="1.4" />
                <circle cx="25" cy="25" r="1.4" />
                <line x1="8" y1="8" x2="13" y2="13" />
                <line x1="24" y1="8" x2="19" y2="13" />
                <line x1="8" y1="24" x2="13" y2="19" />
                <line x1="24" y1="24" x2="19" y2="19" />
              </svg>
              <svg
                v-else
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="10,6 3,16 10,26" />
                <polyline points="22,6 29,16 22,26" />
                <line x1="18" y1="6" x2="14" y2="26" />
              </svg>
            </span>
          </div>

          <h3 class="card__title">
            {{ svc.title }} <em>{{ svc.titleEm }}</em>
          </h3>
          <p class="card__desc">{{ svc.description }}</p>

          <ul v-if="svc.featured && svc.bullets.length" class="card__bullets">
            <li v-for="b in svc.bullets" :key="b">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {{ b }}
            </li>
          </ul>

          <a href="#contact" class="card__link">
            Discuss your build
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <div class="card__halo" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: clamp(5rem, 10vw, 8rem) 0;
  position: relative;
}

/* ─── Section header ─── */
.services__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
  align-items: end;
}

@media (max-width: 880px) {
  .services__head {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.services__eyebrow {
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

.services__eyebrow-bar {
  width: 28px;
  height: 1px;
  background: currentColor;
}

.revealed .services__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.services__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.4vw, 3.2rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--ix-text);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.revealed .services__title {
  opacity: 1;
  transform: translateY(0);
}

.services__title em {
  font-style: italic;
  font-weight: 500;
}

.services__intro {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
  max-width: 460px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
}

.revealed .services__intro {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Bento grid ─── */
.services__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto auto;
  gap: 1.25rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 2rem;
  background: var(--ix-surface);
  border: 1px solid var(--ix-border);
  border-radius: 22px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
}

.revealed .card {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.25s + var(--delay)) ease,
    transform 0.7s calc(0.25s + var(--delay)) cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--ix-border-strong);
  box-shadow: var(--ix-shadow-strong);
}

.card--featured {
  grid-column: 1 / -1;
  grid-row: 1;
  padding: 2.4rem;
  background:
    radial-gradient(800px 360px at 90% 0%, rgba(56, 189, 248, 0.07), transparent 70%),
    var(--ix-surface);
}

@media (min-width: 880px) {
  .card--featured {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
  }
}

.card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.card__num {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ix-muted);
}

.card__icon-wrap {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.08);
  color: var(--ix-sky);
  border: 1px solid rgba(56, 189, 248, 0.18);
}

.card__icon-wrap svg {
  width: 22px;
  height: 22px;
}

.card--featured .card__icon-wrap {
  width: 56px;
  height: 56px;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.16), rgba(168, 85, 247, 0.16));
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.card--featured .card__icon-wrap svg {
  width: 28px;
  height: 28px;
}

.card__title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.4vw, 1.85rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--ix-text);
}

.card--featured .card__title {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.card__title em {
  font-style: italic;
  background: var(--ix-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card__desc {
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
  max-width: 52ch;
}

.card__bullets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
  padding-top: 0.4rem;
  margin-top: auto;
}

.card__bullets li {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--ix-text-soft);
}

.card__bullets svg {
  color: var(--ix-sky);
  flex-shrink: 0;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ix-text);
  align-self: flex-start;
  transition: color 0.25s ease;
}

.card__link svg {
  transition: transform 0.25s ease;
}

.card:hover .card__link {
  color: var(--ix-sky);
}

.card:hover .card__link svg {
  transform: translateX(4px);
}

/* gradient halo on hover */
.card__halo {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.5), rgba(168, 85, 247, 0.5));
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card:hover .card__halo {
  opacity: 1;
}

@media (max-width: 880px) {
  .services__grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .card--featured {
    grid-column: 1;
    grid-row: auto;
  }
}
</style>
