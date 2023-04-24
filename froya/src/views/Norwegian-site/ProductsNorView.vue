<template>
    <main-nor-navbar></main-nor-navbar>
    <section>
        <div >
            <article class="container py-5 ">
                <h2>VÅRE PRODUKTER</h2>
                <p class="text-wrap" style="width: 30rem;">
                    Det er ingen hemmelighet at omgivelsene er viktige.
                    Havmiljøet rundt øya Frøya danner et ideelt grunnlag for marint
                    mangefold og er blant de ypperste i verden.
                </p>
                <products-nor-list></products-nor-list>
            </article>
        </div>
    </section>
    
    <nor-footer></nor-footer>
</template>

<script>
import ProductsNorList from '@/components/Norwegian-site/ProductPage/ProductsNorList.vue'
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'
import NorFooter from '@/components/shared/NorFooter.vue'
export default {
    setup() {
        
    },components: {
        ProductsNorList,
        MainNorNavbar,
        NorFooter
    }
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