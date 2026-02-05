<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Search, Zap, BarChart3, Wallet, Settings } from 'lucide-vue-next';

const isOpen = ref(false);

const toggle = () => (isOpen.value = !isOpen.value);

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape') isOpen.value = false;
  });
});

const actions = [
  { icon: Zap, label: 'Quick Buy BTC', shortcut: 'B' },
  { icon: BarChart3, label: 'View Market Depth', shortcut: 'M' },
  { icon: Wallet, label: 'Sync Portfolio', shortcut: 'S' },
  { icon: Settings, label: 'Account Settings', shortcut: ',' },
];
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-deep-void/80 backdrop-blur-md" @click="isOpen = false"></div>
    
    <!-- Modal -->
    <div class="relative w-full max-w-xl bg-surface border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-200">
      <div class="flex items-center gap-4 px-6 py-4 border-b border-white/5">
        <Search class="w-5 h-5 text-white/40" />
        <input 
          autoFocus
          type="text" 
          placeholder="Search for anything..." 
          class="bg-transparent border-none outline-none text-lg w-full placeholder:text-white/20"
        />
        <div class="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40">
          ESC
        </div>
      </div>

      <div class="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        <div class="text-[10px] font-bold text-white/20 uppercase tracking-widest px-2 mb-2">Actions</div>
        <div class="space-y-1">
          <button 
            v-for="action in actions" 
            :key="action.label"
            class="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 transition-all group text-left"
          >
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-electric-teal/20 group-hover:text-electric-teal transition-colors">
                <component :is="action.icon" class="w-4 h-4" />
              </div>
              <span class="font-medium text-sm text-white/60 group-hover:text-white">{{ action.label }}</span>
            </div>
            <div class="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/20 group-hover:text-white/40">
              {{ action.shortcut }}
            </div>
          </button>
        </div>
      </div>

      <div class="px-6 py-3 bg-white/5 border-t border-white/5 flex items-center justify-between">
        <div class="flex gap-4">
          <div class="flex items-center gap-1.5">
            <kbd class="px-1 py-0.5 rounded bg-white/10 text-[9px] text-white/40">↑↓</kbd>
            <span class="text-[9px] text-white/40 uppercase tracking-wider">Navigate</span>
          </div>
          <div class="flex items-center gap-1.5">
            <kbd class="px-1 py-0.5 rounded bg-white/10 text-[9px] text-white/40">Enter</kbd>
            <span class="text-[9px] text-white/40 uppercase tracking-wider">Select</span>
          </div>
        </div>
        <div class="text-[9px] text-white/20">Ardentia Intelligence v1.0</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: modal-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.95) translateY(-10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
