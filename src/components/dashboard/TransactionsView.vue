<script setup lang="ts">
import ArdentiaCard from '../ui/ArdentiaCard.vue';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-vue-next';

const transactions = [
  { type: 'buy', asset: 'BTC', amount: '0.45', price: '$42,371.45', status: 'Completed', date: 'Feb 05, 14:22' },
  { type: 'sell', asset: 'ETH', amount: '1.20', price: '$2,243.28', status: 'Completed', date: 'Feb 04, 09:15' },
  { type: 'buy', asset: 'SPX', amount: '10', price: '$5,122.36', status: 'Completed', date: 'Feb 03, 16:40' },
  { type: 'buy', asset: 'BTC', amount: '0.12', price: '$41,200.00', status: 'Completed', date: 'Jan 28, 11:30' },
  { type: 'sell', asset: 'ETH', amount: '0.50', price: '$2,450.00', status: 'Processing', date: 'Jan 25, 18:05' },
];
</script>

<template>
  <div class="p-6">
    <ArdentiaCard title="Full Transaction Ledger" hover-glow glow-color="purple">
      <div class="space-y-4">
        <div v-for="(tx, idx) in transactions" :key="idx" 
          class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
        >
          <div class="flex items-center gap-4">
            <div :class="[
              'p-3 rounded-xl',
              tx.type === 'buy' ? 'bg-electric-teal/10 text-electric-teal' : 'bg-plasma-purple/10 text-plasma-purple'
            ]">
              <ArrowDownLeft v-if="tx.type === 'buy'" class="w-5 h-5" />
              <ArrowUpRight v-else class="w-5 h-5" />
            </div>
            <div>
              <div class="text-sm font-bold">{{ tx.type === 'buy' ? 'Purchase' : 'Sale' }} of {{ tx.asset }}</div>
              <div class="text-[10px] text-white/40 font-bold uppercase tracking-widest">{{ tx.date }}</div>
            </div>
          </div>
          
          <div class="text-right">
            <div class="text-sm font-mono font-bold">{{ tx.type === 'buy' ? '+' : '-' }}{{ tx.amount }} {{ tx.asset }}</div>
            <div class="text-xs text-white/40">{{ tx.price }}</div>
          </div>

          <div class="hidden sm:block text-right min-w-[100px]">
            <span :class="[
              'px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
              tx.status === 'Completed' ? 'bg-electric-teal/10 text-electric-teal border border-electric-teal/20' : 'bg-white/5 text-white/40 border border-white/10'
            ]">
              {{ tx.status }}
            </span>
          </div>
        </div>
      </div>
    </ArdentiaCard>
  </div>
</template>
