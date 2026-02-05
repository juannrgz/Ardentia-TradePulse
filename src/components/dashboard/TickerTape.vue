<script setup lang="ts">
import { onMounted, ref } from 'vue';

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!container.value) return;
  
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    "symbols": [
      { "proName": "FOREXCOM:SPX500", "title": "S&P 500" },
      { "proName": "FOREXCOM:NSXUSD", "title": "US Tech 100" },
      { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
      { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
      { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" },
      { "proName": "BME:IBC", "title": "IBEX 35" }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "en"
  });
  
  container.value.appendChild(script);
});
</script>

<template>
  <div class="w-full border-b border-white/5 z-30 overflow-hidden bg-[#09090b]">
    <div ref="container" class="tradingview-widget-container max-w-full">
      <div class="tradingview-widget-container__widget"></div>
    </div>
  </div>
</template>

<style scoped>
.tradingview-widget-container {
  height: 46px;
  background-color: #09090b;
}

:deep(.tradingview-widget-copyright) {
  display: none !important;
}

:deep(iframe) {
  border-radius: 3px !important;
}
</style>
