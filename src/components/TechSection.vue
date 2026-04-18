<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReveal } from '@/composables/useReveal'

type Category = 'cloud' | 'ai' | 'development' | 'devops' | 'data'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const techStack: { name: string; category: Category }[] = [
  { name: '.NET',       category: 'development' },
  { name: 'C#',         category: 'development' },
  { name: 'Blazor',     category: 'development' },
  { name: 'Vue.js',     category: 'development' },
  { name: 'TypeScript', category: 'development' },
  { name: 'gRPC',       category: 'development' },
  { name: 'Azure',      category: 'cloud' },
  { name: 'AWS',        category: 'cloud' },
  { name: 'Python',     category: 'ai' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'OpenAI',     category: 'ai' },
  { name: 'Docker',     category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Terraform',  category: 'devops' },
  { name: 'SQL Server', category: 'data' },
  { name: 'Cosmos DB',  category: 'data' },
]

// Split into two interleaved rows for the two marquee directions
const rowA = computed(() =>
  techStack.filter((_, i) => i % 2 === 0),
)
const rowB = computed(() =>
  techStack.filter((_, i) => i % 2 === 1),
)
</script>

<template>
  <section
    id="technology"
    ref="sectionRef"
    class="tech"
    :class="{ revealed: isVisible }"
  >
    <div class="ix-container tech__head-wrap">
      <header class="tech__head">
        <span class="tech__eyebrow">
          <span class="tech__eyebrow-bar" />
          Our stack
        </span>
        <h2 class="tech__title">
          Technologies we
          <em class="ix-grad-text">master.</em>
        </h2>
        <p class="tech__lead">
          From cloud platforms to AI frameworks, we choose the right tool
          for the problem — never the trend.
        </p>
      </header>
    </div>

    <!-- Marquees full-bleed -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track marquee__track--ltr">
        <div class="marquee__row">
          <span
            v-for="(tech, i) in [...rowA, ...rowA]"
            :key="`a-${i}`"
            class="pill"
            :class="`pill--${tech.category}`"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="marquee marquee--alt" aria-hidden="true">
      <div class="marquee__track marquee__track--rtl">
        <div class="marquee__row">
          <span
            v-for="(tech, i) in [...rowB, ...rowB]"
            :key="`b-${i}`"
            class="pill"
            :class="`pill--${tech.category}`"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Accessible static list for screen readers -->
    <ul class="visually-hidden">
      <li v-for="tech in techStack" :key="tech.name">{{ tech.name }}</li>
    </ul>
  </section>
</template>

<style scoped>
.tech {
  padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
}

.tech__head-wrap {
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.tech__head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

.tech__eyebrow {
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

.tech__eyebrow-bar {
  width: 28px;
  height: 1px;
  background: currentColor;
}

.revealed .tech__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.tech__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.4vw, 3.2rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--ix-text);
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.tech__title em {
  font-style: italic;
  font-weight: 500;
}

.revealed .tech__title {
  opacity: 1;
  transform: translateY(0);
}

.tech__lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
}

.revealed .tech__lead {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Marquees ─── */
.marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0.6rem 0;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
          mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
}

.marquee--alt {
  margin-top: 1rem;
}

.marquee__track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.marquee__track--ltr {
  animation: marquee-ltr 38s linear infinite;
}

.marquee__track--rtl {
  animation: marquee-rtl 42s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__row {
  display: flex;
  gap: 0.85rem;
  padding-right: 0.85rem;
  flex-shrink: 0;
}

@keyframes marquee-ltr {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes marquee-rtl {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* ─── Pills ─── */
.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.4rem;
  font-family: var(--font-mono);
  font-size: 0.86rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 999px;
  border: 1px solid var(--ix-border-strong);
  background: var(--ix-surface);
  color: var(--ix-text);
  white-space: nowrap;
  flex-shrink: 0;
  transition: border-color 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.pill::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 0.55rem;
  background: currentColor;
  opacity: 0.6;
}

.pill--cloud       { color: var(--ix-sky); }
.pill--ai          { color: var(--ix-purple); }
.pill--development { color: var(--ix-violet); }
.pill--devops      { color: var(--ix-text-soft); }
.pill--data        { color: var(--ix-sky); }

.pill:hover {
  border-color: currentColor;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(56, 189, 248, 0.18);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
</style>
