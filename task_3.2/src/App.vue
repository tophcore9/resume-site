<template>
    <Nav></Nav>
    <router-view class="content"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav.vue';

export default defineComponent({
    components: {
        Nav
    },
    data() {
        return {

        }
    },
});
</script>

<style>
    @import url(./assets/css/app.css);
</style>