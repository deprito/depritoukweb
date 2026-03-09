<script setup lang="ts">
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-cyber-dark border-t-2 border-border">
    <!-- Main Footer -->
    <div class="container-custom py-12">
      <div class="flex flex-col items-center justify-center">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary flex items-center justify-center border-2 border-primary">
            <span class="font-pixel text-xs text-primary-foreground">DN</span>
          </div>
          <span class="font-pixel text-sm text-primary">DEPRITONET</span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t-2 border-border">
      <div class="container-custom py-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {{ currentYear }} DepritoNet. All rights reserved.</p>
          <div class="flex gap-4">
            <RouterLink to="/privacy" class="hover:text-primary transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms" class="hover:text-primary transition-colors">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
