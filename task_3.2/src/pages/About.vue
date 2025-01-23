<template>
    <div class="container">
        <div class="contact-info">
            <h1 class="fullname">Clarence <span class="marked-text">Taylor</span></h1>
            <div class="page-title__h3">
                3542 Berry street · Cheyenne wells, co 80810 · (317) 585-8468 ·
                <span class="marked-text">name@email.com</span>
            </div>
        </div>
        <div class="description">
            I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value
            proposition.
        </div>
        <div class="networks">
            <a href="#">
                <div class="img-wrapper">
                    <img src="../assets/icons/facebook.svg" alt="facebook" />
                </div>
            </a>
            <a href="#">
                <div class="img-wrapper">
                    <img src="../assets/icons/twitter.svg" alt="twitter" />
                </div>
            </a>
            <a href="#">
                <div class="img-wrapper">
                    <img src="../assets/icons/linkedin.svg" alt="linkedin" />
                </div>
            </a>
            <a href="#">
                <div class="img-wrapper">
                    <img src="../assets/icons/github.svg" alt="github" />
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About',
});
</script>

<style scoped>
    @import url(../assets/css/about.css);
</style>
