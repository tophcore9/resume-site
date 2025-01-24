<template>
    <Nav :nav-items="menuItems"></Nav>
    <BurgerMenu :nav-items="menuItems"/>
    <router-view class="content"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav.vue';
import BurgerMenu from './components/BurgerMenu.vue';

export default defineComponent({
    components: {
        Nav, BurgerMenu
    },
    data() {
        return {
            isBurgerMenuOpen: false,
            menuItems: [
                'About',
                'Experience',
                'Education',
                'Skills',
                'Interests',
                'Awards'
            ]
        }
    },
});
</script>

<style>
    @import url(./assets/css/app.css);
</style>