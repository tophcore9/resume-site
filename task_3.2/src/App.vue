<template>
    <Nav></Nav>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body, #app {
    width: 100%;
    height: 100%;
}

#app {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}
</style>