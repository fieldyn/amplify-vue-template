<template>
  <div
    class="brand-mark"
    aria-label="InnovatioX brand">
    <svg
      class="brand-mark__glyph"
      viewBox="0 0 164 164"
      role="img"
      aria-hidden="true">
      <defs>
        <linearGradient
          id="brand-mark-frame"
          x1="26"
          y1="18"
          x2="138"
          y2="150"
          gradientUnits="userSpaceOnUse">
          <stop
            offset="0%"
            stop-color="#82f0d2" />
          <stop
            offset="58%"
            stop-color="#8ce0ff" />
          <stop
            offset="100%"
            stop-color="#ffc985" />
        </linearGradient>

        <radialGradient
          id="brand-mark-core"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(82 82) rotate(90) scale(58)">
          <stop
            offset="0%"
            stop-color="#fff3dc" />
          <stop
            offset="52%"
            stop-color="#8ce0ff" />
          <stop
            offset="100%"
            stop-color="#0c1d31" />
        </radialGradient>

        <filter
          id="brand-mark-glow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%">
          <feGaussianBlur
            stdDeviation="6"
            result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="18"
        y="18"
        width="128"
        height="128"
        rx="34"
        class="brand-mark__backplate" />

      <rect
        x="18"
        y="18"
        width="128"
        height="128"
        rx="34"
        class="brand-mark__frame" />

      <path
        class="brand-mark__diamond"
        d="M82 34L126 82L82 130L38 82Z" />

      <circle
        class="brand-mark__orbit"
        cx="82"
        cy="82"
        r="42" />

      <path
        class="brand-mark__slash"
        d="M55 114L104 50" />

      <circle
        class="brand-mark__core"
        cx="82"
        cy="82"
        r="23"
        filter="url(#brand-mark-glow)" />

      <circle
        class="brand-mark__spark"
        cx="112"
        cy="58"
        r="7" />
    </svg>

    <div class="brand-mark__copy">
      <span class="brand-mark__eyebrow">Signal Board</span>
      <span class="brand-mark__name">InnovatioX</span>
    </div>
  </div>
</template>

<style scoped>
.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.brand-mark__glyph {
  width: 4.5rem;
  height: 4.5rem;
  flex: none;
}

.brand-mark__copy {
  display: grid;
  gap: 0.15rem;
}

.brand-mark__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--ix-cyan);
}

.brand-mark__name {
  font-family: var(--font-tech);
  font-size: 1.22rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ix-text);
}

.brand-mark__backplate {
  fill: rgba(5, 16, 30, 0.78);
}

.brand-mark__frame {
  fill: none;
  stroke: rgba(140, 224, 255, 0.42);
  stroke-width: 1.3;
}

.brand-mark__diamond {
  fill: none;
  stroke: url(#brand-mark-frame);
  stroke-width: 1.6;
  opacity: 0.92;
}

.brand-mark__orbit {
  fill: none;
  stroke: rgba(130, 240, 210, 0.44);
  stroke-width: 1.1;
  stroke-dasharray: 11 9;
  transform-origin: center;
  animation: brand-mark-spin 18s linear infinite;
}

.brand-mark__slash {
  fill: none;
  stroke: #fff3dc;
  stroke-width: 3.2;
  stroke-linecap: round;
}

.brand-mark__core {
  fill: url(#brand-mark-core);
}

.brand-mark__spark {
  fill: var(--ix-coral);
  animation: brand-mark-pulse 3.2s ease-in-out infinite;
}

@keyframes brand-mark-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes brand-mark-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.22);
    opacity: 0.7;
  }
}
</style>
