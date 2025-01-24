<template>
    <nav class="nav">
        <Logo @click="$router.push('/')" />
        <MenuItem v-for="(item, index) in menuItems" :key="index" :value="item" :class="{}" />
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
    name: 'Nav',
    components: {
        Logo,
        MenuItem,
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
@import url(../assets/css/nav.css);
</style>
