<script setup lang="ts">

const value = defineModel<number | null>({ required: true });

const props = defineProps<{
    min: number;
    max: number;
}>();

</script>

<template>
    <div class="slider">
        <section>
            <span>
                <slot></slot>
            </span>
            <input type="range"
                :min="min" :max="max"
                v-model.number="value" />
        </section>
        <section>
            <input type="number"
                :min="min" :max="max"
                v-model.number="value" />
            <button @click="value = null">
                &Cross;
            </button>
        </section>
    </div>
</template>

<style scoped lang="scss">
.slider {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;
    gap: 8px;
    cursor: pointer;
    user-select: none;
    background: $bg-surface;

    > section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        > button {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
        }
    }
}
</style>