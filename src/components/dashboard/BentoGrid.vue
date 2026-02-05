<script setup lang="ts">
import { useMarketStore } from '../../stores/marketStore';
import ArdentiaCard from '../ui/ArdentiaCard.vue';
import CandleStickChart from '../charts/CandleStickChart.vue';
import SparkLine from '../charts/SparkLine.vue';
import DataBadge from '../ui/DataBadge.vue';

const marketStore = useMarketStore();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 p-4 lg:p-6 lg:pb-12 auto-rows-[180px]">
    <ArdentiaCard 
      class="md:col-span-4 lg:col-span-8 lg:row-span-4" 
      :title="`Market Analysis - ${marketStore.selectedSymbol}`" 
      hover-glow
      glow-color="teal"
    >
      <CandleStickChart :symbol="marketStore.getAsset(marketStore.selectedSymbol)?.tvSymbol || 'BINANCE:BTCUSDT'" />
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-2 lg:col-span-4 lg:row-span-3" 
      title="Watchlist"
      hover-glow
      glow-color="purple"
    >
      <div class="space-y-1">
        <div 
          v-for="asset in marketStore.assets" 
          :key="asset.symbol" 
          @click="marketStore.selectedSymbol = asset.symbol"
          class="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
          :class="{ 'bg-white/5 ring-1 ring-white/10': asset.symbol === marketStore.selectedSymbol }"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px] text-white/20">
              {{ (asset.symbol.split(' ')[0] || '').split('/')[0] }}
            </div>
            <div>
              <div class="text-sm font-semibold tracking-tight">{{ asset.symbol }}</div>
              <div class="text-[10px] text-white/40 uppercase tracking-widest">{{ asset.volume }} VOL</div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <SparkLine :data="asset.sparkline" :color="asset.change >= 0 ? '#2dd4bf' : '#a855f7'" />
            <div class="text-right min-w-[80px]">
              <div class="text-sm font-mono font-bold">${{ asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</div>
              <DataBadge :trend="asset.change >= 0 ? 'up' : 'down'">
                {{ asset.change >= 0 ? '+' : '' }}{{ asset.change.toFixed(2) }}%
              </DataBadge>
            </div>
          </div>
        </div>
      </div>
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-2 lg:col-span-4 lg:row-span-1" 
      title="Portfolio Balance"
      hover-glow
      glow-color="teal"
    >
      <div class="flex items-baseline gap-2 mt-2">
        <span class="text-3xl font-bold tracking-tighter text-white">$124,592.00</span>
        <DataBadge trend="up">+12.5%</DataBadge>
      </div>
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-2 lg:col-span-4 lg:row-span-1" 
      title="Market Sentiment"
      hover-glow
      glow-color="purple"
    >
      <div class="relative h-1.5 bg-white/5 rounded-full mt-6 overflow-hidden">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-plasma-purple to-electric-teal w-[65%] blur-[1px]" />
      </div>
      <div class="flex justify-between mt-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
        <span class="text-plasma-purple">Fear</span>
        <span class="text-electric-teal">Greed (65%)</span>
      </div>
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-2 lg:col-span-4 lg:row-span-1" 
      title="Economic Calendar"
      hover-glow
      glow-color="teal"
    >
      <div class="flex items-center justify-between mt-2">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-electric-teal">USD</div>
          <div>
            <div class="text-xs font-semibold">Non-Farm Payrolls</div>
            <div class="text-[10px] text-white/40 font-mono">In 2h 15m</div>
          </div>
        </div>
        <div class="flex gap-0.5">
          <div v-for="i in 3" :key="i" class="w-1 h-3 rounded-full bg-plasma-purple shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
        </div>
      </div>
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-4 lg:col-span-4 lg:row-span-2" 
      title="Trade Activity"
      hover-glow
      glow-color="purple"
    >
      <div class="space-y-4 pb-8">
        <div v-for="i in 4" :key="i" class="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-electric-teal/30">
          <div class="w-2 h-2 rounded-full bg-electric-teal mt-1 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
          <div>
            <div class="text-xs font-semibold">Limit Buy Order Filled</div>
            <div class="text-[10px] text-white/40 mt-0.5">ETH at $2,245.81 • 2 mins ago</div>
          </div>
        </div>
      </div>
    </ArdentiaCard>

    <ArdentiaCard 
      class="md:col-span-4 lg:col-span-8 lg:row-span-1" 
      title="Trending Now"
      hover-glow
      glow-color="teal"
    >
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 pb-8">
        <div v-for="asset in marketStore.assets.slice(0, 4)" :key="asset.symbol" class="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-electric-teal/30 transition-all cursor-pointer group">
          <div class="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">{{ (asset.symbol.split('/')[0] || '').split(' ')[0] }}</div>
          <div class="text-sm font-mono font-bold text-white group-hover:text-electric-teal transition-colors">
            ${{ asset.price.toLocaleString() }}
          </div>
          <div class="text-[10px] font-bold mt-1" :class="asset.change >= 0 ? 'text-electric-teal' : 'text-plasma-purple'">
            {{ asset.change >= 0 ? '↑' : '↓' }} {{ Math.abs(asset.change).toFixed(2) }}%
          </div>
        </div>
      </div>
    </ArdentiaCard>
  </div>
</template>
