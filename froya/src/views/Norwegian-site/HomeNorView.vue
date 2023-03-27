<template>
    <nor-navbar></nor-navbar>
    <section></section>
    <section class="container">
        <h3>Frøya sin laks er ikke populær hos sushi-kokkene uten grunn </h3>
        <div class="row">
            <div class="col">
                
            </div>
            <div class="col">
                <h5>PAKKET I LØPETAV TO TIMER</h5>
                <p>Fra laksen er sprell levende til den er pakket og klar for rask nedkjøling
                    går det normalt kun to timer. Slik er du garantert laks av den fineste kvaliteten og med
                    den beste smaken når du velger Frøya laks
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <h5>BACK LOIN ELLERMID LOIN</h5>
                <p>
                    Sushi elskerens førstevalg er det
                    delikate ryggstykket «back-loin».
                    Du får flotte, ensartede og faste skiver fisk. 
                    Midtstykket er litt fetere og saftigere. Dette 
                    setter en ekstra god smak og gir en fin, delikat 
                    munnfølelse når du tilbereder fisken på grillen.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <h5>FRA FRØYA PÅTRØNDELAGSKYSTEN</h5>
                <p>
                    Det er ingen hemmelighet at omgivelsene er viktige. 
                    Havmiljøet rundt øya Frøya danner et ideelt grunnlag 
                    for marint mangfold og er blant de ypperste i verden.
                    Tidevann og sterke strømmer fører kontinuerlig inn rent,
                    næringsrikt sjøvann.
                </p>
            </div>
        </div>
    </section>
    <our-products-nor></our-products-nor>
    <nor-footer></nor-footer>
</template>

<script>
import NorNavbar from '@/components/shared/NorNavbar.vue';
import NorFooter from '@/components/shared/NorFooter.vue';
import OurProductsNor from '@/components/Norwegian-site/HomePage/OurProductsNor.vue';

export default {
    setup() {
        
    },
    components: {
        NorNavbar,
        NorFooter,
        OurProductsNor,
    }
}
</script>

<style scoped>

</style>