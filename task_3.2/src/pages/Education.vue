<template>
    <div class="page-content">
        <h1 class="page-title__h1">Education</h1>
        <BlockItem
        v-for="educationItem in educationList"
        :key="educationItem.id"
        :main-title="educationItem.mainTitle"
        :subtitle="educationItem.subtitle"
        :date="educationItem.date"
        :body="educationItem.body"
        :gpa="educationItem.gpa"
        />
    </div>
</template>

<script lang="ts">
import BlockItem from '@/components/BlockItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        BlockItem,
    },
    data() {
        return {
            educationList: [
                {
                    id: 1,
                    mainTitle: 'University of Colorado boulder',
                    subtitle: 'Bachelor of Science',
                    date: 'August 2006 - May 2010',
                    body: 'Computer Science - Web Development Track',
                    gpa: 'GPA: 3.23',
                },
                {
                    id: 2,
                    mainTitle: 'James Buchanan High School',
                    subtitle: 'Technology Magnet Program',
                    date: 'August 2002 - May 2006',
                    body: '',
                    gpa: 'GPA: 3.23',
                },
            ],
        };
    },
});
</script>
