<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'cyber'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  class?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClass = computed(() => {
  const variants = {
    default: 'bg-primary text-primary-foreground border-primary hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90',
    outline: 'bg-transparent border-border text-foreground hover:bg-muted hover:border-primary',
    secondary: 'bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80',
    ghost: 'bg-transparent border-transparent text-foreground hover:bg-muted',
    link: 'bg-transparent border-transparent text-primary underline-offset-4 hover:underline',
    cyber: 'bg-cyber-green text-black border-cyber-green hover:bg-cyber-green/90'
  }

  const sizes = {
    default: 'px-6 py-3 shadow-pixel hover:shadow-pixel-lg',
    sm: 'px-4 py-2 text-sm shadow-pixel-sm',
    lg: 'px-8 py-4 text-lg shadow-pixel-lg hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
    icon: 'p-2 shadow-pixel-sm'
  }

  return cn(
    'inline-flex items-center justify-center border-2 font-mono transition-all duration-100',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:shadow-none active:translate-x-1 active:translate-y-1',
    variants[props.variant],
    sizes[props.size],
    props.class
  )
})

const handleClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('click', e)
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
