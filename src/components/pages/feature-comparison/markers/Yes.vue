<script setup lang="ts">
import Marker from '@/components/pages/feature-comparison/markers/Marker.vue';
</script>

<template>
    <Marker symbol="✓" color="green">
        <slot>Yes</slot>
    </Marker>
</template>

<style scoped lang="scss"></style>