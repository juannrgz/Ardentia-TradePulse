<script setup lang="ts">
import Sidebar from './components/layout/Sidebar.vue';
import TickerTape from './components/dashboard/TickerTape.vue';
import BentoGrid from './components/dashboard/BentoGrid.vue';
import MarketsView from './components/dashboard/MarketsView.vue';
import PortfolioView from './components/dashboard/PortfolioView.vue';
import TransactionsView from './components/dashboard/TransactionsView.vue';
import SettingsView from './components/dashboard/SettingsView.vue';
import CommandPalette from './components/ui/CommandPalette.vue';
import { useWebSocketSimulation } from './composables/useWebSocket';
import { useViewStore } from './stores/viewStore';
import { Search, Bell, User, CheckCircle2 } from 'lucide-vue-next';

useWebSocketSimulation();
const viewStore = useViewStore();

const trayMessages = [
  "You are the best investor of all time! 🚀",
  "To the moon! 💎 🙌",
  "Profit has been detected in your vicinity. 😎",
  "Your trading strategy is simply brilliant. ✨"
];

function handleNotificationClick() {
  const randomMsg = trayMessages[Math.floor(Math.random() * trayMessages.length)];
  if (randomMsg) viewStore.notify(randomMsg);
}
</script>

<template>
  <div class="flex h-screen bg-deep-void text-white overflow-hidden">
    
    <Sidebar />

    <main class="flex-1 flex flex-col min-w-0 relative">
      <header class="h-16 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-md bg-deep-void/50 z-30">
        <div class="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-96 group focus-within:border-electric-teal/50 hover:border-electric-teal/40 hover:bg-white/[0.08] hover:shadow-[0_0_25px_-5px_rgba(45,212,191,0.2)] transition-all duration-300 hover:-translate-y-0.5">
          <Search class="w-4 h-4 text-white/40 group-focus-within:text-electric-teal group-hover:text-electric-teal transition-colors duration-300" />
          <input 
            type="text" 
            placeholder="Search assets, trades, orders... (Cmd + K)" 
            class="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20 focus:placeholder:text-white/40 transition-all"
          />
        </div>

        <div class="flex items-center gap-6">
          <button 
            @click="handleNotificationClick"
            class="relative text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <Bell class="w-5 h-5" />
            <span class="absolute top-2 right-2 w-2 h-2 bg-plasma-purple rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
          </button>
          
          <div class="h-8 w-[1px] bg-white/10"></div>
          
          <div class="flex items-center gap-3 pl-2">
            <div class="text-right hidden sm:block">
              <div class="text-xs font-bold">Ardentia Demo</div>
              <div class="text-[10px] text-electric-teal font-mono uppercase tracking-widest">Pro Account</div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-teal to-plasma-purple p-[1px]">
              <div class="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                <User class="w-5 h-5 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto custom-scrollbar relative">
        <TickerTape />
        
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
          mode="out-in"
        >
          <div :key="viewStore.currentView">
            <BentoGrid v-if="viewStore.currentView === 'dashboard'" />
            <MarketsView v-else-if="viewStore.currentView === 'markets'" />
            <PortfolioView v-else-if="viewStore.currentView === 'portfolio'" />
            <TransactionsView v-else-if="viewStore.currentView === 'transactions'" />
            <SettingsView v-else-if="viewStore.currentView === 'settings'" />
          </div>
        </Transition>
      </div>

      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-500 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-12"
      >
        <div 
          v-if="viewStore.showNotification"
          class="fixed top-20 right-8 z-[100] max-w-sm w-full bg-deep-void/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4"
        >
          <div class="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center shrink-0">
            <CheckCircle2 class="w-6 h-6 text-electric-teal" />
          </div>
          <div>
            <div class="text-xs font-bold text-white/40 uppercase tracking-widest mb-0.5">Notification</div>
            <div class="text-sm font-medium text-white">{{ viewStore.notificationMessage }}</div>
          </div>
        </div>
      </Transition>

      <div class="fixed bottom-6 right-6 z-50">
        <div class="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl">
          <div class="flex items-center gap-1">
            <kbd class="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/40">⌘</kbd>
            <kbd class="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/40">K</kbd>
          </div>
          <span class="text-[10px] font-bold text-white/60 uppercase tracking-widest">Command Center</span>
        </div>
      </div>

      <CommandPalette />
    </main>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(45, 212, 191, 0.2);
}
</style>
