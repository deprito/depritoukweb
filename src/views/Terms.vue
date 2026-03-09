<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="pt-16">
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h1 class="font-tech text-4xl md:text-5xl mb-8">
            <span class="text-primary">TERMS</span> OF SERVICE
          </h1>

          <div class="space-y-8 text-muted-foreground">
            <div>
              <h2 class="font-tech text-xl text-primary mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by these terms of service.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">3. Disclaimer</h2>
              <p>The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">4. Limitations</h2>
              <p>In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">5. Contact</h2>
              <p>For questions about these terms of service, please contact legal@cybershield.example.com</p>
            </div>
          </div>

          <div class="mt-12">
            <RouterLink to="/">
              <Button variant="outline">Return Home</Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
