<script setup lang="ts" generic="T">
import CheckableContainer from '@/components/input/checkables/CheckableContainer.vue';

const model = defineModel<T>({ required: true });

const props = defineProps<{
    value: T;
}>();

</script>

<template>
    <CheckableContainer>
        <template #input>
            <input type="radio" v-model="model" :value="value" />
        </template>
        <slot></slot>
    </CheckableContainer>
</template>

<style scoped lang="scss"></style>