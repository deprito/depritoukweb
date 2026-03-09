<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: string
}

interface Props {
  tabs: Tab[]
  defaultTab?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultTab: ''
})

const activeTab = computed(() => props.defaultTab || props.tabs[0]?.id)

const emit = defineEmits<{
  'update:tab': [id: string]
}>()

const localActiveTab = ref(activeTab.value)

const handleTabClick = (id: string) => {
  localActiveTab.value = id
  emit('update:tab', id)
}

const tabsContainerClass = computed(() => {
  return cn('w-full', props.class)
})

const listClass = 'inline-flex border-2 border-border'

const triggerClass = (id: string) => {
  return cn(
    'px-4 py-2 font-mono transition-colors cursor-pointer',
    'focus:outline-none',
    localActiveTab.value === id
      ? 'bg-primary text-primary-foreground'
      : 'hover:bg-muted/50'
  )
}

const contentClass = 'mt-4 p-4'
</script>

<template>
  <div :class="tabsContainerClass">
    <div :class="listClass">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="triggerClass(tab.id)"
        @click="handleTabClick(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div :class="contentClass">
      <div
        v-for="tab in tabs"
        v-show="localActiveTab === tab.id"
        :key="tab.id"
      >
        <div v-html="tab.content" />
      </div>
    </div>
  </div>
</template>
