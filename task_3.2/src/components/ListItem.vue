<template>
    <li class="list-item">
        <div class="checkmark-icon">
            <img :src="checkmarkIcon" alt="checkmarkIcon" />
        </div>
        <div>
            {{ item }}
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: String,
            required: true,
        },
        checkmarkIcon: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/list_item.css);
</style>
