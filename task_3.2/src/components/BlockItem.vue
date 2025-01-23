<template>
    <div class="block">
        <div class="title-part">
            <h2 class="page-title__h2">{{ mainTitle }}</h2>
            <h3 class="page-title__h3">{{ subtitle }}</h3>
        </div>
        <p class="work-date">{{ date }}</p>
        <div class="work-description">
            <div>{{ body }}</div>
            <p>{{ gpa }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Block',
    props: {
        mainTitle: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        gpa: {
            type: String,
            required: false,
        },
    },
});
</script>

<style scoped>
    @import url(../assets/css/block_item.css);
</style>
