<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
  symbol: string;
}>();

const container = ref<HTMLElement | null>(null);
const widgetId = `tv-widget-${Math.random().toString(36).substr(2, 9)}`;

const loadWidget = () => {
  if (!container.value) return;
  
  // Clear container
  container.value.innerHTML = '';
  
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/tv.js';
  script.async = true;
  script.onload = () => {
    if (typeof (window as any).TradingView !== 'undefined') {
      new (window as any).TradingView.widget({
        "autosize": true,
        "symbol": props.symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#09090b",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": false,
        "save_image": false,
        "container_id": widgetId,
        "backgroundColor": "#09090b",
        "gridColor": "rgba(255, 255, 255, 0.05)",
        "studies": [],
        "overrides": {
          "mainSeriesProperties.candleStyle.upColor": "#2dd4bf",
          "mainSeriesProperties.candleStyle.downColor": "#a855f7",
          "mainSeriesProperties.candleStyle.drawWick": true,
          "mainSeriesProperties.candleStyle.wickUpColor": "#2dd4bf",
          "mainSeriesProperties.candleStyle.wickDownColor": "#a855f7",
          "mainSeriesProperties.candleStyle.borderUpColor": "#2dd4bf",
          "mainSeriesProperties.candleStyle.borderDownColor": "#a855f7",
          "paneProperties.background": "#09090b",
          "paneProperties.vertGridProperties.color": "rgba(255, 255, 255, 0.05)",
          "paneProperties.horzGridProperties.color": "rgba(255, 255, 255, 0.05)",
          "scalesProperties.textColor": "#a1a1aa",
          "scalesProperties.fontSize": 11,
          "scalesProperties.lineColor": "rgba(255, 255, 255, 0.1)",
          "paneProperties.legendProperties.showSeriesTitle": true,
          "paneProperties.legendProperties.showStudyTitles": true,
          "paneProperties.legendProperties.showStudyValues": true,
          "paneProperties.legendProperties.showSeriesOHLC": true,
          "paneProperties.legendProperties.showLegend": true,
          "paneProperties.legendProperties.backgroundColor": "#09090b",
          "paneProperties.legendProperties.backgroundTransparency": 100,
        }
      });
    }
  };
  container.value.appendChild(script);
};

onMounted(() => {
  loadWidget();
});

watch(() => props.symbol, () => {
  loadWidget();
});
</script>

<template>
  <div class="w-full h-full min-h-[400px] relative">
    <div :id="widgetId" ref="container" class="w-full h-full" />
  </div>
</template>

<style scoped>
:deep(.tradingview-widget-container) {
  width: 100%;
  height: 100%;
}
</style>
