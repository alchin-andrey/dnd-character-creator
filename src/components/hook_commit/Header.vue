<template>
  <div class="header">
    <my-logo-card @click="showSettings__Main('logo')" :active="main_page.shown.logo" />
    <div class="header_col">
      <my-header-card @click="showSettings__Main('lang')" :active="main_page.shown.lang">
        <!-- <emoji v-for="n in Em_Icon" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="15"
				/> -->
        <img class="header_icon" :src="Lang_Icon" alt="Lang_Icon" />
      </my-header-card>
      <my-header-card
        @click="showSettings__Main('lvl')"
        :active="main_page.shown.lvl"
        :slots="Char_Lvl"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { useShowSettings } from "@/hooks/PAGES/common/useShowSettings.js";

const store = useStore();
const main_page = computed(() => store.state.pages.main_page);

const Em_Icon = computed(() => store.getters["dic/Em_Icon"]);
const Lang_Icon = computed(() => store.getters["dic/Lang_Icon"]);

const MY = reactive(store.state.MY.MY);
const Char_Lvl = computed(() => `lvl ${MY.level}`);

const { showSettings__Main } = useShowSettings();
</script>

<style scoped>
.header {
  height: 28px;
  margin: 0 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_col {
  height: 100%;
  display: flex;
  gap: 4px;
}

.header_icon {
  height: 18px;
}

.emoji-mart-emoji {
  padding: 0;
  line-height: 0;
}
</style>
