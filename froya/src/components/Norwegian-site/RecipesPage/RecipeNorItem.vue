<template>
    <article class="col">
        <div class="card mb-4 h-100 border-0">
            <img :src="getProductImage()" alt="" class="card-img-top align-self-center cardImg">
            <div class="card-body" style="background-color: #EEEEEE;">
                <h3 class="card-title">{{RecipeName}}</h3>
                <p class="card-text text-dark text-wrap">{{RecipeDescription}}</p>
                <router-link :to="`/${RecipeLink}`">
                    <input type="button" value="se oppskrift" class="btn btn-outline-dark" style="border-radius: 0%;">
                </router-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {
 setup(props) {

        const getProductImage = () => {
            let ProductImage;

            try{
                ProductImage = require(`@/assets/Images/${props.RecipeImage}`);
            } catch{
                ProductImage = require(`@/assets/Images/froys-laks-midloin-kopi.jpg`);
            }
            return ProductImage;
        }

        return {
            getProductImage,
        }
    },
    props: {
        RecipeImage: String,
        RecipeName: String,
        RecipeDescription: String,
        RecipeLink: String,
    }
}
</script>

<style scoped>
h1,h2,h3,h4,h5,p{
    color:black;
}
</style>