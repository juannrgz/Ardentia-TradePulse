import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface MarketData {
    symbol: string;
    tvSymbol: string;
    price: number;
    basePrice?: number;
    change: number;
    volume: string;
    sparkline: number[];
}

export const useMarketStore = defineStore('market', () => {
    const assets = ref<MarketData[]>([
        { symbol: 'BTC/USDT', tvSymbol: 'BINANCE:BTCUSDT', price: 42394.20, basePrice: 41200, change: 2.45, volume: '2.4B', sparkline: [41200, 41500, 42100, 41800, 42394] },
        { symbol: 'ETH/USDT', tvSymbol: 'BINANCE:ETHUSDT', price: 2245.81, basePrice: 2300, change: -1.24, volume: '1.1B', sparkline: [2300, 2280, 2260, 2270, 2245] },
        { symbol: 'SPX 500', tvSymbol: 'FOREXCOM:SPX500', price: 5123.40, basePrice: 5080, change: 0.85, volume: '18B', sparkline: [5080, 5095, 5110, 5105, 5123] },
        { symbol: 'IBEX 35', tvSymbol: 'BME:IBC', price: 10124.50, basePrice: 10050, change: 0.74, volume: '2.5B', sparkline: [10050, 10080, 10110, 10090, 10124] },
        { symbol: 'SOL/USDT', tvSymbol: 'BINANCE:SOLUSDT', price: 98.45, basePrice: 88, change: 5.72, volume: '450M', sparkline: [88, 92, 95, 94, 98] },
        { symbol: 'BNB/USDT', tvSymbol: 'BINANCE:BNBUSDT', price: 312.10, basePrice: 308, change: 0.82, volume: '220M', sparkline: [308, 310, 311, 309, 312] },
    ]);

    const selectedSymbol = ref('BTC/USDT');

    const updatePrice = (symbol: string, newPrice: number) => {
        const asset = assets.value.find(a => a.symbol === symbol);
        if (asset) {
            const oldPrice = asset.price;
            asset.price = newPrice;
            const basePrice = asset.basePrice ?? asset.sparkline[0] ?? newPrice;
            asset.change = ((newPrice - basePrice) / (basePrice || 1)) * 100;
            return newPrice > oldPrice ? 'up' : 'down';
        }
        return null;
    };

    const getAsset = (symbol: string) => assets.value.find(a => a.symbol === symbol);

    return {
        assets,
        selectedSymbol,
        updatePrice,
        getAsset
    };
});
