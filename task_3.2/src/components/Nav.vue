<template>
    <nav class="nav">
        <Logo />
        <NavItem>About</NavItem>
        <NavItem>Experience</NavItem>
        <NavItem>Education</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Interests</NavItem>
        <NavItem>Awards</NavItem>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import NavItem from '@/components/NavItem.vue';

export default defineComponent({
    name: 'Nav',
    components: {
        Logo, NavItem
    },
    data() {
        return {

        }
    }
});
</script>

<style scoped>
.nav {
    width: 300px;
    height: 100%;
    
    background-color: #B16241;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
</style>