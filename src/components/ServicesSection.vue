<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const services = [
  {
    icon: 'cloud',
    title: 'Cloud Architecture',
    description:
      'Scalable, secure cloud infrastructure designed for your business. From migration to optimization, we build on AWS, Azure, and beyond.',
  },
  {
    icon: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions that learn and adapt. We integrate AI into your workflows to automate, predict, and drive innovation forward.',
  },
  {
    icon: 'code',
    title: '.NET Development',
    description:
      'Enterprise-grade applications built with modern .NET. APIs, microservices, and full-stack solutions engineered for performance.',
  },
]
</script>

<template>
  <section id="services" ref="sectionRef" class="services" :class="{ revealed: isVisible }">
    <div class="services__inner">
      <p class="services__eyebrow">What We Build</p>
      <h2 class="services__heading">Solutions That <em>Scale</em></h2>

      <div class="services__grid">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="card"
          :style="{ '--delay': `${i * 0.12}s` }"
        >
          <div class="card__icon">
            <!-- Cloud -->
            <svg v-if="service.icon === 'cloud'" viewBox="0 0 32 32" fill="none"
                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 24h16a6 6 0 0 0 .56-11.96A9 9 0 0 0 7 15a5.5 5.5 0 0 0 1 9Z" />
            </svg>
            <!-- AI / neural network -->
            <svg v-else-if="service.icon === 'ai'" viewBox="0 0 32 32" fill="none"
                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <circle cx="16" cy="16" r="4" />
              <circle cx="16" cy="5" r="2" /><circle cx="16" cy="27" r="2" />
              <circle cx="5" cy="16" r="2" /><circle cx="27" cy="16" r="2" />
              <line x1="16" y1="9" x2="16" y2="12" />
              <line x1="16" y1="20" x2="16" y2="25" />
              <line x1="9" y1="16" x2="12" y2="16" />
              <line x1="20" y1="16" x2="25" y2="16" />
              <circle cx="7.5" cy="7.5" r="1.5" />
              <circle cx="24.5" cy="24.5" r="1.5" />
              <line x1="8.5" y1="8.5" x2="13" y2="13" />
              <line x1="19" y1="19" x2="23.5" y2="23.5" />
            </svg>
            <!-- Code brackets -->
            <svg v-else viewBox="0 0 32 32" fill="none"
                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="10,6 3,16 10,26" />
              <polyline points="22,6 29,16 22,26" />
              <line x1="18" y1="6" x2="14" y2="26" />
            </svg>
          </div>

          <h3 class="card__title">{{ service.title }}</h3>
          <p class="card__desc">{{ service.description }}</p>

          <div class="card__shine" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: clamp(4rem, 10vw, 8rem) 1.5rem;
}

.services__inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.services__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ix-cyan);
  margin-bottom: 0.75rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.revealed .services__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.services__heading {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--ix-text);
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.revealed .services__heading {
  opacity: 1;
  transform: translateY(0);
}

.services__heading em {
  font-style: italic;
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ─── Cards ─── */
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  text-align: left;
}

.card {
  position: relative;
  padding: 2.2rem;
  background: var(--ix-panel);
  border: 1px solid var(--ix-border);
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.revealed .card {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.2s + var(--delay)),
    transform 0.7s calc(0.2s + var(--delay)),
    border-color 0.35s,
    box-shadow 0.35s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-hover);
  box-shadow: var(--ix-shadow-strong);
}

.card__shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(140, 224, 255, 0.04), transparent);
  transition: left 0.6s ease;
  pointer-events: none;
}

.card:hover .card__shine {
  left: 100%;
}

.card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(92, 224, 248, 0.08);
  color: var(--ix-cyan);
  margin-bottom: 1.4rem;
}

.card__icon svg {
  width: 26px;
  height: 26px;
}

.card__title {
  font-family: var(--font-tech);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ix-text);
  margin-bottom: 0.75rem;
}

.card__desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--ix-muted);
}
</style>
