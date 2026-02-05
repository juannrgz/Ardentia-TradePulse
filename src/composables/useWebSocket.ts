import { onMounted, onUnmounted } from 'vue';
import { useMarketStore } from '../stores/marketStore';

export function useWebSocketSimulation() {
    const marketStore = useMarketStore();
    let interval: ReturnType<typeof setInterval> | null = null;

    const startSimulation = () => {
        interval = setInterval(() => {
            marketStore.assets.forEach(asset => {
                const volatility = asset.price * 0.0005;
                const change = (Math.random() - 0.5) * volatility;
                const newPrice = asset.price + change;

                marketStore.updatePrice(asset.symbol, newPrice);
            });
        }, 2000);
    };

    const stopSimulation = () => {
        if (interval) clearInterval(interval);
    };

    onMounted(() => {
        startSimulation();
    });

    onUnmounted(() => {
        stopSimulation();
    });

    return {
        startSimulation,
        stopSimulation
    };
}
