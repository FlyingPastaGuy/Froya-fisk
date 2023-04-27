import { ref } from "vue";

const recipesEngService = (function(){
    const recipesEng = ref([
        {
            recipeImage: "Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg",
            recipeName: "Ginmarinert Frøya salmon",
            recipeDescription: "Marinated salmon with cucumber, gin og Red currant",
            recipeLink: "GinMarinatedSalmonEng",
        },
        {
            recipeImage: "Laksparmesancrust.webp",
            recipeName: "Frøya salmon with garlic & parmesan-crust",
            recipeDescription: "green mashed potatoes & herbal oil",
            recipeLink: "SalmonWithGarlicAndParmesanCrustEng",
        },
        {
            recipeImage: "Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg",
            recipeName: "Salmon and champagne beurre blanc",
            recipeDescription: "pan fried salmon with champagne beurre blanc, asparagus beans and hazelnut potatoes",
            recipeLink: "SalmonAndChampagneBeurreBlancEng",
        },
        {
            recipeImage: "Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg",
            recipeName: "Ginmarinert Frøya salmon",
            recipeDescription: "Marinated salmon with cucumber, gin og Red currant",
            recipeLink: "GinMarinatedSalmonEng",
        },
        {
            recipeImage: "Laksparmesancrust.webp",
            recipeName: "Frøya salmon with garlic & parmesan-crust",
            recipeDescription: "green mashed potatoes & herbal oil",
            recipeLink: "SalmonWithGarlicAndParmesanCrustEng",
        },
        {
            recipeImage: "Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg",
            recipeName: "Salmon and champagne beurre blanc",
            recipeDescription: "pan fried salmon with champagne beurre blanc, asparagus beans and hazelnut potatoes",
            recipeLink: "SalmonAndChampagneBeurreBlancEng",
        }
    ]);

    const getAllrecipesEng = () => {
        return recipesEng;
    }

    return{
        getAllrecipesEng
    }
}());

export default recipesEngService;