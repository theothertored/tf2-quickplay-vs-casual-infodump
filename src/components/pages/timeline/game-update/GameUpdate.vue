<script setup lang="ts">
import { GameFindingTimeline_InjectionKey, GameFindingTimeline_Level, GameFindingTimeline_Level_InjectionKey } from '@/components/pages/timeline/game-update/GameUpdateSetUtils';
import { useSettingsStore } from '@/settings/settings';
import { useMounted } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { computed, inject, reactive, watch } from 'vue';
import SourceLink from '@/components/display/SourceLink.vue';

const settings = useSettingsStore();

const props = defineProps<{
    date: string;
    level: GameFindingTimeline_Level;
    newsLink?: string;
    blogLink?: string;
    wikiLink?: string;
    sdkLink?: string;
}>();

const timeline = inject(GameFindingTimeline_InjectionKey);
if (!timeline) throw new Error('timeline must be injected');

const { timelineLevel } = storeToRefs(settings);

const isVisible = computed(() => timelineLevel.value >= props.level);

const pointId = Symbol('TF2Update');

const isMounted = useMounted();

watch(() => isMounted.value && isVisible.value, register =>
{
    if (register)
    {
        timeline.registerPoint(reactive({
            id: pointId,
            date: props.date,
        }));
    }
    else
    {
        timeline.unregisterPoint(pointId);
    }
});

const prevPoint = computed(() =>
{
    const currentIndex = timeline.points.value.findIndex(p => p.id === pointId);
    if (currentIndex > 0)
        return timeline.points.value[currentIndex - 1]!;
});

const daysDiff = computed(() =>
{
    if (prevPoint.value)
        return timeline.getDayDifference(prevPoint.value.date, props.date);
});

function daysDiffToString(d: number)
{
    if (d === 0)
        return 'same day';
    else if (d < 365)
        return `${d} day${d === 1 ? '' : 's'} later`;
    else
    {
        const y = (d / 365).toFixed(1).replace('.0', '');
        return `${y} year${y === '1' ? '' : 's'} later`;
    }
}

</script>

<template>

    <div v-if="isVisible"
        class="game-update"
        :class="{
            [level]: timelineLevel !== GameFindingTimeline_Level.Major
        }">
        <div class="date" ref="date">
            <div class="diff">
                <template v-if="(typeof daysDiff === 'number') && isVisible && prevPoint">
                    {{ daysDiffToString(daysDiff) }}
                </template>
                <template v-else>&nbsp;</template>
            </div>
            <div>{{ date }}</div>
            <div class="diff">&nbsp;</div>
        </div>
        <main>
            <slot></slot>
        </main>
        <div v-if="!settings.timelineHideLinks" class="sources">
            <SourceLink v-if="newsLink" :href="newsLink" text="Steam" />
            <SourceLink v-if="blogLink" :href="blogLink" text="Blog" />
            <SourceLink v-if="wikiLink" :href="wikiLink" text="Wiki" />
            <SourceLink v-if="sdkLink" :href="sdkLink" text="SDK" />
        </div>
    </div>

</template>

<style scoped lang="scss">
.diff {
    text-align: right;
    flex-shrink: 0;
    flex-grow: 0;
    @include t-sec;
    color: $fg-sec;
}

.game-update {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    &.major {
        color: $fg-tf-orange;

        > .date {
            font-weight: bold;
        }
    }

    &.patch {
        @include t-sec;
        color: $fg-sec;
    }

    > .date {
        width: 85px;
        text-align: right;
        flex-shrink: 0;
        flex-grow: 0;
    }

    > .dot {
        $s: 10px;
        width: $s;
        height: $s;
        border-radius: 50%;
        flex-shrink: 0;
        flex-grow: 0;
        background-color: currentColor;
    }

    > .importance {
        width: 50px;
        flex-shrink: 0;
        flex-grow: 0;
    }

    > main {
        border: $border-soft;
        padding: 8px;
        background-color: $bg-surface;
        overflow-wrap: anywhere;
    }

    > .sources {
        display: flex;
        flex-direction: column;
        @include t-sec;
        color: $fg-tet;
    }

    :deep(> main) {
        ul {
            margin: 0;
            padding-left: 24px;

            &:not(:first-child) {
                margin-top: 4px;
            }
        }
    }
}
</style>