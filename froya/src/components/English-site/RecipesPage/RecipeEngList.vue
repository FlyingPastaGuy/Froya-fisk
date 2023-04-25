<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <recipe-eng-item v-for="(recipesEng,i) in RecipesEng" :key="i"
        
        :RecipeImage ="recipesEng.recipeImage"
        :RecipeName ="recipesEng.recipeName"
        :RecipeDescription ="recipesEng.recipeDescription"
        :RecipeLink ="recipesEng.recipeLink"
        
        
        ></recipe-eng-item>
    </div>
</template>

<script>
import RecipeEngItem from './RecipeEngItem.vue';
import RecipesEngService from '@/service/recipesEngService.js'
export default {
    setup() {
        const RecipesEng = RecipesEngService.getAllrecipesEng();

        return{
            RecipesEng
        }
    },
    components: {
        RecipeEngItem,
    }
}
</script>