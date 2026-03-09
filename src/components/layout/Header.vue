<script setup lang="ts">
import { ref, inject } from 'vue'
import Button from '@/components/ui/Button.vue'

const isMobileMenuOpen = ref(false)

// Inject the contact modal opener
const openContactModal = inject<() => void>('openContactModal')

const handleGetSecure = () => {
  if (openContactModal) {
    openContactModal()
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-cyber-darker/95 backdrop-blur-sm border-b-2 border-border shadow-pixel-sm"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center gap-3 group"
        >
          <div class="w-10 h-10 bg-primary flex items-center justify-center border-2 border-primary group-hover:shadow-cyber transition-all">
            <span class="font-pixel text-xs text-primary-foreground">DN</span>
          </div>
          <span class="font-pixel text-sm md:text-base text-primary hidden sm:block">
            DEPRITONET
          </span>
        </RouterLink>

        <!-- CTA Button -->
        <button @click="handleGetSecure">
          <Button variant="cyber" size="sm">
            Get Secure
          </Button>
        </button>
      </div>
    </nav>
  </header>
</template>
