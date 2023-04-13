<template class="body">
        <section class="sectionImg"> 
            <img src="../../assets/Images/grid_0.png" class="headerImg" alt="">
        </section>
        
<nor-navbar></nor-navbar>

    <section class="container ">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <article class="col">
                <div class="card bg-transparent border-0 mb-5">
                    <div class="card-body">
                        <h1 class="card-titlight">Fersk norsk laks</h1>
                        <p class="card-text">Fra kalde og klare farvann langs kysten på Frøya.</p>
                        <router-link to="">
                            <input type="button" value="Les mer om våre produkter" class="btn btn-outline-light" style="border-radius: 0%;">
                        </router-link>
                    </div>
                </div>
            </article>
        </div>
    </section> 

    <section class="container">
        <h3 class="text-wrap text-lg-start px-3" >Frøya sin laks er ikke populær hos sushi-kokkene uten grunn</h3>

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <article class="col">
                <div class="card bg-transparent border-0 mb-5">
                    <img src="../../assets/Images/2hours.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                    <div class="card-body">
                        <h3 class="card-title text-light">PAKKET I LØPETAV TO TIMER</h3>
                        <p class="card-text">Fra laksen er sprell levende til den er pakket og klar for rask nedkjøling
                            går det normalt kun to timer. Slik er du garantert laks av den fineste kvaliteten og med
                            den beste smaken når du velger Frøya laks</p>
                        <router-link to="" class="pt-4">
                            <input type="button" value="Les mer om Frøya" class="btn btn-outline-light" style="border-radius: 0%;">
                        </router-link>
                    </div>
                </div>
            </article>

            <article class="col" >
                <div class="card bg-transparent border-0">
                    <img src="../../assets/Images/Loins.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                    <div class="card-body">
                        <h3 class="card-title text-light">BACK LOIN ELLERMID LOIN</h3>
                        <p class="card-text">Sushi elskerens førstevalg er det
                            delikate ryggstykket «back-loin».
                            Du får flotte, ensartede og faste skiver fisk. 
                            Midtstykket er litt fetere og saftigere. Dette 
                            setter en ekstra god smak og gir en fin, delikat 
                            munnfølelse når du tilbereder fisken på grillen.</p>
                    </div>
                </div>
            </article>

            <article class="col">
                <div class="card bg-transparent border-0">
                    <img src="../../assets/Images/gradernord.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                    <div class="card-body">
                        <h3 class="card-title text-light">FRA FRØYA PÅTRØNDELAGSKYSTEN</h3>
                        <p class="card-text">Det er ingen hemmelighet at omgivelsene er viktige. 
                            Havmiljøet rundt øya Frøya danner et ideelt grunnlag 
                            for marint mangfold og er blant de ypperste i verden.
                            Tidevann og sterke strømmer fører kontinuerlig inn rent,
                            næringsrikt sjøvann.</p>
                    </div>
                </div>
            </article>
        </div>

    </section>

<our-products-nor></our-products-nor>

<section class="container" style="margin-bottom: 15rem; margin-top: 10rem;">
    <div class="row mb-3 justify-content-start bearekraftigRow">
        <div class="col-6 flex-fill">
            <h1 style="margin-bottom: 3rem;">OPPLEV BÆREKRAFTIG LAKS FRA FRØYA</h1>
            <h2 style="width: 40rem;">
                Vi hos Frøya Laks er stolte av å være en ledende produsent av bærekraftig oppdrettet laks. 
                Vår filosofi er å respektere naturens grenser, ta vare på våre lokale samfunn og samtidig produsere laks av høyeste kvalitet.
                Sunn og deilig på en gang. Vi tror på at det beste måltidet er også det sunneste,
                og vår bærekraftige laks fra Frøya gir deg nettopp det - en smakfull og sunn opplevelse
                Med en produksjonsprosess som er omsorgsfull og ansvarlig, kan du nyte vår laks med god samvittighet.
            </h2>
        </div>
        <div class="col-6 clearfix center-block" >
            <img src="@/assets/Images/laks-ferdig-pa-band.jpg" class="img-fluid bearekraftImg" alt="">
        </div>
    </div>

    <router-link to="">
        <input type="button" value="Les mer om bærekraft" class="btn btn-outline-light" style="border-radius: 0%;">
    </router-link> 
</section>

    <hr class="my-5" style="color:#D1D1D1;">

    
    <section class="container text-center" style="margin-bottom: 15rem; margin-top: 10rem;">
        <h3>VÅRE PRODUKTER FINNER DU HOS FØLGENDE KJEDER</h3>

        <div class="row justify-content-center row-cols-1 row-cols-lg-4 g-4">
            <div class="col">
                <img src="@/assets/Images/spar.png" alt="">
            </div>
            <div class="col">
                <img src="@/assets/Images/kiwi.png" alt="">
            </div>
            <div class="col">
                <img src="@/assets/Images/jacobs.png" alt="">
            </div>
            <div class="col">
                <img src="@/assets/Images/meny.png" alt="">
            </div>
        </div>
    </section>

    <section class="container " style="margin-bottom: 7rem; margin-top: 10rem;">
        <h3 class="px-3">Smakfulle oppskrifter</h3>
        <p class="text-wrap px-3" >Se våre fristende oppskrifter og bli inspirert.  
            Frøya laks passer både til hverdags og til festlige anledninger. 
            Like godt på sommeren som på vinteren.</p>
    </section>

    <section class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <article class="col">
            <div class="card h-100 border-0" style="background-color: #151517;">
                <img src="@/assets/Images/Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg" alt="" class="card-img-top align-self-center cardImg">
                <div class="card-body " style="background-color: white;">
                    <p class="card-text text-dark text-wrap" >Ginmarinert Frøya laks Marinert laks med agurk, gin og rips</p>
                    <router-link to="">
                        <input type="button" value="se oppskrift" class="btn btn-outline-dark" style="border-radius: 0%;">
                    </router-link>
                </div>
            </div>
        </article>

        <article class="col">
            <div class="card h-100 border-0" style="background-color: #151517;">
                <img src="@/assets/Images/Froya-til-fest-hovedrett-med-rodbete-marinert-laks.jpg" alt="" class="card-img-top align-self-center cardImg">
                <div class="card-body" style="background-color: white;">
                    <p class="card-text text-dark text-wrap">Ovnsbakt laks med urter & hvitløks-crust, grønn potetmos & urteolje</p>
                    <router-link to="">
                        <input type="button" value="se oppskrift" class="btn btn-outline-dark" style="border-radius: 0%;">
                    </router-link>
                </div>
            </div>
        </article>

        <article class="col">
            <div class="card h-100 border-0" style="background-color: #151517;">
                <img src="@/assets/Images/Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg" alt="" class="card-img-top align-self-center cardImg">
                <div class="card-body" style="background-color: white;">
                    <p class="card-text text-dark text-wrap" >Pannestekt laks med champagne beurre blanc, aspargesbønner og Hasselbäck poteter</p>
                    <router-link to="">
                        <input type="button" value="se oppskrift" class="btn btn-outline-dark" style="border-radius: 0%;">
                    </router-link>
                </div>
            </div>
        </article>

    </div>
    
    </section>



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
@media screen and (min-width: 577px) {
    .cards-wrapper {
        display: flex;
    }
}

</style>