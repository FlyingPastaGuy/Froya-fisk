import { ref } from "vue";

const recipesNorService = (function(){
    const recipesNor = ref([
        {
        recipeImage: "",
        recipeName: "Ginmarinert Frøya laks",
        recipeDescription: "Marinert laks med agruk, gin og rips",
        recipeLink: "GinMarinatedSalmonNor",
        },
        {
            recipeImage: "",
            recipeName: "Frøya laks med hvitløk & permesan-crust",
            recipeDescription: "Grønn potetmøs & urteolje",
            recipeLink: "SalmonWithGarlicAndParmesanCrustNor",
        },
        {
            recipeImage: "",
            recipeName: "Laks og champgne beurre blanc",
            recipeDescription: "Pannestekt laks med champgne beurre blanc, aspargesbønner og hasselback poteter",
            recipeLink: "SalmonAndChampagneBeurreBlancNor",
        },
        {
            recipeImage: "",
            recipeName: "Ginmarinert Frøya laks",
            recipeDescription: "Marinert laks med agruk, gin og rips",
            recipeLink: "GinMarinatedSalmonNor",
        },
        {
            recipeImage: "",
            recipeName: "Frøya laks med hvitløk & permesan-crust",
            recipeDescription: "Grønn potetmøs & urteolje",
            recipeLink: "SalmonWithGarlicAndParmesanCrustNor",
        },
        {
            recipeImage: "",
            recipeName: "Laks og champgne beurre blanc",
            recipeDescription: "Pannestekt laks med champgne beurre blanc, aspargesbønner og hasselback poteter",
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