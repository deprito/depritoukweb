<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  modelValue?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  class?: string
  id?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClass = computed(() => {
  return cn(
    'w-full px-4 py-3 border-2 bg-background text-foreground',
    'placeholder:text-muted-foreground',
    'focus:outline-none focus:border-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-colors font-mono',
    props.class
  )
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :class="inputClass"
    @input="handleInput"
  />
</template>
