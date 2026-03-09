<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import ContactModal from '@/components/layout/ContactModal.vue'

const isContactModalOpen = ref(false)

const openContactModal = () => {
  isContactModalOpen.value = true
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}

// Provide the open function to all children
provide('openContactModal', openContactModal)

onMounted(() => {
  // Load Google Fonts via JS to avoid Cloudflare stripping the link tag
  const fontFamilies = [
    'Press Start 2P',
    'Share Tech Mono',
    'VT323'
  ]

  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies.map(f => f.replace(/ /g, '+')).join('&family=')}&display=swap`

  // Check if already loaded
  if (!document.querySelector(`link[href="${fontUrl}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = fontUrl
    document.head.appendChild(link)
  }

  // Add preconnect hints
  const preconnectLinks = [
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: '' }
  ]

  preconnectLinks.forEach(link => {
    const existingLink = document.querySelector(`link[href="${link.href}"]`)
    if (!existingLink) {
      const linkElement = document.createElement('link')
      linkElement.href = link.href
      linkElement.rel = link.rel
      if (link.crossorigin) {
        linkElement.setAttribute('crossorigin', link.crossorigin)
      }
      document.head.prepend(linkElement)
    }
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col crt-flicker">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
    <ContactModal :is-open="isContactModalOpen" @close="closeContactModal" />
  </div>
</template>

<style>
/* Base styles */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
</style>
