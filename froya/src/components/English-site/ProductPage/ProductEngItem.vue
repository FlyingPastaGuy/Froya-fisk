<template>
    <article class="col-12 col-md-5 col-lg-4">
        <div class="card mt-4 text-wrap">
            <h3 class="mb-0 p-3 bg-black">FRØYA {{ProductName}}</h3>
            <img :src="getProductImage()" alt="" class="card-img-top rounded-0">
            <div class="card-body text-center font-monospace">
                <p class="card-text fw-bold">Weight: {{ProductWeight}}g</p>
                <p class="card-text fw-bold">Price: {{ProductPrice}}</p>
                <p v-if="ProductInventory === true" class="card-text true"> In stock <i class="bi bi-check"></i></p>
                <p v-else class="card-text false"> Out of Stock <i class="bi bi-x"></i></p>
                <router-link :to="`/${ProductLink}`">
                    <input type="button" value="BUY" class="btn btn-dark  w-25" style="border-radius: 0%;">
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
                ProductImage = require(`@/assets/Images/${props.ProductImage}`);
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
        ProductImage: String,
        ProductName: String,
        ProductWeight: Number,
        ProductPrice: Number,
        ProductInventory:Boolean,
        ProductLink: String
    },
}
</script>

<style scoped>

.true{
    color: #30BD57;
}

.false{
    color: #ee2828;
}

h1,h2,h4,h5,p{
    color:black;
}
h3{
    background-color: #232323;
}
</style>