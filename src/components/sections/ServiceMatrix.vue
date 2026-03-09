<script setup lang="ts">
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'

// Inject the contact modal opener
const openContactModal = inject<() => void>('openContactModal')

const services = ref([
  {
    id: 'red-teaming',
    title: 'Red Teaming',
    description: 'Simulate real-world adversaries to test your defenses.',
    icon: '⚔️',
    path: '/services/red-teaming',
    badge: 'Adversary Simulation'
  },
  {
    id: 'security-awareness',
    title: 'Security Awareness',
    description: 'Build a human firewall with interactive training.',
    icon: '🎓',
    path: '/services/security-awareness',
    badge: 'Training Program'
  },
  {
    id: 'phishing',
    title: 'Phishing Simulations',
    description: 'Test employee susceptibility with realistic campaigns.',
    icon: '🎣',
    path: '/services/phishing-simulations',
    badge: 'Social Engineering'
  },
  {
    id: 'soc-assessment',
    title: 'SOC Assessment',
    description: 'Evaluate and improve your Security Operations Center.',
    icon: '🔍',
    path: '/services/soc-assessment',
    badge: 'Maturity Model'
  },
  {
    id: 'outsourcing',
    title: 'Cybersecurity Outsourcing',
    description: 'Augment your team with skilled security professionals.',
    icon: '🤝',
    path: '/services/outsourcing',
    badge: 'Staff Augmentation'
  },
  {
    id: 'discover-more',
    title: 'Discover More',
    description: 'Explore all our cybersecurity services and find the right solution for your organization.',
    icon: '🔎',
    path: '#contact',
    badge: 'View All'
  }
])

const hoveredIndex = ref<number | null>(null)

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
}

const handleMouseLeave = () => {
  hoveredIndex.value = null
}

const handleServiceClick = (service: typeof services.value[0]) => {
  if (service.id === 'discover-more') {
    if (openContactModal) {
      openContactModal()
    }
  }
}
</script>

<template>
  <section class="section bg-cyber-dark">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <Badge variant="primary" class="mb-4">OUR SERVICES</Badge>
        <h2 class="font-tech text-3xl md:text-5xl mb-4">
          <span class="text-primary">CORE</span> CAPABILITIES
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive cybersecurity solutions designed to protect your organization
          at every layer of your defense.
        </p>
      </div>

      <!-- Service Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <component
          :is="service.id === 'discover-more' ? 'div' : RouterLink"
          v-for="(service, index) in services"
          :key="service.id"
          :to="service.id === 'discover-more' ? undefined : service.path"
          class="group"
          @mouseenter="() => handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          @click="handleServiceClick(service)"
        >
          <Card
            :variant="hoveredIndex === index ? 'cyber' : 'default'"
            :class="['h-full p-6 transition-all duration-200', service.id === 'discover-more' ? 'cursor-pointer' : '']"
          >
            <!-- Icon -->
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {{ service.icon }}
            </div>

            <!-- Badge -->
            <Badge variant="secondary" class="mb-3 text-xs">
              {{ service.badge }}
            </Badge>

            <!-- Title -->
            <h3 class="font-tech text-xl md:text-2xl mb-3 text-primary group-hover:text-cyber-green transition-colors">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-muted-foreground mb-4">
              {{ service.description }}
            </p>

            <!-- Learn More -->
            <div class="flex items-center gap-2 text-primary font-mono text-sm group-hover:translate-x-2 transition-transform">
              <span>[ Learn More ]</span>
              <span>→</span>
            </div>
          </Card>
        </component>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <button @click="openContactModal">
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </button>
      </div>
    </div>
  </section>
</template>
