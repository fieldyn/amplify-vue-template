<script setup lang="ts">
import { ref } from 'vue'
import InnovatioXLogo from './InnovatioXLogo.vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()
const menuOpen = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="/" class="header__brand" aria-label="InnovatioX home">
        <InnovatioXLogo :size="36" id="header-logo" />
        <span class="header__wordmark">
          Innovatio<span class="header__x">X</span>
        </span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="header__link"
          @click="closeMenu"
        >{{ link.label }}</a>
      </nav>

      <div class="header__actions">
        <button
          class="header__theme-btn"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="toggle"
        >
          <!-- Sun icon (shown in dark mode → click to go light) -->
          <svg v-if="theme === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Moon icon (shown in light mode → click to go dark) -->
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <a href="#contact" class="header__cta">Get Started</a>

        <button
          class="header__burger"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span class="header__burger-line" :class="{ 'header__burger-line--open': menuOpen }" />
          <span class="header__burger-line" :class="{ 'header__burger-line--hide': menuOpen }" />
          <span class="header__burger-line" :class="{ 'header__burger-line--open-rev': menuOpen }" />
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
  padding: 0 clamp(1rem, 4vw, 3rem);
  background: rgba(4, 17, 31, 0.72);
  backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid var(--ix-border);
  transition: background 0.4s ease;
}

[data-theme="light"] .header {
  background: rgba(247, 248, 252, 0.82);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.header__wordmark {
  font-family: var(--font-tech);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ix-text);
}

.header__x {
  background: linear-gradient(135deg, #9b6dd7, #e472c4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header__link {
  font-family: var(--font-tech);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ix-muted);
  transition: color 0.2s;
}

.header__link:hover {
  color: var(--ix-cyan);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header__theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(140, 224, 255, 0.08);
  color: var(--ix-muted);
  transition: color 0.2s, background 0.2s;
}

.header__theme-btn:hover {
  color: var(--ix-cyan);
  background: rgba(140, 224, 255, 0.16);
}

.header__cta {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  font-family: var(--font-tech);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ix-night);
  background: linear-gradient(135deg, var(--ix-cyan), var(--ix-purple));
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

[data-theme="light"] .header__cta {
  color: #fff;
}

.header__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(92, 224, 248, 0.3);
}

/* Hamburger */
.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
}

.header__burger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--ix-muted);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}

.header__burger-line--open {
  transform: rotate(45deg) translate(3px, 4px);
}

.header__burger-line--hide {
  opacity: 0;
}

.header__burger-line--open-rev {
  transform: rotate(-45deg) translate(3px, -4px);
}

@media (max-width: 768px) {
  .header__nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    background: rgba(4, 17, 31, 0.96);
    backdrop-filter: blur(24px);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="light"] .header__nav {
    background: rgba(247, 248, 252, 0.96);
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .header__nav .header__link {
    font-size: 1.2rem;
  }

  .header__cta {
    display: none;
  }

  .header__burger {
    display: flex;
  }
}
</style>
