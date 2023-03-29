<template>
    <article class="col-4 mb-4">
        <div class="card">
            <h3 class="mb-0">FRØYA {{ProductName}}</h3>
            <img src='../../../assets/Images/froys-laks-midloin-kopi.jpg' alt="" class="card-img-top rounded-0">
            <div class="card-body">
                <p class="card-text">vekt: {{ProductWeight}}g</p>
                <p class="card-text">pris: {{ProductPrice}}</p>
                <p v-if="ProductInventory === true" class="card-text true"> på lager</p>
                <p v-else class="card-text false"> ikke på lager</p>
                <router-link :to="`/${ProductLink}`">
                    <input type="button" value="Kjøp" class="btn">
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
        ProductImage: String,
        ProductName: String,
        ProductWeight: Number,
        ProductPrice: Number,
        ProductInventory:Boolean,
        ProductLink: String
    }
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