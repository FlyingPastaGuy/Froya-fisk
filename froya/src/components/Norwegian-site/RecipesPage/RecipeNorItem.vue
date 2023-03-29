<template>
    <article class="col-4 mb-4">
        <div class="card">
            <img :src="`${RecipeImage}`" alt="" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">{{RecipeName}}</h3>
                <p class="card-text">{{RecipeDescription}}</p>
                <router-link :to="`/${RecipeLink}`">
                    <input type="button" value="se oppskrift" class="btn">
                </router-link>
                
            </div>
        </div>
    </article>
</template>

<script>
export default {
    setup() {
        
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