<template>
    <section>
        <div >
            <article class="container py-5 ">
                <h2>OUR PRODUCTS</h2>
                <p class="text-wrap" style="width: 30rem;">
                    There is no secret that circumstances are important.
                    the marine environment around island Frøya forms an ideal basis for marine
                    diversity and is among the best in the world.
                </p>
                <product-eng-list></product-eng-list>
            </article>
        </div>
    </section>
</template>


<script>
import ProductEngList from '@/components/English-site/ProductPage/ProductEngList.vue'
export default {
  components: { ProductEngList },
    setup() {
        
    },
}
</script>

<style scoped>
article,div{
    background-color: white;
}
h1,h2,h3,h4,h5,p{
    color:black;
}
</style>