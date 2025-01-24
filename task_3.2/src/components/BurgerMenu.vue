<template>
    <div class="burger-menu">
        <div class="header-part">
            <img src="../assets/icons/mini-logo.svg" alt="logo" @click="$router.push('/')" />
            <button class="more-button" v-if="!isExpanded" @click="isExpanded = true"></button>
            <button class="less-button" v-if="isExpanded" @click="isExpanded = false"></button>
        </div>
        <Transition v-show="isExpanded == true">
            <div class="menu-items">
                <MenuItem v-for="(item, index) in menuItems" :key="index" :value="item" @click="isExpanded = false" />
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from './MenuItem.vue';

export default defineComponent({
    components: {
        MenuItem
    },
    data() {
        return {
            isExpanded: false,
        };
    },
    props: {
        menuItems: {
            type: Array<string>,
            required: true,
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/burger_menu.css);
</style>
