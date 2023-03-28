<template>
    <div class="row">
        <recipes-nor-item v-for="(recipesNor,i) in RecipesNor" :key="i"
        
        :RecipeImage ="recipesNor.recipeImage"
        :RecipeName ="recipesNor.recipeName"
        :RecipeDescription ="recipesNor.recipeDescription"
        :RecipeLink ="recipesNor.recipeLink"
        
        
        ></recipes-nor-item>
    </div>
</template>

<script>
import RecipesNorItem from './RecipesNoritem.vue';
import RecipesNorService from '@/service/recipesNorService.js'
export default {
    setup() {
        const RecipesNor = RecipesNorService.getAllrecipesNor();

        return{
            RecipesNor
        }
    },
    components: {
        RecipesNorItem,
    }
}
</script>