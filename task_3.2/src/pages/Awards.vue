<template>
    <div class="page-content">
        <h1 class="page-title__h1">Awards & certifications</h1>
        <List 
        :items="awards"
        :checkmark-icon="checkmarkUrl"
        />
    </div>
</template>

<script lang="ts">
import List from '@/components/List.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        List
    },
    data() {
        return {
            checkmarkUrl: '/src/assets/icons/award.svg',
            awards: [
                'Google Analytics Certified Developer',
                'Mobile Web Specialist - Google Certification',
                '1st Place - University of Colorado Boulder - Emerging Tech Competition 2009',
                '1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)',
                '2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008',
                '1st Place - James Buchanan High School - Hackathon 2006',
                '3rd Place - James Buchanan High School - Hackathon 2005'
            ]
        }
    }
});
</script>