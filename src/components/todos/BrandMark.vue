<template>
  <div
    class="brand-mark"
    aria-label="InnovatioX brand">
    <svg
      class="brand-mark__glyph"
      viewBox="0 0 200 160"
      fill="none"
      role="img"
      aria-hidden="true">
      <defs>
        <!-- Main gradient: cyan → purple → pink -->
        <linearGradient id="ix-main" x1="20" y1="10" x2="180" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#5ce0f8" />
          <stop offset="45%" stop-color="#9b6dd7" />
          <stop offset="100%" stop-color="#e472c4" />
        </linearGradient>

        <!-- Cloud highlight gradient -->
        <linearGradient id="ix-cloud" x1="60" y1="10" x2="140" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#a8f0ff" />
          <stop offset="50%" stop-color="#5ce0f8" />
          <stop offset="100%" stop-color="#7bb8e8" />
        </linearGradient>

        <!-- Circuit traces gradient -->
        <linearGradient id="ix-circuit" x1="10" y1="50" x2="70" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#5ce0f8" />
          <stop offset="100%" stop-color="#b06ae0" />
        </linearGradient>

        <!-- Loop/infinity gradient (bottom-right) -->
        <linearGradient id="ix-loop" x1="120" y1="70" x2="175" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#b06ae0" />
          <stop offset="60%" stop-color="#e472c4" />
          <stop offset="100%" stop-color="#f5a0d0" />
        </linearGradient>

        <!-- Glow filter for circuit nodes -->
        <filter id="ix-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Soft glow for the whole mark -->
        <filter id="ix-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Ambient glow underneath -->
      <ellipse
        cx="100" cy="140"
        rx="55" ry="6"
        class="brand-mark__reflection" />

      <!-- Cloud arc (top of the X) -->
      <path
        d="M72 28 C72 12, 92 4, 108 12 C120 4, 144 8, 148 28 C156 32, 158 44, 148 52 L108 52"
        stroke="url(#ix-cloud)"
        stroke-width="5.5"
        stroke-linecap="round"
        fill="none"
        opacity="0.85" />

      <!-- Inner cloud highlight -->
      <path
        d="M82 32 C82 20, 98 14, 110 20 C118 14, 136 16, 140 32"
        stroke="#a8f0ff"
        stroke-width="2.5"
        stroke-linecap="round"
        fill="none"
        opacity="0.45" />

      <!-- X left stroke (top-left to bottom-right) -->
      <path
        d="M58 42 L130 122"
        stroke="url(#ix-main)"
        stroke-width="11"
        stroke-linecap="round" />

      <!-- X right stroke (top-right to bottom-left) -->
      <path
        d="M142 42 L70 122"
        stroke="url(#ix-main)"
        stroke-width="11"
        stroke-linecap="round" />

      <!-- Ribbon overlap highlight (center cross) -->
      <path
        d="M90 72 L110 92"
        stroke="rgba(255,255,255,0.3)"
        stroke-width="7"
        stroke-linecap="round" />

      <!-- Loop/infinity curl (bottom-right) -->
      <path
        d="M130 122 C144 130, 168 128, 172 108 C176 88, 156 78, 140 86 C132 90, 128 100, 132 110"
        stroke="url(#ix-loop)"
        stroke-width="7"
        stroke-linecap="round"
        fill="none" />

      <!-- Inner loop highlight -->
      <path
        d="M138 118 C148 124, 162 120, 164 108 C166 96, 154 88, 146 92"
        stroke="rgba(255,180,220,0.4)"
        stroke-width="3"
        stroke-linecap="round"
        fill="none" />

      <!-- Circuit traces (left side) -->
      <g class="brand-mark__circuits">
        <path
          d="M56 58 L32 58 L24 66"
          stroke="url(#ix-circuit)"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none" />
        <path
          d="M52 68 L28 68 L16 80"
          stroke="url(#ix-circuit)"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none" />
        <path
          d="M48 78 L24 78 L18 86"
          stroke="url(#ix-circuit)"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none" />
        <path
          d="M44 88 L30 88 L22 96"
          stroke="url(#ix-circuit)"
          stroke-width="2.4"
          stroke-linecap="round"
          fill="none" />

        <!-- Glowing circuit nodes -->
        <circle cx="24" cy="66" r="3.5" fill="#5ce0f8" filter="url(#ix-node-glow)" class="brand-mark__node brand-mark__node--1" />
        <circle cx="16" cy="80" r="3.5" fill="#7bc0f0" filter="url(#ix-node-glow)" class="brand-mark__node brand-mark__node--2" />
        <circle cx="18" cy="86" r="2.8" fill="#a080e0" filter="url(#ix-node-glow)" class="brand-mark__node brand-mark__node--3" />
        <circle cx="22" cy="96" r="3.2" fill="#c870d8" filter="url(#ix-node-glow)" class="brand-mark__node brand-mark__node--4" />
      </g>
    </svg>

    <div class="brand-mark__copy">
      <span class="brand-mark__eyebrow">Signal Board</span>
      <span class="brand-mark__wordmark">
        Innovatio<span class="brand-mark__x">X</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
}

.brand-mark__glyph {
  width: 5.5rem;
  height: auto;
  flex: none;
  filter: drop-shadow(0 4px 18px rgba(92, 224, 248, 0.2));
  transition: filter 0.3s ease;
}

.brand-mark:hover .brand-mark__glyph {
  filter: drop-shadow(0 4px 24px rgba(92, 224, 248, 0.35));
}

.brand-mark__reflection {
  fill: rgba(92, 224, 248, 0.18);
  filter: blur(4px);
}

.brand-mark__node {
  animation: node-pulse 3s ease-in-out infinite;
}

.brand-mark__node--1 { animation-delay: 0s; }
.brand-mark__node--2 { animation-delay: 0.5s; }
.brand-mark__node--3 { animation-delay: 1s; }
.brand-mark__node--4 { animation-delay: 1.5s; }

.brand-mark__copy {
  display: grid;
  gap: 0.2rem;
}

.brand-mark__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.7rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--ix-cyan);
}

.brand-mark__wordmark {
  font-family: var(--font-tech);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--ix-text);
}

.brand-mark__x {
  background: linear-gradient(135deg, #b06ae0, #e472c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes node-pulse {
  0%, 100% {
    opacity: 1;
    r: 3.5;
  }
  50% {
    opacity: 0.5;
    r: 2;
  }
}
</style>
