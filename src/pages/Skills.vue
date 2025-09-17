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
        <List 
        :items="workflow"
        :checkmark-icon="checkmarkUrl"
        />
    </div>
</template>

<script lang="ts">
import IconItem from '@/components/IconItem.vue';
import List from '@/components/List.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IconItem,
        List
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
                'vite',
            ],
            checkmarkUrl: '/src/assets/icons/checkmark.svg',
            workflow: [
                'Mobile-First, Responsive Design',
                'Cross Browser Testing & Debugging',
                'Cross Functional Teams',
                'Agile Development & Scrum'
            ]
        }
    }
});
</script>

<style scoped>
@import url(../assets/css/skills.css);
</style>
