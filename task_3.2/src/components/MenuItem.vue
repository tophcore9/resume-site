<template>
    <router-link :to="link" :class="{ 'nav-item-active': isOpened}" @click="onClick" class="nav-item">
        {{ value }}
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
    @import url(../assets/css/nav__item.css);
</style>
