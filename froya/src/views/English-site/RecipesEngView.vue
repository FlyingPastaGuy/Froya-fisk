<template>
<main-eng-navbar></main-eng-navbar>
<div class="pt-5">
    <article class="container py-2 pt-5">
        <h2>Recipes with Frøya Salmon</h2>
        <p class="text-wrap" style="width: 30rem;">
            Recipes and be inspired! Frøya salmon fits both to 
            weekday dinners and festive occasions. in summer is it
            perfect on the grill.
        </p>
        <recipe-eng-list></recipe-eng-list>
    </article>
</div>
<eng-footer></eng-footer>
</template>


<script>
import RecipeEngList from '@/components/English-site/RecipesPage/RecipeEngList.vue'
import MainEngNavbar from '../../components/shared/MainEngNavbar.vue';
import EngFooter from '../../components/shared/EngFooter.vue';

export default {
    setup() {
        
    },
    components: 
    {
        RecipeEngList, 
        MainEngNavbar,
        EngFooter,

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