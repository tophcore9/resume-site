<template>
    <div class="page-content">
        <h1 class="page-title__h1">Experience</h1>
        <BlockItem 
        v-for="experienceItem in experienceList" 
        :key="experienceItem.id"
        :main-title="experienceItem.mainTitle"
        :subtitle="experienceItem.subtitle"
        :date="experienceItem.date"
        :body="experienceItem.body"
        :gpa="experienceItem.gpa"
        />
    </div>
</template>

<script lang="ts">
import BlockItem from '@/components/BlockItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        BlockItem
    },
    data() {
        return {
            experienceList: [
                {
                    id: 1,
                    mainTitle: 'Senior Web Developer',
                    subtitle: 'Intelitec Solutions',
                    date: 'March 2013 - Present',
                    body: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                    gpa: ''
                },
                {
                    id: 2,
                    mainTitle: 'Web Developer',
                    subtitle: 'Intelitec Solutions',
                    date: 'December 2011 - March 2013',
                    body: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                    gpa: ''
                },
                {
                    id: 3,
                    mainTitle: 'Junior Web Designer',
                    subtitle: 'Shout! Media Productions',
                    date: 'July 2010 - December 2011',
                    body: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
                    gpa: ''
                },
                {
                    id: 4,
                    mainTitle: 'Web Design Intern',
                    subtitle: 'Shout! Media Productions',
                    date: 'September 2008 - June 2010',
                    body: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
                    gpa: ''
                },
            ]
        }
    },
});
</script>
