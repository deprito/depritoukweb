<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  options: Option[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  class?: string
  id?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option...',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement>()

const selectClass = computed(() => {
  return cn(
    'relative w-full',
    props.class
  )
})

const triggerClass = computed(() => {
  return cn(
    'w-full px-4 py-3 border-2 border-border bg-background text-foreground',
    'focus:outline-none focus:border-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-colors font-mono text-left cursor-pointer',
    'flex items-center justify-between'
  )
})

const optionsClass = computed(() => {
  return cn(
    'absolute z-50 w-full mt-1 bg-card border-2 border-border shadow-pixel-lg',
    'max-h-60 overflow-auto',
    isOpen.value ? 'block' : 'hidden'
  )
})

const optionClass = computed(() => {
  return cn(
    'px-4 py-3 font-mono cursor-pointer transition-colors',
    'hover:bg-primary hover:text-primary-foreground',
    'focus:outline-none focus:bg-primary focus:text-primary-foreground'
  )
})

const selectedLabel = computed(() => {
  const option = props.options.find(o => o.value === props.modelValue)
  return option?.label || props.placeholder
})

const toggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (value: string) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

// Close on click outside
const handleClickOutside = (e: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

// Add click outside listener
if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}
</script>

<template>
  <div ref="selectRef" :class="selectClass">
    <div
      :class="triggerClass"
      :tabindex="disabled ? -1 : 0"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.escape="isOpen = false"
    >
      <span>{{ selectedLabel }}</span>
      <span class="ml-2 text-primary">▼</span>
    </div>
    <div :class="optionsClass">
      <div
        v-for="option in options"
        :key="option.value"
        :class="optionClass"
        :tabindex="option.disabled ? -1 : 0"
        @click="!option.disabled && selectOption(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
