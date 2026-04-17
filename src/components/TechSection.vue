<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)

const techStack = [
  { name: '.NET', category: 'development' },
  { name: 'C#', category: 'development' },
  { name: 'Blazor', category: 'development' },
  { name: 'Azure', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Python', category: 'ai' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'OpenAI', category: 'ai' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'SQL Server', category: 'data' },
  { name: 'Cosmos DB', category: 'data' },
  { name: 'Vue.js', category: 'development' },
  { name: 'TypeScript', category: 'development' },
  { name: 'gRPC', category: 'development' },
]
</script>

<template>
  <section id="technology" ref="sectionRef" class="tech" :class="{ revealed: isVisible }">
    <div class="tech__inner">
      <p class="tech__eyebrow">Our Stack</p>
      <h2 class="tech__title">Technologies We <em>Master</em></h2>
      <p class="tech__desc">
        From cloud platforms to AI frameworks, we choose the best tools
        for every challenge.
      </p>

      <div class="tech__grid">
        <span
          v-for="(tech, i) in techStack"
          :key="tech.name"
          class="pill"
          :class="`pill--${tech.category}`"
          :style="{ '--delay': `${i * 0.04}s` }"
        >{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  padding: clamp(4rem, 10vw, 7rem) 1.5rem;
}

.tech__inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.tech__eyebrow {
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

.revealed .tech__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.tech__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--ix-text);
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.revealed .tech__title {
  opacity: 1;
  transform: translateY(0);
}

.tech__title em {
  font-style: italic;
  background: linear-gradient(135deg, var(--ix-purple), var(--ix-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech__desc {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--ix-muted);
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.15s, transform 0.7s 0.15s;
}

.revealed .tech__desc {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Tech pills ─── */
.tech__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1.2rem;
  font-family: var(--font-tech);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  border-radius: 100px;
  border: 1px solid var(--ix-border);
  background: var(--ix-panel);
  color: var(--ix-text);
  opacity: 0;
  transform: translateY(16px) scale(0.95);
  transition: border-color 0.25s, box-shadow 0.25s, color 0.25s, transform 0.25s;
}

.revealed .pill {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition:
    opacity 0.5s calc(0.25s + var(--delay)),
    transform 0.5s calc(0.25s + var(--delay)),
    border-color 0.25s,
    box-shadow 0.25s,
    color 0.25s;
}

.pill:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: var(--ix-shadow-soft);
}

.pill--cloud:hover {
  border-color: var(--ix-cyan);
  color: var(--ix-cyan);
}

.pill--ai:hover {
  border-color: var(--ix-purple);
  color: var(--ix-purple);
}

.pill--development:hover {
  border-color: var(--ix-pink);
  color: var(--ix-pink);
}

.pill--devops:hover {
  border-color: var(--ix-coral);
  color: var(--ix-coral);
}

.pill--data:hover {
  border-color: var(--ix-mint);
  color: var(--ix-mint);
}
</style>
