<template>
    <nav class="nav">
        <Logo @click="$router.push('/')"/>
        <NavItem 
        v-for="(item, index) in navItems"
        :key="index"
        :value="item"
        :class="{
            
        }"
        />

    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import NavItem from '@/components/NavItem.vue';

export default defineComponent({
    name: 'Nav',
    components: {
        Logo,
        NavItem,
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
.nav {
    width: 300px;
    height: 100%;

    background-color: #b16241;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
@media (max-width: 600px) {
    .nav {
        display: none;
    }
}
</style>
