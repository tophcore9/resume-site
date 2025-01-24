<template>
    <Nav :menu-items="menuItems"></Nav>
    <BurgerMenu :menu-items="menuItems"/>
    <Transition>
        <router-view class="content"></router-view>
    </Transition>
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