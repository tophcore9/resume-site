<template>
    <div class="page-content">
        <h1 class="page-title__h1">Skills</h1>
        <h2 class="page-title__h2">Programming languages & tools</h2>
        <div class="skills-icons">
            <IconItem
            v-for="(skill, index) in skills"
            :key="index"
            :root-path="skillIconsPath"
            :icon-name="skill"
            :icon-format="iconsFormat"
            />
        </div>
        <h2 class="page-title__h2">Workflow</h2>
        <ul class="list">
            <li class="list-item">Mobile-First, Responsive Design</li>
            <li class="list-item">Cross Browser Testing & Debugging</li>
            <li class="list-item">Cross Functional Teams</li>
            <li class="list-item">Agile Development & Scrum</li>
        </ul>
    </div>
</template>

<script lang="ts">
import IconItem from '@/components/IconItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IconItem
    },
    data() {
        return {
            skillIconsPath: '/src/assets/icons/',
            iconsFormat: 'svg',
            skills: [
                'html5',
                'css3',
                'js',
                'jquery',
                'sass',
                'less',
                'bootstrap',
                'bulma',
                'gulp',
                'npm',
                'vue',
                'nuxt',
                'webpack',
                'vite'
            ]
        }
    }
});
</script>

<style scoped>
    @import url(../assets/css/skills.css);
</style>
