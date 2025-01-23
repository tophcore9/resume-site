<template>
    <img 
    class="icon"
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

<style scoped>
.icon {
    max-height: 32px;
}
@media (max-width: 675px) {
    .icon {
        max-height: 24px;
    }
}
</style>