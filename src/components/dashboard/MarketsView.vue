<script setup lang="ts">
import ArdentiaCard from '../ui/ArdentiaCard.vue';
import { useMarketStore } from '../../stores/marketStore';
import DataBadge from '../ui/DataBadge.vue';
import { TrendingUp, Activity, BarChart2 } from 'lucide-vue-next';

const marketStore = useMarketStore();
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ArdentiaCard title="Global Markets" hover-glow glow-color="purple">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-3 rounded-xl bg-electric-teal/10">
              <TrendingUp class="w-6 h-6 text-electric-teal" />
            </div>
            <div>
              <div class="text-2xl font-bold font-mono">2.4%</div>
              <div class="text-xs text-white/40 uppercase tracking-widest font-bold">24h Change</div>
            </div>
          </div>
        </div>
      </ArdentiaCard>
      
      <ArdentiaCard title="Trading Volume" hover-glow glow-color="teal">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-3 rounded-xl bg-plasma-purple/10">
              <Activity class="w-6 h-6 text-plasma-purple" />
            </div>
            <div>
              <div class="text-2xl font-bold font-mono">$18.4B</div>
              <div class="text-xs text-white/40 uppercase tracking-widest font-bold">Total Volume</div>
            </div>
          </div>
        </div>
      </ArdentiaCard>

      <ArdentiaCard title="Market Cap" hover-glow glow-color="purple">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-3 rounded-xl bg-white/5">
              <BarChart2 class="w-6 h-6 text-white/60" />
            </div>
            <div>
              <div class="text-2xl font-bold font-mono">$2.1T</div>
              <div class="text-xs text-white/40 uppercase tracking-widest font-bold">Global Cap</div>
            </div>
          </div>
        </div>
      </ArdentiaCard>
    </div>

    <ArdentiaCard title="Asset Marketplace" hover-glow glow-color="teal">
      <div class="overflow-x-auto custom-scrollbar">
        <table class="w-full text-left">
          <thead>
            <tr class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold border-b border-white/5">
              <th class="px-4 py-4">Asset</th>
              <th class="px-4 py-4">Price</th>
              <th class="px-4 py-4">24h Change</th>
              <th class="px-4 py-4">Volume</th>
              <th class="px-4 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr v-for="asset in marketStore.assets" :key="asset.symbol" class="group hover:bg-white/[0.02] transition-colors">
              <td class="px-4 py-5">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px] text-white/40">
                    {{ asset.symbol.split('/')[0] }}
                  </div>
                  <div>
                    <div class="text-sm font-semibold">{{ asset.symbol }}</div>
                    <div class="text-[10px] text-white/30 uppercase font-bold tracking-widest">{{ asset.tvSymbol }}</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-5">
                <span class="text-sm font-mono font-medium">${{ asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</span>
              </td>
              <td class="px-4 py-5">
                <DataBadge :trend="asset.change >= 0 ? 'up' : 'down'">
                  {{ asset.change >= 0 ? '+' : '' }}{{ asset.change.toFixed(2) }}%
                </DataBadge>
              </td>
              <td class="px-4 py-5">
                <span class="text-xs text-white/50 font-mono">{{ asset.volume }}</span>
              </td>
              <td class="px-4 py-5 text-right">
                <button class="px-4 py-2 rounded-lg bg-electric-teal/10 text-electric-teal text-xs font-bold hover:bg-electric-teal hover:text-deep-void transition-all">
                  Trade
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ArdentiaCard>
  </div>
</template>
