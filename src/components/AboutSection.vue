<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReveal } from '@/composables/useReveal'
import { useCountUp } from '@/composables/useCountUp'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const { value: projects } = useCountUp(50, isVisible)
const { value: uptime } = useCountUp(99.9, isVisible, { decimals: 1 })
const { value: speedup } = useCountUp(3, isVisible)

const stats = computed(() => [
  { value: `${Math.round(projects.value)}+`, label: 'Projects delivered' },
  { value: `${uptime.value.toFixed(1)}%`, label: 'Uptime SLA' },
  { value: '24/7', label: 'Support coverage' },
  { value: `${Math.round(speedup.value)}×`, label: 'Faster time-to-market' },
])

const strengths = [
  {
    num: '01',
    title: 'Cloud-native by default',
    description:
      'Every system is designed for the cloud from day one — serverless, containerized, observable, and infinitely scalable.',
  },
  {
    num: '02',
    title: 'AI-augmented workflows',
    description:
      'We embed machine learning into core business processes, turning data into decisions and complexity into clarity.',
  },
  {
    num: '03',
    title: 'Enterprise .NET expertise',
    description:
      'Deep experience across the .NET ecosystem means robust, maintainable, high-performance applications backed by craft.',
  },
  {
    num: '04',
    title: 'Security & compliance',
    description:
      'Compliance-ready architectures and security practices baked into every layer protect your data, users, and reputation.',
  },
]
</script>

<template>
  <section id="about" ref="sectionRef" class="about" :class="{ revealed: isVisible }">
    <div class="ix-container">
      <header class="about__head">
        <span class="about__eyebrow">
          <span class="about__eyebrow-bar" />
          Why InnovatioX
        </span>
        <h2 class="about__title">
          A small studio with the
          <em class="ix-grad-text">discipline</em>
          of a platform team.
        </h2>
        <p class="about__lead">
          We pair the focus of a boutique consultancy with the rigor of large-scale
          engineering — so every line of code, every Pulumi diff, every model
          deployment is thought through.
        </p>
      </header>

      <div class="about__stats">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat"
          :style="{ '--delay': `${i * 0.08}s` }"
        >
          <span class="stat__value">{{ stat.value }}</span>
          <span class="stat__label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="about__strengths">
        <article
          v-for="(item, i) in strengths"
          :key="item.num"
          class="strength"
          :style="{ '--delay': `${0.2 + i * 0.08}s` }"
        >
          <span class="strength__num">{{ item.num }}</span>
          <h3 class="strength__title">{{ item.title }}</h3>
          <p class="strength__desc">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: clamp(5rem, 10vw, 8rem) 0;
  position: relative;
}

/* ─── Header ─── */
.about__head {
  max-width: 760px;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.about__eyebrow {
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

.about__eyebrow-bar {
  width: 28px;
  height: 1px;
  background: currentColor;
}

.revealed .about__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.about__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.4vw, 3.2rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--ix-text);
  margin-bottom: 1.4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.about__title em {
  font-style: italic;
  font-weight: 500;
}

.revealed .about__title {
  opacity: 1;
  transform: translateY(0);
}

.about__lead {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
  max-width: 600px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
}

.revealed .about__lead {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Stats ─── */
.about__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-bottom: clamp(4rem, 8vw, 6rem);
  border-top: 1px solid var(--ix-border-strong);
  border-bottom: 1px solid var(--ix-border-strong);
}

.stat {
  position: relative;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  opacity: 0;
  transform: translateY(20px);
}

.stat:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 18%;
  bottom: 18%;
  width: 1px;
  background: var(--ix-border-strong);
}

.revealed .stat {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.25s + var(--delay)) ease,
    transform 0.7s calc(0.25s + var(--delay)) ease;
}

.stat__value {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  background: var(--ix-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-feature-settings: 'tnum' 1;
  font-variant-numeric: tabular-nums;
}

.stat__label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ix-muted);
}

@media (max-width: 720px) {
  .about__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .stat:nth-child(2)::after { display: none; }
  .stat:nth-child(1),
  .stat:nth-child(2) {
    border-bottom: 1px solid var(--ix-border-strong);
  }
}

/* ─── Strengths ─── */
.about__strengths {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.strength {
  position: relative;
  padding: 2rem 2rem 2.2rem;
  background: var(--ix-surface);
  border: 1px solid var(--ix-border);
  border-radius: 18px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
}

.revealed .strength {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.15s + var(--delay)) ease,
    transform 0.7s calc(0.15s + var(--delay)) ease,
    border-color 0.3s ease;
}

.strength::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--ix-gradient);
  transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.strength:hover {
  border-color: var(--ix-border-strong);
  transform: translateY(-3px);
}

.strength:hover::before {
  width: 100%;
}

.strength__num {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  color: var(--ix-muted);
  margin-bottom: 0.9rem;
  font-feature-settings: 'tnum' 1;
}

.strength__title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ix-text);
  margin-bottom: 0.6rem;
  line-height: 1.2;
}

.strength__desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
}

@media (max-width: 720px) {
  .about__strengths {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
