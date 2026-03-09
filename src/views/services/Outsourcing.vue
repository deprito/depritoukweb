<script setup lang="ts">
import { servicesData } from '@/data/services'
import Accordion from '@/components/ui/Accordion.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Separator from '@/components/ui/Separator.vue'
import { RouterLink } from 'vue-router'

const service = servicesData['outsourcing']

const accordionItems = service.methodology.map((m, i) => ({
  id: `phase-${i}`,
  title: `Phase ${i + 1}: ${m.phase}`,
  content: m.description
}))
</script>

<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl">
          <Badge variant="primary" class="mb-4">{{ service.tagline }}</Badge>
          <div class="flex items-center gap-4 mb-6">
            <span class="text-6xl">{{ service.icon }}</span>
            <h1 class="font-tech text-4xl md:text-6xl text-primary">
              {{ service.title }}
            </h1>
          </div>
          <p class="text-xl text-muted-foreground mb-8">
            {{ service.description }}
          </p>
          <RouterLink to="/contact">
            <Button variant="cyber" size="lg">
              &gt; {{ service.cta }}
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            <span class="text-primary">SERVICE</span> OVERVIEW
          </h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            {{ service.overview }}
          </p>
        </div>
      </div>
    </section>

    <!-- Available Roles -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            <span class="text-primary">AVAILABLE</span> ROLES
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="role in service.roles"
              :key="role"
              class="border-2 border-border p-4 text-center hover:border-primary hover:bg-primary/10 transition-all"
            >
              <span class="font-mono text-sm">{{ role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            <span class="text-primary">ENGAGEMENT</span> PROCESS
          </h2>
          <Accordion :items="accordionItems" class="mb-8" />
        </div>
      </div>
    </section>

    <!-- Deliverables -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            <span class="text-primary">WHAT YOU</span> GET
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in service.deliverables"
              :key="item"
              class="border-2 border-border p-4 hover:border-primary transition-colors"
            >
              <span class="text-primary mr-2">▸</span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            <span class="text-primary">OUTSOURCING</span> ADVANTAGES
          </h2>
          <div class="space-y-4">
            <div
              v-for="benefit in service.benefits"
              :key="benefit"
              class="flex items-start gap-4"
            >
              <div class="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                <span class="text-primary-foreground">✓</span>
              </div>
              <span class="text-lg">{{ benefit }}</span>
            </div>
          </div>
          <Separator class="my-8" />
          <RouterLink to="/contact">
            <Button variant="cyber" size="lg">
              &gt; {{ service.cta }}
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
