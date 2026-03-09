<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  orientation?: 'horizontal' | 'vertical'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal'
})

const separatorClass = computed(() => {
  return cn(
    'border-2 border-border',
    props.orientation === 'horizontal' ? 'w-full' : 'h-full',
    props.class
  )
})
</script>

<template>
  <div :class="separatorClass" />
</template>
