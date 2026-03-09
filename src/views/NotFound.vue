<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center pt-16">
    <div class="text-center px-4">
      <div class="font-pixel text-8xl md:text-[12rem] text-primary mb-4 glitch-text" data-text="404">
        404
      </div>
      <h1 class="font-tech text-2xl md:text-4xl mb-4">
        PAGE <span class="text-primary">NOT FOUND</span>
      </h1>
      <p class="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you're looking for has been moved, deleted, or never existed.
      </p>
      <RouterLink to="/">
        <Button variant="cyber" size="lg">
          &gt; Return Home
        </Button>
      </RouterLink>
    </div>
  </div>
</template>
