<template>
    <div class="page-content">
        <h1 class="page-title__h1">Awards & certifications</h1>
        <ul class="list">
            <li class="list-item">Google Analytics Certified Developer</li>
            <li class="list-item">Mobile Web Specialist - Google Certification</li>
            <li class="list-item">1st Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
            <li class="list-item">1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
            <li class="list-item">2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
            <li class="list-item">1st Place - James Buchanan High School - Hackathon 2006</li>
            <li class="list-item">3rd Place - James Buchanan High School - Hackathon 2005</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
});
</script>

<style scoped>
.list-item {
    &::before {
        background: url(../assets/icons/award.svg) no-repeat center;
    }
}
</style>