import { ref } from "vue";

const recipesNorService = (function(){
    const recipesNor = ref([
        {
        recipeImage: "Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg",
        recipeName: "Ginmarinert Frøya laks",
        recipeDescription: "Marinert laks med agurk, gin og rips",
        recipeLink: "GinMarinatedSalmonNor",
        },
        {
            recipeImage: "Laksparmesancrust.webp",
            recipeName: "Frøya laks med hvitløk & permesan-crust",
            recipeDescription: "Grønn potetmøs & urteolje",
            recipeLink: "SalmonWithGarlicAndParmesanCrustNor",
        },
        {
            recipeImage: "Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg",
            recipeName: "Laks og champagne beurre blanc",
            recipeDescription: "Pannestekt laks med champagne beurre blanc, aspargesbønner og hasselback poteter",
            recipeLink: "SalmonAndChampagneBeurreBlancNor",
        },
        {
            recipeImage: "Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg",
            recipeName: "Ginmarinert Frøya laks",
            recipeDescription: "Marinert laks med agurk, gin og rips",
            recipeLink: "GinMarinatedSalmonNor",
        },
        {
            recipeImage: "Laksparmesancrust.webp",
            recipeName: "Frøya laks med hvitløk & permesan-crust",
            recipeDescription: "Grønn potetmøs & urteolje",
            recipeLink: "SalmonWithGarlicAndParmesanCrustNor",
        },
        {
            recipeImage: "Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg",
            recipeName: "Laks og champagne beurre blanc",
            recipeDescription: "Pannestekt laks med champagne beurre blanc, aspargesbønner og hasselback poteter",
            recipeLink: "SalmonAndChampagneBeurreBlancNor",
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