import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue';
import Awards from '../pages/Awards.vue';
import Education from '../pages/Education.vue';
import Experience from '../pages/Experience.vue';
import Interests from '../pages/Interests.vue';
import Skills from '../pages/Skills.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: About
        },
        {
            path: '/awards',
            component: Awards
        },
        {
            path: '/education',
            component: Education
        },
        {
            path: '/experience',
            component: Experience
        },
        {
            path: '/interests',
            component: Interests
        },
        {
            path: '/skills',
            component: Skills
        },
    ],
    history: createWebHistory()
})

export default router;