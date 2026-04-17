<script setup lang="ts">
import { computed } from 'vue'

import type { TodoItem } from '@/composables/useTodos'

import BrandMark from './BrandMark.vue'

interface Props {
  isConnected: boolean
  previewItems: TodoItem[]
  todoCount: number
}

const props = defineProps<Props>()

const connectionLabel = computed(() => (props.isConnected ? 'Amplify live sync' : 'Preview mode'))
const connectionTone = computed(() => (props.isConnected ? 'connected' : 'preview'))
const momentumLabel = computed(() => {
  if (props.todoCount === 0) {
    return 'Fresh canvas'
  }

  if (props.todoCount < 4) {
    return 'Focused orbit'
  }

  return 'Signal-rich queue'
})

const previewCards = computed(() =>
  props.previewItems.length > 0
    ? props.previewItems
    : [
        { id: 'draft-01', content: 'Shape the launch narrative before the day gets noisy.' },
        { id: 'draft-02', content: 'Review the moving pieces that actually deserve your attention.' },
        { id: 'draft-03', content: 'Keep a visible next step instead of a hidden mental stack.' },
      ],
)
</script>

<template>
  <section class="hero">
    <div class="hero__glow hero__glow--left"></div>
    <div class="hero__glow hero__glow--right"></div>

    <div class="hero__topbar">
      <BrandMark />

      <span
        class="hero__status"
        :class="`hero__status--${connectionTone}`">
        {{ connectionLabel }}
      </span>
    </div>

    <div class="hero__grid">
      <div class="hero__copy">
        <p class="hero__eyebrow">Editorial clarity for a live todo stream</p>

        <h1 class="hero__title">
          Make the
          <span class="hero__title-accent">next move</span>
          impossible to miss.
        </h1>

        <p class="hero__summary">
          A cinematic landing page for your daily queue: sharper typography, a custom luminous brand
          mark, and a calmer workspace for everything that matters next.
        </p>

        <div class="hero__metrics">
          <article class="hero-metric">
            <span class="hero-metric__label">Open items</span>
            <strong class="hero-metric__value">{{ props.todoCount }}</strong>
          </article>

          <article class="hero-metric">
            <span class="hero-metric__label">Queue mood</span>
            <strong class="hero-metric__value hero-metric__value--small">{{ momentumLabel }}</strong>
          </article>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__orbit hero__orbit--outer"></div>
        <div class="hero__orbit hero__orbit--inner"></div>
        <div class="hero__lens"></div>

        <article class="hero-preview">
          <div class="hero-preview__header">
            <span class="hero-preview__eyebrow">Focus queue</span>
            <span class="hero-preview__meta">{{ props.todoCount }} visible</span>
          </div>

          <ul class="hero-preview__list">
            <li
              v-for="(item, index) in previewCards"
              :key="item.id"
              class="hero-preview__item">
              <span class="hero-preview__index">{{ `0${index + 1}` }}</span>
              <span class="hero-preview__text">{{ item.content }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 2rem;
  padding: clamp(1.6rem, 3vw, 2rem);
  border: 1px solid rgba(140, 224, 255, 0.16);
  border-radius: 36px;
  background:
    linear-gradient(180deg, rgba(13, 30, 51, 0.92), rgba(4, 17, 31, 0.96)),
    rgba(4, 17, 31, 0.96);
  box-shadow: var(--ix-shadow-strong);
  isolation: isolate;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.045);
  border-radius: 28px;
  pointer-events: none;
}

.hero__glow {
  position: absolute;
  z-index: -1;
  width: 26rem;
  height: 26rem;
  border-radius: 999px;
  filter: blur(28px);
  opacity: 0.42;
}

.hero__glow--left {
  top: -8rem;
  left: -5rem;
  background: rgba(130, 240, 210, 0.22);
}

.hero__glow--right {
  right: -4rem;
  bottom: -8rem;
  background: rgba(255, 125, 103, 0.17);
}

.hero__topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-family: var(--font-tech);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
}

.hero__status::before {
  content: '';
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 999px;
}

.hero__status--connected {
  border: 1px solid rgba(130, 240, 210, 0.22);
  background: rgba(130, 240, 210, 0.08);
  color: var(--ix-mint);
}

.hero__status--connected::before {
  background: var(--ix-mint);
  box-shadow: 0 0 18px rgba(130, 240, 210, 0.72);
}

.hero__status--preview {
  border: 1px solid rgba(255, 201, 133, 0.2);
  background: rgba(255, 201, 133, 0.08);
  color: var(--ix-sand);
}

.hero__status--preview::before {
  background: var(--ix-sand);
  box-shadow: 0 0 18px rgba(255, 201, 133, 0.62);
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 2rem;
  align-items: center;
}

.hero__copy {
  display: grid;
  gap: 1.2rem;
}

.hero__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.76rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-cyan);
}

.hero__title {
  max-width: 8ch;
  font-family: var(--font-display);
  font-size: clamp(3.9rem, 11vw, 7.1rem);
  line-height: 0.88;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

.hero__title-accent {
  display: inline-block;
  color: var(--ix-sand);
}

.hero__summary {
  max-width: 37rem;
  color: rgba(231, 238, 243, 0.82);
  font-size: clamp(1.08rem, 1.6vw, 1.22rem);
}

.hero__metrics {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-metric {
  min-width: 11rem;
  padding: 1rem 1.15rem;
  border: 1px solid rgba(140, 224, 255, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

.hero-metric__label {
  display: block;
  margin-bottom: 0.45rem;
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ix-muted);
}

.hero-metric__value {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem;
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero-metric__value--small {
  font-size: 1.4rem;
}

.hero__visual {
  position: relative;
  min-height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__orbit {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(140, 224, 255, 0.12);
}

.hero__orbit--outer {
  inset: 0.6rem;
  animation: hero-spin 28s linear infinite;
}

.hero__orbit--inner {
  inset: 12%;
  border-style: dashed;
  animation: hero-spin-reverse 16s linear infinite;
}

.hero__lens {
  position: absolute;
  width: 18rem;
  height: 18rem;
  border-radius: 999px;
  background:
    radial-gradient(circle at 50% 50%, rgba(130, 240, 210, 0.28) 0%, rgba(140, 224, 255, 0.16) 34%, rgba(4, 17, 31, 0) 74%);
  filter: blur(6px);
}

.hero-preview {
  position: relative;
  width: min(100%, 27rem);
  padding: 1.35rem;
  border: 1px solid rgba(255, 201, 133, 0.14);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(16, 36, 61, 0.88), rgba(6, 15, 27, 0.96)),
    rgba(6, 15, 27, 0.96);
  box-shadow: 0 25px 80px rgba(2, 8, 15, 0.5);
  backdrop-filter: blur(14px);
}

.hero-preview__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.hero-preview__eyebrow,
.hero-preview__meta {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-preview__eyebrow {
  color: var(--ix-sand);
}

.hero-preview__meta {
  color: var(--ix-muted);
}

.hero-preview__list {
  display: grid;
  gap: 0.7rem;
  list-style: none;
}

.hero-preview__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  padding: 0.9rem 0.95rem;
  border-radius: 20px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.hero-preview__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 999px;
  background: rgba(130, 240, 210, 0.08);
  color: var(--ix-cyan);
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

.hero-preview__text {
  color: rgba(245, 242, 234, 0.88);
  font-size: 0.98rem;
}

@keyframes hero-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes hero-spin-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

@media (max-width: 920px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__title {
    max-width: 10ch;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 1.25rem;
    border-radius: 28px;
  }

  .hero__visual {
    min-height: 21rem;
  }
}
</style>
