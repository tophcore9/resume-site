<template>
    <a href="#" class="nav-item">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
});
</script>

<style scoped>
.nav-item {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
}
.nav-item-active {
    color: white;
}
</style>