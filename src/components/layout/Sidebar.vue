<script setup lang="ts">
import { 
  LayoutDashboard, 
  BarChart3, 
  Wallet, 
  History, 
  Settings,
} from 'lucide-vue-next';

import ArdentiaLogo from '../ui/ArdentiaLogo.vue';
import { useViewStore, type ViewType } from '../../stores/viewStore';

const viewStore = useViewStore();

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' as ViewType },
  { icon: BarChart3, label: 'Markets', id: 'markets' as ViewType },
  { icon: Wallet, label: 'Portfolio', id: 'portfolio' as ViewType },
  { icon: History, label: 'Transactions', id: 'transactions' as ViewType },
];
</script>

<template>
  <aside class="w-20 lg:w-64 h-screen border-r border-white/5 flex flex-col glass-panel backdrop-blur-3xl z-40 transition-all duration-500">
    <div class="p-6 flex items-center gap-3">
      <div class="w-8 h-8 flex items-center justify-center">
        <ArdentiaLogo class="text-white w-8 h-8" />
      </div>
      <span class="font-bold text-xl tracking-tight hidden lg:block">Trade<span class="text-electric-teal">Pulse</span></span>
    </div>

    <nav class="flex-1 mt-6 px-3 space-y-2">
      <button 
        v-for="item in navItems" 
        :key="item.label"
        @click="viewStore.setView(item.id)"
        class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group"
        :class="viewStore.currentView === item.id ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'text-white/40 hover:text-white hover:bg-white/5'"
      >
        <component :is="item.icon" class="w-5 h-5" :class="viewStore.currentView === item.id ? 'text-electric-teal' : 'group-hover:text-white'" />
        <span class="font-medium hidden lg:block">{{ item.label }}</span>
        <div v-if="viewStore.currentView === item.id" class="ml-auto w-1 h-1 rounded-full bg-electric-teal shadow-[0_0_8px_rgba(45,212,191,0.8)] hidden lg:block"></div>
      </button>
    </nav>

    <div class="p-4 border-t border-white/5">
      <button 
        @click="viewStore.setView('settings')"
        class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group"
        :class="viewStore.currentView === 'settings' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'"
      >
        <Settings class="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" :class="viewStore.currentView === 'settings' ? 'text-plasma-purple' : ''" />
        <span class="font-medium hidden lg:block">Settings</span>
      </button>
    </div>
  </aside>
</template>
