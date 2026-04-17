<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ size?: number; id?: string }>(), {
  size: 40,
  id: 'ix-logo',
})

const height = computed(() => props.size * 0.875)
</script>

<template>
  <svg
    :width="size"
    :height="height"
    viewBox="0 0 64 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="ix-logo"
    aria-label="InnovatioX logo"
    role="img"
  >
    <defs>
      <linearGradient
        :id="`${id}-main`"
        x1="0"
        y1="0"
        x2="64"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="#5ce0f8" />
        <stop offset="50%" stop-color="#9b6dd7" />
        <stop offset="100%" stop-color="#e472c4" />
      </linearGradient>
    </defs>

    <!-- Cloud arc -->
    <path
      d="M24 14 Q32 2 42 10 Q46 4 54 8 Q56 14 50 16"
      :stroke="`url(#${id}-main)`"
      stroke-width="2.5"
      stroke-linecap="round"
      fill="none"
      opacity="0.65"
    />

    <!-- X shape: two curved ribbons crossing at center -->
    <path
      d="M20 8 Q26 18 32 28 Q38 38 44 48"
      :stroke="`url(#${id}-main)`"
      stroke-width="5"
      stroke-linecap="round"
      fill="none"
    />
    <path
      d="M44 8 Q38 18 32 28 Q26 38 20 48"
      :stroke="`url(#${id}-main)`"
      stroke-width="5"
      stroke-linecap="round"
      fill="none"
    />

    <!-- Circuit traces -->
    <line
      x1="24" y1="20" x2="6" y2="20"
      stroke="#5ce0f8" stroke-width="1.5" stroke-linecap="round"
    />
    <polyline
      points="26,28 12,28 12,36 4,36"
      stroke="#7ba0e8" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" fill="none"
    />
    <line
      x1="24" y1="36" x2="8" y2="36"
      stroke="#9b6dd7" stroke-width="1.5" stroke-linecap="round"
    />

    <!-- Glowing nodes -->
    <circle cx="5" cy="20" r="2" fill="#5ce0f8" class="ix-logo__node" />
    <circle cx="3" cy="36" r="2" fill="#7ba0e8" class="ix-logo__node ix-logo__node--d1" />
    <circle cx="7" cy="36" r="2" fill="#9b6dd7" class="ix-logo__node ix-logo__node--d2" />
  </svg>
</template>

<style scoped>
.ix-logo__node {
  animation: node-pulse 3s ease-in-out infinite;
}
.ix-logo__node--d1 {
  animation-delay: 1s;
}
.ix-logo__node--d2 {
  animation-delay: 2s;
}
@keyframes node-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
</style>
