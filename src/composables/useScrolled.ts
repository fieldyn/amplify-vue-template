import { onMounted, onUnmounted, ref } from 'vue'

export function useScrolled(threshold = 24) {
  const scrolled = ref(false)
  const progress = ref(0)

  function update() {
    const y = window.scrollY
    scrolled.value = y > threshold
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, y / max) : 0
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { scrolled, progress }
}
