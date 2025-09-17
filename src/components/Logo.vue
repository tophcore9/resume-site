<template>
    <div class="outer-circle">
        <img src="../assets/images/logo.png" alt="Logo" class="logo"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {};
    },
});
</script>

<style scoped>
.outer-circle {
    margin-bottom: 16px;

    width: 140px;
    height: 140px;
    background-color: white;
    outline: 7px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo {
    object-position: center;
}
</style>
