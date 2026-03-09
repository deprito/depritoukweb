<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  class?: string
  id?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const textareaClass = computed(() => {
  return cn(
    'w-full px-4 py-3 border-2 bg-background text-foreground',
    'placeholder:text-muted-foreground',
    'focus:outline-none focus:border-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-colors font-mono resize-none',
    props.class
  )
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    :id="id"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :rows="rows"
    :class="textareaClass"
    @input="handleInput"
  />
</template>
