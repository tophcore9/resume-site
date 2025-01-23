<template>
    <nav class="nav">
        <Logo />
        <div>About</div>
        <div>Experience</div>
        <div>Education</div>
        <div>Skills</div>
        <div>Interests</div>
        <div>Awards</div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';

export default defineComponent({
    name: 'Nav',
    components: {
        Logo
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
    
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
}
</style>