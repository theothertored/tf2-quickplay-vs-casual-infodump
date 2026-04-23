import { PageOptions } from '@/settings/PageOptions';
import { GameFindingTimeline_Level } from '@/components/pages/timeline/game-update/GameUpdateSetUtils';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { StorageSerializers, useDark, useLocalStorage, usePreferredDark } from '@vueuse/core';
import { ThemeOptions } from '@/settings/ThemeOptions';
import { computed } from 'vue';

export const useSettingsStore = defineStore('settings', () =>
{
    function key(name: string)
    {
        return `settings.${name}`;
    }

    const page = useLocalStorage(key('page'), PageOptions.FeatureComparison);

    const theme = useLocalStorage(key('theme'), ThemeOptions.System);
    
    const displayPersonalNotes = useLocalStorage(key('personalNotes'), false);
    const displayForExport = useLocalStorage(key('displayForExport'), false);

    const timelineLevel = useLocalStorage(key('timelineLevel'), GameFindingTimeline_Level.Patch, {
        serializer: {
            read: raw => raw as GameFindingTimeline_Level,
            write: v => v,
        },
    });
    const timelineHideLinks = useLocalStorage(key('timelineHideLinks'), false);
    const timelineWidth = useLocalStorage<number | null>(key('timelineWidth'), null, { serializer: StorageSerializers.number });

    const featureComparisonLayersSbmm = useLocalStorage(key('featureComparisonLayersSbmm'), false);
    const featureComparisonLayersSbmmNotes = useLocalStorage(key('featureComparisonLayersSbmmNotes'), false);
    const featureComparisonLayersQuickplayImprovements = useLocalStorage(key('featureComparisonLayersQuickplayImprovements'), false);
    const featureComparisonLayersComtress = useLocalStorage(key('featureComparisonLayersComtress'), false);

    return {
        page,

        theme,

        displayPersonalNotes,
        displayForExport,

        timelineLevel,
        timelineHideLinks,
        timelineWidth,

        featureComparisonLayersSbmm,
        featureComparisonLayersSbmmNotes,
        featureComparisonLayersQuickplayImprovements,
        featureComparisonLayersComtress,
    };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
