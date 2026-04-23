<script setup lang="ts">
import { GameFindingTimeline_Level, GameFindingTimeline_LevelNames } from '@/components/pages/timeline/game-update/GameUpdateSetUtils';
import { PageOptions, PageOptions_Names } from '@/settings/PageOptions';
import { useSettingsStore } from '@/settings/settings';
import { Enum_getValues } from '@/utils/enum-utils';
import Checkbox from '@/components/input/checkables/Checkbox.vue';
import Radio from '@/components/input/checkables/Radio.vue';
import Slider from '@/components/input/Slider.vue';
import { ThemeOptions, ThemeOptions_Names } from '@/settings/ThemeOptions';

const settings = useSettingsStore();

</script>

<template>

    <div class="settings-bar">

        <section>
            <header>Page</header>
            <main>
                <Radio v-for="page in Enum_getValues(PageOptions)"
                    v-model="settings.page"
                    :value="page">
                    {{ PageOptions_Names[page] }}
                </Radio>
            </main>
        </section>

        <section v-if="settings.page === PageOptions.FeatureComparison">
            <header>Layers</header>
            <main>
                <template v-if="settings.displayPersonalNotes">
                    <Checkbox v-model="settings.featureComparisonLayersQuickplayImprovements">Quickplay improvements</Checkbox>
                    <Checkbox v-model="settings.featureComparisonLayersSbmm">Skill-based matchmaking</Checkbox>
                    <Checkbox v-model="settings.featureComparisonLayersSbmmNotes">SBMM notes</Checkbox>
                </template>
                <Checkbox v-model="settings.featureComparisonLayersComtress">Team Comtress 2</Checkbox>
            </main>
        </section>

        <section v-if="settings.page === PageOptions.Timeline">
            <header>Timeline level</header>
            <main>
                <Radio v-for="level in Enum_getValues(GameFindingTimeline_Level)"
                    v-model="settings.timelineLevel"
                    :value="level">
                    {{ GameFindingTimeline_LevelNames[level] }}
                </Radio>
            </main>
        </section>

        <section>
            <header>Appearance</header>
            <main>
                <Checkbox v-model="settings.displayForExport">Display for export</Checkbox>
                <Checkbox v-if="settings.page === PageOptions.Timeline" v-model="settings.timelineHideLinks">Hide sources</Checkbox>
                <Slider v-if="settings.page === PageOptions.Timeline" :min="300" :max="3840" v-model="settings.timelineWidth">Width</Slider>
            </main>
        </section>

        <section>
            <header>Theme</header>
            <main>
                <Radio v-for="theme in Enum_getValues(ThemeOptions)" v-model="settings.theme" :value="theme">
                    {{ ThemeOptions_Names[theme] }}
                </Radio>
            </main>
        </section>

        <div class="credits">
            <div>by Tored</div>
            <div><a href="https://github.com/theothertored/tf2-quickplay-vs-casual-infodump">GitHub repo</a></div>
        </div>

    </div>

</template>

<style scoped lang="scss">
.settings-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    padding: 8px;
    border-bottom: $border-heading;

    > section {
        border: $border-category;
        display: flex;
        flex-direction: column;
        align-items: center;

        > header {
            padding: 4px;
            padding-bottom: 0px;
            width: 100%;
            box-sizing: border-box;
            @include t-sec;
            font-weight: bold;
        }

        > main {
            display: flex;
            flex-direction: row;
            padding: 4px;
            gap: 4px;
            flex-wrap: wrap;
            align-items: stretch;

            + main {
                border-left: $border-category;
            }
        }
    }

    >.credits {
        @include t-sec;
        color: $fg-tet;
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
            color: inherit;
        }
    }
}
</style>