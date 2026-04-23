<script setup lang="ts">

const props = defineProps<{
    symbol: string;
    color: 'green' | 'red';
}>();

</script>

<template>
    <span class="marker" :class="color">
        <span class="symbol">{{ symbol }}</span>
        <span class="text">
            <slot></slot>
        </span>
    </span>
</template>

<style scoped lang="scss">
.marker {
    margin-right: 6px;

    > .symbol {
        margin-right: 4px;
    }

    @mixin col($name, $col) {
        &.#{$name} {
            color: $col;
        }
    }

    @include col("red", $fg-red);
    @include col("green", $fg-green);
}
</style>