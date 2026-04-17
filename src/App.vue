<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TechSection from '@/components/TechSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const { init } = useTheme()

onMounted(() => {
  init()
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TechSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<style scoped>
main {
  position: relative;
  min-height: 100vh;
}
</style>
