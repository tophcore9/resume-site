<template>
    <div class="burger-menu">
        <div class="header-part">
            <img src="../assets/icons/mini-logo.svg" alt="logo">
            <button class="more-button" v-if="!isExpanded" @click="isExpanded = true"></button>
            <button class="less-button" v-if="isExpanded" @click="isExpanded = false"></button>
        </div>
        <div class="menu-items" v-if="isExpanded == true">
            <NavItem
            v-for="(item, index) in navItems"
            :key="index"
            :value="item"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItem from './NavItem.vue';

export default defineComponent({
    components: {
        NavItem
    },
    data() {
        return {
            isExpanded: false
        }
    },
    props: {
        navItems: {
            type: Array<string>,
            required: true
        }
    }
});
</script>

<style scoped>
.burger-menu {
    display: none;

    position: fixed;
    z-index: 1;

    width: 100%;
    min-height: 70px;

    background-color: #B16241;
}
@media (max-width: 600px) {
    .burger-menu {
        display: block;
    }
}

.header-part {
    padding: 0 16px;

    width: 100%;
    height: 70px;

    box-shadow: 0 4px 4px 0 rgba(16, 24, 40, 0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-items {
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 24px;
}

.more-button {
    width: 24px;
    height: 24px;
    
    border: none;

    background: url(../assets/icons/burger-menu.svg);
}

.less-button {
    width: 24px;
    height: 24px;
    
    border: none;

    background: url(../assets/icons/close-button.svg);
}
</style>