<template>
    <div class="container">
        <div class="contact-info">
            <h1 class="fullname">Clarence <span class="marked-text">Taylor</span></h1>
            <div class="address">
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
.container {
    margin: 0 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;

    color: #888e95;
}
.address {
    font-weight: 700;
    line-height: 24px;
}
.contact-info {
    text-transform: uppercase;
}
.fullname {
    color: #353a40;
    font-size: 64px;
}
.marked-text {
    color: #b16241;
}
.networks {
    display: flex;
    gap: 24px;
}
.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    background-color: #4a5057;
    border-radius: 50%;
    
    transition: background-color 0.2s ease-out;
    
    &:hover {
        background-color: #b16241;
    }
}
</style>
