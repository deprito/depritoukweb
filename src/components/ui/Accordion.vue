<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface AccordionItem {
  id: string
  title: string
  content: string
}

interface Props {
  items: AccordionItem[]
  multiple?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false
})

const openItems = ref<string[]>([])

const toggleItem = (id: string) => {
  const index = openItems.value.indexOf(id)
  if (index > -1) {
    openItems.value = openItems.value.filter(i => i !== id)
  } else {
    if (props.multiple) {
      openItems.value.push(id)
    } else {
      openItems.value = [id]
    }
  }
}

const isOpen = (id: string) => openItems.value.includes(id)

const accordionClass = computed(() => {
  return cn('w-full', props.class)
})

const itemClass = 'border-b-2 border-border last:border-b-0'

const triggerClass = computed(() => {
  return cn(
    'w-full px-4 py-4 text-left flex items-center justify-between',
    'hover:bg-muted/50 transition-colors cursor-pointer',
    'focus:outline-none focus:bg-muted/50'
  )
})

const contentClass = 'px-4 pb-4 text-muted-foreground'

const iconClass = 'transition-transform duration-200'
</script>

<template>
  <div :class="accordionClass">
    <div
      v-for="item in items"
      :key="item.id"
      :class="itemClass"
    >
      <button
        :class="triggerClass"
        @click="toggleItem(item.id)"
      >
        <span class="font-tech text-lg">{{ item.title }}</span>
        <span
          :class="[
            iconClass,
            isOpen(item.id) && 'rotate-180'
          ]"
        >
          ▼
        </span>
      </button>
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-96 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="max-h-96 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div v-if="isOpen(item.id)" :class="contentClass">
          <div v-html="item.content" />
        </div>
      </Transition>
    </div>
  </div>
</template>
