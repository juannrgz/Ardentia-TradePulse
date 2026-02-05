<script setup lang="ts">
import ArdentiaCard from '../ui/ArdentiaCard.vue';
import { ArrowUpRight } from 'lucide-vue-next';
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ArdentiaCard title="Portfolio Value" hover-glow glow-color="teal">
        <div class="py-8 text-center">
          <div class="text-xs text-white/40 uppercase tracking-[0.3em] font-bold mb-2">Total Net Worth</div>
          <div class="text-5xl font-bold tracking-tighter text-white mb-4">$124,592.00</div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-bold border border-electric-teal/20">
            <ArrowUpRight class="w-3 h-3" />
            +12.5% ($13,843.00)
          </div>
        </div>
      </ArdentiaCard>

      <ArdentiaCard title="Asset Allocation" hover-glow glow-color="purple">
        <div class="h-full flex flex-col justify-center gap-6">
          <div class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-electric-teal shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
              <span class="text-sm font-medium">Bitcoin (BTC)</span>
            </div>
            <span class="text-sm font-bold font-mono">65%</span>
          </div>
          <div class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-plasma-purple shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
              <span class="text-sm font-medium">Ethereum (ETH)</span>
            </div>
            <span class="text-sm font-bold font-mono">25%</span>
          </div>
          <div class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
              <span class="text-sm font-medium">Global Indices (SPX, IBEX)</span>
            </div>
            <span class="text-sm font-bold font-mono">10%</span>
          </div>
        </div>
      </ArdentiaCard>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ArdentiaCard title="Profit/Loss" hover-glow glow-color="teal">
        <div class="text-center py-4">
          <div class="text-3xl font-bold text-electric-teal font-mono">+$42,120</div>
          <div class="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-1">All-time</div>
        </div>
      </ArdentiaCard>
      <ArdentiaCard title="Monthly Returns" hover-glow glow-color="purple">
         <div class="text-center py-4">
          <div class="text-3xl font-bold text-plasma-purple font-mono">+8.4%</div>
          <div class="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-1">Last 30 days</div>
        </div>
      </ArdentiaCard>
      <ArdentiaCard title="Risk Score" hover-glow glow-color="teal">
         <div class="text-center py-4">
          <div class="text-3xl font-bold text-white font-mono">4.2<span class="text-sm text-white/30">/10</span></div>
          <div class="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-1">Moderate</div>
        </div>
      </ArdentiaCard>
    </div>
  </div>
</template>
