<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  data: number[];
  color?: string;
}>();

const points = computed(() => {
  if (!props.data.length) return '';
  const max = Math.max(...props.data);
  const min = Math.min(...props.data);
  const range = max - min;
  const width = 100;
  const height = 30;

  return props.data.map((val, i) => {
    const x = (i / (props.data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');
});
</script>

<template>
  <div class="w-24 h-8">
    <svg viewBox="0 0 100 30" class="w-full h-full overflow-visible">
      <polyline
        fill="none"
        :stroke="color || '#2dd4bf'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :points="points"
        class="drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]"
      />
    </svg>
  </div>
</template>
