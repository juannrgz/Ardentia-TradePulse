import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ViewType = 'dashboard' | 'markets' | 'portfolio' | 'transactions' | 'settings';

export const useViewStore = defineStore('view', () => {
    const currentView = ref<ViewType>('dashboard');
    const showNotification = ref(false);
    const notificationMessage = ref('');

    function setView(view: ViewType) {
        currentView.value = view;
    }

    function notify(message: string) {
        notificationMessage.value = message;
        showNotification.value = true;
        setTimeout(() => {
            showNotification.value = false;
        }, 5000);
    }

    return {
        currentView,
        setView,
        showNotification,
        notificationMessage,
        notify
    };
});
