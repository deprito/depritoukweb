<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  open?: boolean
  title?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  open: false
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  close: []
}>()

const dialogClass = computed(() => {
  return cn(
    'fixed inset-0 z-50 flex items-center justify-center',
    props.class
  )
})

const overlayClass = computed(() => {
  return cn(
    'absolute inset-0 bg-black/80 backdrop-blur-sm'
  )
})

const contentClass = computed(() => {
  return cn(
    'relative z-50 w-full max-w-lg bg-card border-2 border-border shadow-pixel-lg',
    'p-6 max-h-[90vh] overflow-auto'
  )
})

const close = () => {
  emit('update:open', false)
  emit('close')
}

// Handle escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) {
    close()
  }
}

// Prevent body scroll when open
watch(() => props.open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" :class="dialogClass">
        <div :class="overlayClass" @click="close" />
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div v-if="open" :class="contentClass">
            <div v-if="title" class="flex items-center justify-between mb-4">
              <h2 class="font-pixel text-lg text-primary">{{ title }}</h2>
              <button
                class="p-2 hover:bg-muted transition-colors"
                @click="close"
              >
                ✕
              </button>
            </div>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
