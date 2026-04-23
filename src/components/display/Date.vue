<script setup lang="ts">
import { Date_toReadableString, Date_parseYMD, Date_toYMD } from '@/utils/date-utils';
import { computed } from 'vue';

const props = defineProps<{
    value: string | Date;
}>();

const date = computed(() =>
{
    if (typeof props.value === 'string')
        return Date_parseYMD(props.value);
    else
        return props.value;
});

</script>

<template>
    <span :title="Date_toYMD(date)">{{ Date_toReadableString(date) }}</span>
</template>

<style scoped lang="scss"></style>