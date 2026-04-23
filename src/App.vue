<script setup lang="ts">
import { PageOptions } from '@/settings/PageOptions';
import { useSettingsStore } from '@/settings/settings';
import SettingsBar from '@/components/settings-bar/SettingsBar.vue';
import TimelinePage from '@/components/pages/timeline/TimelinePage.vue';
import FeatureComparisonPage from '@/components/pages/feature-comparison/FeatureComparisonPage.vue';
import { computed, watch } from 'vue';
import { usePreferredDark, watchImmediate } from '@vueuse/core';
import { ThemeOptions } from '@/settings/ThemeOptions';

const settings = useSettingsStore();

const preferredDark = usePreferredDark();

const isDark = computed(() =>
    settings.theme === ThemeOptions.System
        ? preferredDark.value
        : settings.theme === ThemeOptions.Dark
);

watchImmediate(isDark, dark =>
{
    window.document.documentElement.classList.toggle('dark', dark);
})

</script>

<template>
    <SettingsBar />
    <TimelinePage v-if="settings.page === PageOptions.Timeline" />
    <FeatureComparisonPage v-else-if="settings.page === PageOptions.FeatureComparison" />
</template>

<style scoped lang="scss"></style>