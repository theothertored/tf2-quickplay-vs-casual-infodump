<script setup lang="ts">
import CheckableContainer from '@/components/input/checkables/CheckableContainer.vue';

const isChecked = defineModel<boolean>({ required: true });

</script>

<template>
    <CheckableContainer>
        <template #input>
            <input type="checkbox" v-model="isChecked" />
        </template>
        <slot></slot>
    </CheckableContainer>
</template>

<style scoped lang="scss"></style>