<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useReveal(sectionRef)
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact" :class="{ revealed: isVisible }">
    <div class="contact__card">
      <div class="contact__glow" aria-hidden="true" />

      <p class="contact__eyebrow">Let's Build Together</p>

      <h2 class="contact__title">Ready to <em>Innovate</em>?</h2>

      <p class="contact__desc">
        Whether you're modernizing legacy systems, building AI-powered products,
        or scaling your cloud infrastructure — we're here to help you lead.
      </p>

      <div class="contact__actions">
        <a href="mailto:hello@innovatiox.com" class="contact__btn contact__btn--primary">
          Get in Touch
        </a>
        <a
          href="https://innovatiox.com"
          class="contact__btn contact__btn--ghost"
          target="_blank"
          rel="noopener"
        >
          Visit InnovatioX.com
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: clamp(4rem, 10vw, 7rem) 1.5rem;
}

.contact__card {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(3rem, 6vw, 5rem) 2rem;
  background: var(--ix-panel);
  border: 1px solid var(--ix-border);
  border-radius: 24px;
  overflow: hidden;
}

.contact__glow {
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(92, 224, 248, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

[data-theme="light"] .contact__glow {
  background: radial-gradient(ellipse, rgba(14, 165, 200, 0.06) 0%, transparent 70%);
}

.contact__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ix-cyan);
  margin-bottom: 0.75rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.revealed .contact__eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 600;
  color: var(--ix-text);
  margin-bottom: 1rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
}

.revealed .contact__title {
  opacity: 1;
  transform: translateY(0);
}

.contact__title em {
  font-style: italic;
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact__desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ix-muted);
  max-width: 520px;
  margin: 0 auto 2.5rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
}

.revealed .contact__desc {
  opacity: 1;
  transform: translateY(0);
}

.contact__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s 0.3s, transform 0.7s 0.3s;
}

.revealed .contact__actions {
  opacity: 1;
  transform: translateY(0);
}

.contact__btn {
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

.contact__btn--primary {
  color: var(--ix-night);
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple));
  box-shadow: 0 4px 24px rgba(92, 224, 248, 0.2);
}

[data-theme="light"] .contact__btn--primary {
  color: #fff;
}

.contact__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(92, 224, 248, 0.35);
}

.contact__btn--ghost {
  color: var(--ix-text);
  background: rgba(140, 224, 255, 0.08);
  border: 1px solid var(--ix-border);
}

.contact__btn--ghost:hover {
  transform: translateY(-2px);
  border-color: var(--color-border-hover);
}
</style>
