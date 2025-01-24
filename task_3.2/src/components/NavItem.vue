<template>
    <router-link :to="link" @click="onClick" class="nav-item">
        {{ value }}
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            link: '/' + this.value.toLowerCase(),
        };
    },
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
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
