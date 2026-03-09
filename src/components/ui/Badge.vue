<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'cyber'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const badgeClass = computed(() => {
  const variants = {
    default: 'bg-muted text-foreground border-border',
    primary: 'bg-primary text-primary-foreground border-primary',
    secondary: 'bg-secondary text-secondary-foreground border-secondary',
    success: 'bg-cyber-green text-black border-cyber-green',
    warning: 'bg-yellow-500 text-black border-yellow-500',
    destructive: 'bg-destructive text-destructive-foreground border-destructive',
    cyber: 'bg-cyber-pink text-white border-cyber-pink'
  }

  return cn(
    'inline-flex items-center px-3 py-1 border-2 text-sm font-mono',
    variants[props.variant],
    props.class
  )
})
</script>

<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>
