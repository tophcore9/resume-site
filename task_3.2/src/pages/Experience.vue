<template>
    <div class="page-content">
        <h1 class="page-title__h1">Experience</h1>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">Senior Web Developer</h2>
                <h3 class="page-title__h3">Intelitec Solutions</h3>
            </div>
            <p class="work-date">March 2013 - Present</p>
            <div class="work-description">
                <div>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
            </div>
        </div>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">Web Developer</h2>
                <h3 class="page-title__h3">Intelitec Solutions</h3>
            </div>
            <p class="work-date">December 2011 - March 2013</p>
            <div class="work-description">
                <div>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
            </div>
        </div>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">Junior Web Designer</h2>
                <h3 class="page-title__h3">Shout! Media Productions</h3>
            </div>
            <p class="work-date">July 2010 - December 2011</p>
            <div class="work-description">
                <div>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</div>
            </div>
        </div>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">Web Design Intern</h2>
                <h3 class="page-title__h3">Shout! Media Productions</h3>
            </div>
            <p class="work-date">September 2008 - June 2010</p>
            <div class="work-description">
                <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.block {
    position: relative;
    
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
    
    color: #888E95;
}
.title-part {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
}
.work-date {
    position: absolute;
    right: 0;
    top: 0;

    color: #B16241;
}
.work-description {
    font-weight: 500;
}
</style>
