<template>
    <ul class="list">
        <ListItem 
        v-for="(item, index) in items" 
        :key="index" 
        :item="item"
        :checkmark-icon="checkmarkIcon"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListItem from '@/components/ListItem.vue';

export default defineComponent({
    components: {
        ListItem,
    },
    props: {
        items: {
            type: Array<string>,
            required: true,
        },
        checkmarkIcon: {
            type: String,
            required: true
        }
    },
});
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
