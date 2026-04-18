import { ref, watch, type Ref } from 'vue'

export function useCountUp(
  target: number,
  active: Ref<boolean>,
  options?: { duration?: number; decimals?: number },
) {
  const duration = options?.duration ?? 1500
  const decimals = options?.decimals ?? 0
  const value = ref(0)
  let raf = 0

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  watch(
    active,
    (isActive) => {
      if (!isActive) return
      if (prefersReduced) {
        value.value = parseFloat(target.toFixed(decimals))
        return
      }
      const start = performance.now()
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = easeOut(t)
        value.value = parseFloat((target * eased).toFixed(decimals))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    },
    { immediate: true },
  )

  function stop() {
    cancelAnimationFrame(raf)
  }

  return { value, stop }
}
