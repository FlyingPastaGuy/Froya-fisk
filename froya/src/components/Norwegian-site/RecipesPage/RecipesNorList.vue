<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <recipe-nor-item v-for="(recipesNor,i) in RecipesNor" :key="i"
        
        :RecipeImage ="recipesNor.recipeImage"
        :RecipeName ="recipesNor.recipeName"
        :RecipeDescription ="recipesNor.recipeDescription"
        :RecipeLink ="recipesNor.recipeLink"
        
        
        ></recipe-nor-item>
    </div>
</template>

<script>
import RecipeNorItem from './RecipeNorItem.vue';
import RecipesNorService from '@/service/recipesNorService.js'
export default {
    setup() {
        const RecipesNor = RecipesNorService.getAllrecipesNor();

        return{
            RecipesNor
        }
    },
    components: {
        RecipeNorItem,
    }
}
</script>