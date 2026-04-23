<script setup lang="ts">
import { useSettingsStore } from '@/settings/settings';

const settings = useSettingsStore();

const props = defineProps<{
    href: string;
    text?: string;
}>();

function cleanUrl(url: string): string
{
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '');
}

function getDisplayString()
{
    const url = cleanUrl(props.href);

    if (settings.displayForExport)
        return url;
    else
        return props.text ?? url;
}

</script>

<template>

    <a :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="source-link"
        :class="{
            'for-export': settings.displayForExport,
        }">
        {{ getDisplayString() }}
    </a>

</template>

<style scoped lang="scss">
.source-link {
    color: inherit;

    &.for-export {
        text-decoration: none;
    }
}
</style>