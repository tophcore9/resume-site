<template>
    <div class="page-content">
        <h1 class="page-title__h1">Education</h1>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">University of Colorado boulder</h2>
                <h3 class="page-title__h3">Bachelor of Science</h3>
            </div>
            <p class="work-date">August 2006 - May 2010</p>
            <div class="work-description">
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
            </div>
        </div>
        <div class="block">
            <div class="title-part">
                <h2 class="page-title__h2">James Buchanan High School</h2>
                <h3 class="page-title__h3">Technology Magnet Program</h3>
            </div>
            <p class="work-date">August 2002 - May 2006</p>
            <div class="work-description">
                <p>GPA: 3.23</p>
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
