<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support Coverage' },
  { value: '3×', label: 'Faster Time-to-Market' },
]

const strengths = [
  {
    title: 'Cloud-Native by Default',
    description:
      'Every solution is architected for the cloud from day one — serverless, containerized, and infinitely scalable.',
  },
  {
    title: 'AI-Augmented Workflows',
    description:
      'We embed machine learning into core business processes, turning data into decisions and complexity into clarity.',
  },
  {
    title: 'Enterprise .NET Expertise',
    description:
      'Deep experience with the .NET ecosystem means robust, maintainable, and high-performance applications.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Built-in security practices and compliance-ready architectures protect your data and reputation.',
  },
]
</script>

<template>
  <section id="about" ref="sectionRef" class="about" :class="{ revealed: isVisible }">
    <div class="about__inner">
      <div class="about__header">
        <p class="about__eyebrow">Why InnovatioX</p>
        <h2 class="about__title">
          Innovation Meets<br />
          <em>Engineering Excellence</em>
        </h2>
      </div>

      <div class="about__stats">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat"
          :style="{ '--delay': `${i * 0.1}s` }"
        >
          <span class="stat__value">{{ stat.value }}</span>
          <span class="stat__label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="about__strengths">
        <div
          v-for="(item, i) in strengths"
          :key="item.title"
          class="strength"
          :style="{ '--delay': `${0.3 + i * 0.1}s` }"
        >
          <h3 class="strength__title">{{ item.title }}</h3>
          <p class="strength__desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: clamp(4rem, 10vw, 8rem) 1.5rem;
}

.about__inner {
  max-width: 1200px;
  margin: 0 auto;
}

.about__header {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.revealed .about__header {
  opacity: 1;
  transform: translateY(0);
}

.about__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ix-cyan);
  margin-bottom: 0.75rem;
}

.about__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--ix-text);
  line-height: 1.2;
}

.about__title em {
  font-style: italic;
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple), var(--ix-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ─── Stats ─── */
.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.stat {
  text-align: center;
  padding: 1.8rem 1rem;
  background: var(--ix-panel);
  border: 1px solid var(--ix-border);
  border-radius: 14px;
  opacity: 0;
  transform: translateY(24px);
}

.revealed .stat {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.15s + var(--delay)),
    transform 0.7s calc(0.15s + var(--delay));
}

.stat__value {
  display: block;
  font-family: var(--font-tech);
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem;
}

.stat__label {
  font-size: 0.85rem;
  color: var(--ix-muted);
  letter-spacing: 0.02em;
}

/* ─── Strengths ─── */
.about__strengths {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.strength {
  padding: 1.8rem;
  border-left: 2px solid var(--ix-border);
  opacity: 0;
  transform: translateY(24px);
  transition: border-color 0.3s;
}

.revealed .strength {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.7s calc(0.15s + var(--delay)),
    transform 0.7s calc(0.15s + var(--delay)),
    border-color 0.3s;
}

.strength:hover {
  border-left-color: var(--ix-cyan);
}

.strength__title {
  font-family: var(--font-tech);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ix-text);
  margin-bottom: 0.55rem;
}

.strength__desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--ix-muted);
}
</style>
