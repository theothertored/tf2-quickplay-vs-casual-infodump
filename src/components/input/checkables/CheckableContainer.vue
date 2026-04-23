<script setup lang="ts">
</script>

<template>
    <label class="checkable">
        <slot name="input"></slot>
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<style scoped lang="scss">
.checkable {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 8px;
    cursor: pointer;
    user-select: none;
    background: $bg-surface;

    :deep(> input) {
        margin: 0;
    }

    > span {}

    + .checkable {
        border-left: $border-soft;
    }
}
</style>