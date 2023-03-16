<template>
    <nor-navbar></nor-navbar>
    <section></section>
    <section class="container">
        <div class="text-center">
            <h2> Om Frøya</h2>
            <p></p>
            <input class="btn btn-outline-light" type="button" value="Les mer">
        </div>
    </section>
    <section class="container">
        <div class="text-center">
            <h2>Våre produkter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi neque modi odit. Quo ullam eum natus beatae! Suscipit omnis perferendis quidem, accusamus atque facilis enim neque esse amet dolorem vero vel aspernatur!</p>
            <img src="" alt="" srcset="">
            <input class="btn btn-outline-light" type="button" value="se næringsinnhold">
        </div>
        
    </section>
    <section class="container">
        <div class="text-center">
            <p>FRØYA LAKS FÅR DU TAK I HOS:</p>
        </div>
    </section>
    <section class="container">
        <div class="text-center">
            <h2>Oppskrifter</h2>
            <p>Se våre fristende oppskrifter og bli inspirert</p>
            <div>

            </div>
        </div>
    </section>
    <nor-footer></nor-footer>
</template>

<script>
import NorNavbar from '../../components/shared/NorNavbar.vue';
import NorFooter from '@/components/shared/NorFooter.vue';

export default {
    setup() {
        
    },
    components: {
        NorNavbar,
        NorFooter,
    }
}
</script>

<style scoped>

</style>