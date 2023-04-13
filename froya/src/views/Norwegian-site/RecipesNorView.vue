<template>
<main-nor-navbar></main-nor-navbar>
<div class="pt-5">
    <article class="container py-2 pt-5">
        <h2>Oppskrifter med Frøya Laks</h2>
        <p class="text-wrap" style="width: 30rem;">
            oppskrifter og bli inspirert! Frøya Laks passer både til 
            hverdagsmiddager og festlige anledninger. Om sommeren er den
            perfekt på grillen.
        </p>
        <recipes-nor-list></recipes-nor-list>
    </article>
</div>
<nor-footer></nor-footer>
</template>


<script>
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue';
import NorFooter from '@/components/shared/NorFooter.vue';
import RecipesNorList from '@/components/Norwegian-site/RecipesPage/RecipesNorList.vue';
export default {
    setup() {
        
    },
    components: 
    { 
        MainNorNavbar, 
        NorFooter,
        RecipesNorList,
    }
}
</script>

<style scoped>
article,div{
    background-color: white;
}
h1,h2,h3,h4,h5,p{
    color:black;
}

</style>