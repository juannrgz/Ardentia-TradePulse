<script setup lang="ts">
import { ref } from 'vue';
import ArdentiaCard from '../ui/ArdentiaCard.vue';
import { User, Bell, Shield, Palette, ExternalLink, Instagram, Globe } from 'lucide-vue-next';

const isNeonTheme = ref(true);
const is2FAEnabled = ref(true);
const isPushEnabled = ref(false);

const toggleNeon = () => isNeonTheme.value = !isNeonTheme.value;
const toggle2FA = () => is2FAEnabled.value = !is2FAEnabled.value;
const togglePush = () => isPushEnabled.value = !isPushEnabled.value;
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <div class="flex items-center gap-4 mb-8">
      <div class="p-4 rounded-2xl bg-gradient-to-br from-electric-teal to-plasma-purple shadow-[0_0_20px_rgba(45,212,191,0.3)]">
        <User class="w-8 h-8 text-white" />
      </div>
       <div>
        <h2 class="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p class="text-sm text-white/40">Manage your profile, preferences and security.</p>
      </div>
    </div>

    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArdentiaCard title="Identity" hover-glow glow-color="teal">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40">
               <User class="w-6 h-6" />
            </div>
            <div>
              <div class="text-sm font-bold">Ardentia Demo</div>
              <div class="text-[10px] text-white/40 uppercase tracking-widest font-bold">demo@ardentia.pulse</div>
            </div>
          </div>
        </ArdentiaCard>

        <ArdentiaCard title="Appearance" hover-glow glow-color="purple">
           <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Palette class="w-5 h-5" :class="isNeonTheme ? 'text-plasma-purple' : 'text-white/20'" />
              <span class="text-sm transition-colors" :class="isNeonTheme ? 'text-white' : 'text-white/40'">Neon Glass Theme</span>
            </div>
            <button 
              @click="toggleNeon"
              class="w-10 h-6 rounded-full transition-all duration-500 relative shrink-0"
              :class="isNeonTheme ? 'bg-plasma-purple/20 border border-plasma-purple/40 shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]' : 'bg-white/5 border border-white/10'"
            >
              <div 
                class="absolute top-1 w-4 h-4 rounded-full transition-all duration-500 shadow-lg"
                :class="isNeonTheme ? 'right-1 bg-plasma-purple shadow-[0_0_8px_rgba(168,85,247,0.8)] translate-x-0' : 'left-1 bg-white/20 translate-x-0'"
              ></div>
            </button>
          </div>
        </ArdentiaCard>
      </div>

      <ArdentiaCard title="Security & Notifications" hover-glow glow-color="teal">
        <div class="space-y-6">
          <div 
            @click="toggle2FA"
            class="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/[0.07] transition-all cursor-pointer group"
          >
            <div class="flex items-center gap-4">
              <Shield class="w-5 h-5 transition-colors duration-300" :class="is2FAEnabled ? 'text-electric-teal' : 'text-white/20'" />
              <div>
                <div class="text-sm font-bold transition-colors" :class="is2FAEnabled ? 'text-white' : 'text-white/40'">Two-Factor Authentication</div>
                <div class="text-[10px] uppercase font-bold tracking-widest mt-1 transition-colors" :class="is2FAEnabled ? 'text-electric-teal/60' : 'text-white/20'">
                  {{ is2FAEnabled ? 'Enabled • SMS + Authenticator' : 'Disabled' }}
                </div>
              </div>
            </div>
            <div 
              class="w-10 h-6 rounded-full transition-all duration-500 relative shrink-0"
              :class="is2FAEnabled ? 'bg-electric-teal/20 border border-electric-teal/40 shadow-[inset_0_0_10px_rgba(45,212,191,0.2)]' : 'bg-white/5 border border-white/10'"
            >
              <div 
                class="absolute top-1 w-4 h-4 rounded-full transition-all duration-500 shadow-lg"
                :class="is2FAEnabled ? 'right-1 bg-electric-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]' : 'left-1 bg-white/20'"
              ></div>
            </div>
          </div>

          <div 
            @click="togglePush"
            class="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/[0.07] transition-all cursor-pointer group"
          >
            <div class="flex items-center gap-4">
              <Bell class="w-5 h-5 transition-colors duration-300" :class="isPushEnabled ? 'text-electric-teal' : 'text-white/20'" />
              <div>
                <div class="text-sm font-bold transition-colors" :class="isPushEnabled ? 'text-white' : 'text-white/40'">Push Notifications</div>
                <div class="text-[10px] uppercase font-bold tracking-widest mt-1 transition-colors" :class="isPushEnabled ? 'text-electric-teal/60' : 'text-white/20'">
                  {{ isPushEnabled ? 'Active • Market alerts' : 'Muted' }}
                </div>
              </div>
            </div>
            <div 
              class="w-10 h-6 rounded-full transition-all duration-500 relative shrink-0"
              :class="isPushEnabled ? 'bg-electric-teal/20 border border-electric-teal/40 shadow-[inset_0_0_10px_rgba(45,212,191,0.2)]' : 'bg-white/5 border border-white/10'"
            >
              <div 
                class="absolute top-1 w-4 h-4 rounded-full transition-all duration-500 shadow-lg"
                :class="isPushEnabled ? 'right-1 bg-electric-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]' : 'left-1 bg-white/20'"
              ></div>
            </div>
          </div>
        </div>
      </ArdentiaCard>

      <ArdentiaCard title="Ardentia Ecosystem" hover-glow glow-color="purple">
        <div class="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-2xl border border-white/5">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="space-y-2 text-center md:text-left">
              <h3 class="text-lg font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                Expand your Horizons
                <span class="inline-block w-2 h-2 rounded-full bg-plasma-purple animate-pulse"></span>
              </h3>
              <p class="text-sm text-white/40">Join our growing ecosystem and stay updated with<br>the latest in financial technology.</p>
            </div>
            
            <div class="flex gap-3">
              <a 
                href="https://ardentia-landing-page.vercel.app/" 
                target="_blank" 
                class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold transition-all group"
              >
                <Globe class="w-5 h-4 text-electric-teal group-hover:scale-110 transition-transform" />
                Landing Page
                <ExternalLink class="w-6 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.instagram.com/ardentiasystems/" 
                target="_blank" 
                class="flex items-center gap-2 px-4 py-2 bg-plasma-purple/10 hover:bg-plasma-purple/20 border border-plasma-purple/20 rounded-xl text-sm font-bold transition-all group"
              >
                <Instagram class="w-3 h-4 text-plasma-purple group-hover:scale-110 transition-transform" />
                Instagram
                <ExternalLink class="w-4 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </ArdentiaCard>
    </div>
  </div>
</template>
