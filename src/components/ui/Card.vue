<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
  variant?: 'default' | 'outlined' | 'elevated' | 'cyber'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const cardClass = computed(() => {
  const variants = {
    default: 'bg-card text-card-foreground border-border shadow-pixel',
    outlined: 'bg-card text-card-foreground border-border border-2',
    elevated: 'bg-card text-card-foreground border-border shadow-pixel-lg',
    cyber: 'bg-card text-card-foreground border-primary shadow-cyber'
  }

  return cn(
    'border-2 transition-all duration-100',
    'hover:shadow-pixel-lg hover:-translate-y-0 hover:-translate-x-0',
    variants[props.variant],
    props.class
  )
})
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>
