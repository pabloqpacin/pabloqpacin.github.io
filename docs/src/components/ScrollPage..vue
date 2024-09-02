<template>
    <div class="slider" ref="slider">
        <div class="navbar">
            <a href="#" @click="moveScroll(1)">HOME</a>
            <a href="#" @click="moveScroll(2)">DOS</a>
            <a href="#" @click="moveScroll(3)">TRES</a>
            <a href="#" @click="moveScroll(4)">CUATRO</a>
        </div>
        <div class="content_page">
            <h1>Home</h1>
            <div style="height: 1200px;"></div>
        </div>
        <div class="content_page">
            <h1>Contenido 2</h1>
        </div>
        <div class="content_page">
            <h1>Contenido 3</h1>
        </div>
        <div class="content_page">
            <h1>Contenido 4</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                slider: null,
                height: null,
            }
        },
        mounted(){
            this.slider = this.$refs.slider;
            this.height = this.slider.offsetHeight;
        },
        methods:{
            moveScroll(n){
                n = n - 1;
                this.slider.scrollTo({
                    top: this.height * n,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style>
    .slider {
        position: relative;
        height: 100vh;
        overflow: scroll;
    }
</style>
