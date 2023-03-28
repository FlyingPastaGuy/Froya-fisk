import { ref } from "vue";

const recipesNorService = (function(){
    const recipesNor = ref([
        {
        recipeImage: "",
        recipeName: "fisk",
        recipeDescription: "mer info",
        recipeLink: "Kontakt-oss",
        },
        {
            recipeImage: "",
            recipeName: "fisk",
            recipeDescription: "mer info",
            recipeLink: "Kontakt-oss",
        },
        {
            recipeImage: "",
            recipeName: "fisk",
            recipeDescription: "mer info",
            recipeLink: "Kontakt-oss",
        },
        {
            recipeImage: "",
            recipeName: "fisk",
            recipeDescription: "mer info",
            recipeLink: "Kontakt-oss",
        },
        {
            recipeImage: "",
            recipeName: "fisk",
            recipeDescription: "mer info",
            recipeLink: "Kontakt-oss",
        },
        {
            recipeImage: "",
            recipeName: "fisk",
            recipeDescription: "mer info",
            recipeLink: "Kontakt-oss",
        }
    ]);

    const getAllrecipesNor = () => {
        return recipesNor;
    }

    return{
        getAllrecipesNor
    }
}());

export default recipesNorService;