<script setup lang="ts">
import { GameFindingTimeline_InjectionKey, type GameFindingTimeline_PointData } from '@/components/pages/timeline/game-update/GameUpdateSetUtils';
import { provide, ref } from 'vue';

const points = ref<GameFindingTimeline_PointData[]>([]);

provide(GameFindingTimeline_InjectionKey, {
    registerPoint(point: GameFindingTimeline_PointData)
    {
        points.value.push(point);
        points.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    },
    unregisterPoint(id: symbol)
    {
        points.value = points.value.filter(p => p.id !== id);
    },
    points,
    getDayDifference(date1, date2)
    {
        const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
});

</script>

<template>

    <div class="tf2-update-timeline">
        <slot></slot>
    </div>

</template>

<style scoped lang="scss">
.tf2-update-timeline {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>