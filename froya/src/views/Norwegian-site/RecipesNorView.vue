<template>
<nor-navbar></nor-navbar>
<div>
    <article class="container py-2">
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
import NorNavbar from '@/components/shared/NorNavbar.vue';
import NorFooter from '@/components/shared/NorFooter.vue';
import RecipesNorList from '@/components/Norwegian-site/RecipesPage/RecipesNorList.vue';
export default {
    setup() {
        
    },
    components: 
    { 
        NorNavbar, 
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

.navbar{
    background-color: #151517;
}
</style>