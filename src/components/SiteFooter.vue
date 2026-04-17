<script setup lang="ts">
import InnovatioXLogo from './InnovatioXLogo.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          <InnovatioXLogo :size="28" id="footer-logo" />
          <span class="footer__wordmark">
            Innovatio<span class="footer__x">X</span>
          </span>
        </div>
        <p class="footer__tagline">Cloud solutions. AI innovation. .NET excellence.</p>
      </div>

      <nav class="footer__nav">
        <div class="footer__col">
          <h4 class="footer__col-title">Company</h4>
          <a href="#about" class="footer__link">About</a>
          <a href="#services" class="footer__link">Services</a>
          <a href="#technology" class="footer__link">Technology</a>
          <a href="#contact" class="footer__link">Contact</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Connect</h4>
          <a href="https://innovatiox.com" class="footer__link" target="_blank" rel="noopener">
            Website
          </a>
          <a href="mailto:info@innovatiox.com" class="footer__link">Email</a>
        </div>
      </nav>

      <div class="footer__bottom">
        <p class="footer__copy">
          &copy; {{ new Date().getFullYear() }} InnovatioX. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 1.5rem 2rem;
  border-top: 1px solid var(--ix-border);
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
}

.footer__brand {
  display: grid;
  gap: 0.5rem;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer__wordmark {
  font-family: var(--font-tech);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ix-text);
}

.footer__x {
  background: linear-gradient(135deg, #9b6dd7, #e472c4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer__tagline {
  font-size: 0.88rem;
  color: var(--ix-muted);
}

.footer__nav {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.footer__col {
  display: grid;
  gap: 0.5rem;
}

.footer__col-title {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ix-muted);
  margin-bottom: 0.3rem;
}

.footer__link {
  font-size: 0.9rem;
  color: var(--ix-text);
  opacity: 0.7;
  transition: opacity 0.2s, color 0.2s;
}

.footer__link:hover {
  opacity: 1;
  color: var(--ix-cyan);
}

.footer__bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--ix-border);
}

.footer__copy {
  font-size: 0.8rem;
  color: var(--ix-muted);
}
</style>
