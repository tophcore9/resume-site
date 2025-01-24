<template>
    <div class="burger-menu">
        <div class="header-part">
            <img src="../assets/icons/mini-logo.svg" alt="logo" @click="$router.push('/')" />
            <button class="more-button" v-if="!isExpanded" @click="isExpanded = true"></button>
            <button class="less-button" v-if="isExpanded" @click="isExpanded = false"></button>
        </div>
        <Transition v-show="isExpanded == true">
            <div class="menu-items">
                <NavItem 
                v-for="(item, index) in navItems"
                :key="index"
                :value="item"
                @click="isExpanded = false"
                />
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItem from './NavItem.vue';

export default defineComponent({
    components: {
        NavItem,
    },
    data() {
        return {
            isExpanded: false,
        };
    },
    props: {
        navItems: {
            type: Array<string>,
            required: true,
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/burger_menu.css);
</style>
