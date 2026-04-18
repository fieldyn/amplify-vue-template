<script setup lang="ts">
import { ref } from 'vue'
import InnovatioXLogo from './InnovatioXLogo.vue'
import { useTheme } from '@/composables/useTheme'
import { useScrolled } from '@/composables/useScrolled'

const { theme, toggle } = useTheme()
const { scrolled, progress } = useScrolled(32)
const menuOpen = ref(false)

const navLinks = [
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact',    href: '#contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="header"
    :class="{
      'header--scrolled': scrolled,
      'header--menu-open': menuOpen,
    }"
  >
    <!-- scroll progress bar -->
    <div
      class="header__progress"
      :style="{ transform: `scaleX(${progress})` }"
      aria-hidden="true"
    />

    <div class="header__inner">
      <a href="/" class="header__brand" aria-label="InnovatioX home" @click="closeMenu">
        <InnovatioXLogo :size="34" id="header-mark" />
        <span class="header__wordmark">
          innovatio<span class="ix-grad-text">X</span>
        </span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <a
          v-for="(link, i) in navLinks"
          :key="link.href"
          :href="link.href"
          class="header__link"
          :style="{ '--i': i }"
          @click="closeMenu"
        >
          <span class="header__link-num">0{{ i + 1 }}</span>
          <span class="header__link-label">{{ link.label }}</span>
        </a>
      </nav>

      <div class="header__actions">
        <button
          class="header__icon-btn"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="toggle"
        >
          <svg
            v-if="theme === 'dark'"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
          >
            <circle cx="12" cy="12" r="4.5" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
          </svg>
          <svg
            v-else
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <a href="#contact" class="header__cta">
          <span>Start a project</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <button
          class="header__burger"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span class="header__burger-line" :class="{ 'is-x1': menuOpen }" />
          <span class="header__burger-line" :class="{ 'is-hide': menuOpen }" />
          <span class="header__burger-line" :class="{ 'is-x2': menuOpen }" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 clamp(1.25rem, 4vw, 2.5rem);
  background: linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, rgba(6, 9, 15, 0) 100%);
  border-bottom: 1px solid transparent;
  transition:
    background 0.4s ease,
    border-color 0.4s ease,
    backdrop-filter 0.4s ease,
    -webkit-backdrop-filter 0.4s ease;
}

.header--scrolled {
  background: rgba(6, 9, 15, 0.78);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid var(--ix-border);
}

[data-theme="light"] .header--scrolled {
  background: rgba(248, 250, 252, 0.82);
}

/* Progress bar */
.header__progress {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--ix-gradient);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.15s linear;
  opacity: 0;
}

.header--scrolled .header__progress {
  opacity: 1;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 72px;
  transition: height 0.3s ease;
}

.header--scrolled .header__inner {
  height: 60px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-shrink: 0;
}

.header__wordmark {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ix-text);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 2.2rem;
}

.header__link {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ix-text-soft);
  padding: 0.4rem 0;
  transition: color 0.2s ease;
}

.header__link-num {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--ix-muted);
  opacity: 0.7;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.header__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: var(--ix-gradient);
  transition: width 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

.header__link:hover {
  color: var(--ix-text);
}

.header__link:hover .header__link-num {
  color: var(--ix-sky);
  opacity: 1;
}

.header__link:hover::after {
  width: 100%;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.header__icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(148, 163, 184, 0.08);
  color: var(--ix-text-soft);
  border: 1px solid var(--ix-border);
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}

.header__icon-btn:hover {
  color: var(--ix-sky);
  background: rgba(56, 189, 248, 0.08);
  border-color: var(--ix-border-strong);
}

.header__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #06090f;
  background: var(--ix-gradient);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(56, 189, 248, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

[data-theme="light"] .header__cta {
  color: #ffffff;
}

.header__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(168, 85, 247, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.header__cta svg { transition: transform 0.2s ease; }
.header__cta:hover svg { transform: translateX(2px); }

/* Hamburger */
.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: 1px solid var(--ix-border);
  border-radius: 10px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
}

.header__burger-line {
  display: block;
  width: 18px;
  height: 1.6px;
  background: var(--ix-text-soft);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}

.header__burger-line.is-x1 {
  transform: translateY(6.6px) rotate(45deg);
}

.header__burger-line.is-hide {
  opacity: 0;
}

.header__burger-line.is-x2 {
  transform: translateY(-6.6px) rotate(-45deg);
}

@media (max-width: 880px) {
  .header__nav {
    position: fixed;
    inset: 72px 0 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    background: rgba(6, 9, 15, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    padding: 2rem clamp(1.25rem, 4vw, 2.5rem);
  }

  [data-theme="light"] .header__nav {
    background: rgba(248, 250, 252, 0.97);
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .header__nav .header__link {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: -0.01em;
    color: var(--ix-text);
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--ix-border);
    gap: 0.9rem;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
  }

  .header__nav--open .header__link {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.5s calc(0.15s + var(--i, 0) * 0.08s),
      transform 0.5s calc(0.15s + var(--i, 0) * 0.08s);
  }

  .header__nav .header__link-num {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--ix-muted);
  }

  .header__cta {
    display: none;
  }

  .header__burger {
    display: flex;
  }
}
</style>
