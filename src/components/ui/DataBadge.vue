<script setup lang="ts">
defineProps<{
  trend?: 'up' | 'down' | 'neutral';
}>();
</script>

<template>
  <div 
    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium"
    :class="{
      'bg-electric-teal/10 text-electric-teal': trend === 'up',
      'bg-plasma-purple/10 text-plasma-purple': trend === 'down',
      'bg-white/5 text-white/40': trend === 'neutral' || !trend
    }"
  >
    <span v-if="trend === 'up'" class="mr-1">↑</span>
    <span v-if="trend === 'down'" class="mr-1">↓</span>
    <slot />
  </div>
</template>
