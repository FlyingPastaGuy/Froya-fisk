<template>
        <section class="sectionImg"> 
            <img src="../../assets/Images/grid_0.png" class="headerImg" alt="">
        </section>
    <nor-navbar></nor-navbar>

    <section class="container">
        <h3>Frøya sin laks er ikke populær hos sushi-kokkene uten grunn </h3>
<div class="row">
    <article class="col-4 mb-4">
        <div class="card bg-transparent">
            <img src="../../assets/Images/2hours.png" alt="" class="card-img-top align-self-start cardImg">
            <div class="card-body">
                <h3 class="card-title">PAKKET I LØPETAV TO TIMER</h3>
                <p class="card-text">Fra laksen er sprell levende til den er pakket og klar for rask nedkjøling
                    går det normalt kun to timer. Slik er du garantert laks av den fineste kvaliteten og med
                    den beste smaken når du velger Frøya laks</p>
                <router-link to="">
                    <input type="button" value="se oppskrift" class="btn">
                </router-link>
            </div>
        </div>
    </article>

    <article class="col-4 mb-4">
        <div class="card bg-transparent">
            <img src="../../assets/Images/Loins.png" alt="" class="card-img-top align-self-start cardImg">
            <div class="card-body">
                <h3 class="card-title">BACK LOIN ELLERMID LOIN</h3>
                <p class="card-text">Sushi elskerens førstevalg er det
                    delikate ryggstykket «back-loin».
                    Du får flotte, ensartede og faste skiver fisk. 
                    Midtstykket er litt fetere og saftigere. Dette 
                    setter en ekstra god smak og gir en fin, delikat 
                    munnfølelse når du tilbereder fisken på grillen.</p>

            </div>
        </div>
    </article>

    <article class="col-4 mb-4">
        <div class="card bg-transparent">
            <img src="../../assets/Images/gradernord.png" alt="" class="card-img-top align-self-start cardImg">
            <div class="card-body">
                <h3 class="card-title">FRA FRØYA PÅTRØNDELAGSKYSTEN</h3>
                <p class="card-text">Det er ingen hemmelighet at omgivelsene er viktige. 
                    Havmiljøet rundt øya Frøya danner et ideelt grunnlag 
                    for marint mangfold og er blant de ypperste i verden.
                    Tidevann og sterke strømmer fører kontinuerlig inn rent,
                    næringsrikt sjøvann.</p>

            </div>
        </div>
    </article>
</div>

<section>


</section>

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

html, body{
    margin: 0;
    padding: 0;
    max-width: 1400px;
}
.sectionImg{
    position: relative;
}
.headerImg{
    position: relative;
    left: 40%;
    max-width: 100rem;
    height: auto;
    
}
.cardImg{
    width: 50%;
}
</style>