<template>
    <img 
    :src="iconPath" 
    :alt="iconName" 
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            iconPath: this.rootPath + this.iconName + '.' + this.iconFormat
        }
    },
    props: {
        rootPath: {
            type: String,
            required: true
        },
        iconName: {
            type: String,
            required: true
        },
        iconFormat: {
            type: String,
            required: false,
            default: 'svg'
        }
    },
})
</script>