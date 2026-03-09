<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'

// Inject the contact modal opener
const openContactModal = inject<() => void>('openContactModal')

const typedText = ref('')
const fullText = 'SECURE YOUR DIGITAL FORTRESS'
const typingSpeed = 100

onMounted(() => {
  let i = 0
  const typeWriter = () => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i)
      i++
      setTimeout(typeWriter, typingSpeed)
    }
  }
  setTimeout(typeWriter, 500)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

    <!-- Animated scanline -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="w-full h-1 bg-primary/20 animate-scanline" />
    </div>

    <!-- CRT flicker overlay -->
    <div class="absolute inset-0 pointer-events-none scanlines opacity-30" />

    <!-- Content -->
    <div class="relative z-10 container-custom text-center">
      <!-- Glitch title -->
      <div class="mb-6">
        <span class="inline-block px-4 py-2 border-2 border-primary bg-primary/10 text-primary font-mono text-sm">
          [ ENTERPRISE CYBERSECURITY ]
        </span>
      </div>

      <h1 class="font-tech text-4xl md:text-6xl lg:text-7xl mb-6">
        <span class="glitch-text block text-primary" data-text="DEPRITONET">
          DEPRITONET
        </span>
      </h1>

      <!-- Typing effect -->
      <div class="font-mono text-lg md:text-xl text-muted-foreground mb-8 min-h-[2rem]">
        <span class="text-primary">&gt;</span>
        <span class="terminal-cursor">{{ typedText }}</span>
      </div>

      <!-- Subtitle -->
      <p class="max-w-2xl mx-auto text-muted-foreground mb-12 text-lg">
        Comprehensive cybersecurity solutions for enterprises. Red Teaming, SOC Assessments,
        Security Awareness, and more. Protect your organization against modern threats.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="openContactModal">
          <Button variant="cyber" size="lg">
            Schedule Consultation
          </Button>
        </button>
        <RouterLink to="/services">
          <Button variant="outline" size="lg">
            Explore Services
          </Button>
        </RouterLink>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
        <div class="border-2 border-border p-4 hover:border-primary transition-colors">
          <div class="font-tech text-2xl md:text-3xl text-primary">500+</div>
          <div class="text-sm text-muted-foreground mt-1">Engagements</div>
        </div>
        <div class="border-2 border-border p-4 hover:border-primary transition-colors">
          <div class="font-tech text-2xl md:text-3xl text-primary">98%</div>
          <div class="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
        </div>
        <div class="border-2 border-border p-4 hover:border-primary transition-colors">
          <div class="font-tech text-2xl md:text-3xl text-primary">24/7</div>
          <div class="text-sm text-muted-foreground mt-1">SOC Coverage</div>
        </div>
        <div class="border-2 border-border p-4 hover:border-primary transition-colors">
          <div class="font-tech text-2xl md:text-3xl text-primary">15+</div>
          <div class="text-sm text-muted-foreground mt-1">Years Experience</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <span class="text-primary text-2xl">▼</span>
    </div>
  </section>
</template>
