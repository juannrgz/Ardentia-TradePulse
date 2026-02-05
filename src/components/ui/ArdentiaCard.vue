<script setup lang="ts">
defineProps<{
  title?: string;
  hoverGlow?: boolean;
  glowColor?: 'teal' | 'purple';
}>();
</script>

<template>
  <div 
    class="glass-panel rounded-xl overflow-hidden group transition-all duration-500 flex flex-col h-full"
    :class="[
      hoverGlow && (!glowColor || glowColor === 'teal') ? 'hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)]' : '',
      hoverGlow && glowColor === 'purple' ? 'hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]' : ''
    ]"
  >
    <div v-if="title" class="px-6 py-4 border-b border-white/5 flex items-center justify-between shrink-0">
      <h3 class="text-sm font-medium text-white/70 uppercase tracking-widest">{{ title }}</h3>
      <slot name="header-action" />
    </div>
    <div class="p-6 flex-1 overflow-hidden relative">
      <slot />
    </div>
  </div>
</template>
