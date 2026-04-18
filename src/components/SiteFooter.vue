<script setup lang="ts">
import InnovatioXLogo from './InnovatioXLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <!-- Watermark X -->
    <div class="footer__watermark" aria-hidden="true">
      <InnovatioXLogo :size="380" id="footer-watermark" background="transparent" />
    </div>

    <div class="ix-container footer__inner">
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <InnovatioXLogo :size="40" id="footer-mark" />
          <span class="footer__wordmark">
            innovatio<span class="ix-grad-text">X</span><span class="footer__tld">.com</span>
          </span>
        </a>
        <p class="footer__tagline">
          A studio building cloud, AI, and modern .NET systems
          for teams who care about craft.
        </p>
        <div class="footer__badge">
          <span class="footer__badge-dot" />
          Available for Q2 engagements
        </div>
      </div>

      <nav class="footer__nav">
        <div class="footer__col">
          <h4 class="footer__col-title">Sitemap</h4>
          <a href="#services"   class="footer__link">Services</a>
          <a href="#about"      class="footer__link">About</a>
          <a href="#technology" class="footer__link">Technology</a>
          <a href="#contact"    class="footer__link">Contact</a>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Capabilities</h4>
          <span class="footer__link footer__link--static">Cloud architecture</span>
          <span class="footer__link footer__link--static">AI &amp; ML</span>
          <span class="footer__link footer__link--static">.NET engineering</span>
          <span class="footer__link footer__link--static">Platform &amp; DevOps</span>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Connect</h4>
          <a href="mailto:info@innovatiox.com" class="footer__link">info@innovatiox.com</a>
          <a href="https://innovatiox.com" target="_blank" rel="noopener" class="footer__link">
            innovatiox.com
          </a>
        </div>
      </nav>
    </div>

    <div class="ix-container footer__bottom">
      <p class="footer__copy">
        © {{ year }} InnovatioX · All rights reserved
      </p>
      <p class="footer__location">
        Built with care · Cloud · AI · .NET
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: clamp(4rem, 8vw, 6rem) 0 2rem;
  border-top: 1px solid var(--ix-border);
  overflow: hidden;
}

.footer__watermark {
  position: absolute;
  left: -120px;
  top: -120px;
  opacity: 0.04;
  pointer-events: none;
  transform: rotate(-8deg);
}

[data-theme="light"] .footer__watermark {
  opacity: 0.05;
}

.footer__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.6fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  margin-bottom: 3.5rem;
}

@media (max-width: 880px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* ─── Brand column ─── */
.footer__brand {
  display: grid;
  gap: 1.2rem;
  align-content: start;
  max-width: 360px;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.footer__wordmark {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ix-text);
}

.footer__tld {
  color: var(--ix-muted);
  font-weight: 400;
}

.footer__tagline {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--ix-text-soft);
}

.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ix-text-soft);
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.22);
  border-radius: 999px;
  width: max-content;
}

.footer__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.7);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}

/* ─── Nav columns ─── */
.footer__nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 600px) {
  .footer__nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 1.5rem;
  }
}

.footer__col {
  display: grid;
  gap: 0.65rem;
  align-content: start;
}

.footer__col-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-muted);
  margin-bottom: 0.3rem;
}

.footer__link {
  font-size: 0.92rem;
  color: var(--ix-text-soft);
  transition: color 0.2s, transform 0.2s;
  width: max-content;
}

a.footer__link {
  position: relative;
}

a.footer__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: var(--ix-gradient);
  transition: width 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

a.footer__link:hover {
  color: var(--ix-text);
}

a.footer__link:hover::after {
  width: 100%;
}

.footer__link--static {
  cursor: default;
}

/* ─── Bottom ─── */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--ix-border);
}

.footer__copy,
.footer__location {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  color: var(--ix-muted);
}

.footer__location {
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
</style>
