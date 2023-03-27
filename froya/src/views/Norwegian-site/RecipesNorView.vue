<template>
<nor-navbar></nor-navbar>
    <article class="container py-2">
        <h2>Oppskrifter med Frøya Laks</h2>
        <p class="text-wrap" style="width: 30rem;">
            oppskrifter og bli inspirert! Frøya Laks passer både til 
            hverdagsmiddager og festlige anledninger. Om sommeren er den
            perfekt på grillen.
        </p>
        <div class="row"></div>
    </article>
<nor-footer></nor-footer>
</template>


<script>
import NorNavbar from '@/components/shared/NorNavbar.vue';
import NorFooter from '@/components/shared/NorFooter.vue';
export default {
    setup() {
        
    },
    components: 
    { 
        NorNavbar, 
        NorFooter 
    }
}
</script>

<style scoped>
article{
    background-color: white;
    border-radius: 1rem;
}
h1,h2,h3,h4,h5,p{
    color:black;
}
</style>