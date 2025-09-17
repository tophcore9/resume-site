<template>
    <router-link :to="link" :class="{ 'menu-item-active': isOpened}" @click="onClick" class="menu-item">
        {{ value }}
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuItem',
    data() {
        return {
            link: '/' + this.value.toLowerCase(),
        };
    },
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
    computed: {
        isOpened(): boolean {
            if (this.$route.fullPath == this.link) return true;
            
            return false;
        },
    },
});
</script>

<style scoped>
    @import url(../assets/css/menu__item.css);
</style>
