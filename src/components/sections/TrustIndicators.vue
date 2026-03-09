<script setup lang="ts">
import { ref } from 'vue'

const certifications = ref([
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'CREST', description: 'Certified Ethical Security Testing' },
  { name: 'OSCP', description: 'Offensive Security Certified Professional' },
  { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
  { name: 'CISA', description: 'Certified Information Systems Auditor' },
  { name: 'CEH', description: 'Certified Ethical Hacker' }
])
</script>

<template>
  <section class="section bg-cyber-darker">
    <div class="container-custom">
      <!-- Certifications -->
      <div>
        <h3 class="font-mono text-sm text-muted-foreground mb-6 text-center">
          [ CERTIFICATIONS & CREDENTIALS ]
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="border-2 border-border p-4 text-center hover:border-primary hover:shadow-pixel transition-all"
          >
            <div class="font-tech text-primary text-sm mb-1">{{ cert.name }}</div>
            <div class="text-xs text-muted-foreground">{{ cert.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
