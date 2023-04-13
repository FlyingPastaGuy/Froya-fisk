<template>
<main-nor-navbar></main-nor-navbar>
    <div>
        <article class="container">
            <div class="row mb-4">
                <div class="col-12 col-md ">
                    <h3>Om Frøya</h3>
                    <p>
                        Bærekraft er viktig 
                        for Frøya
                    </p>

                        <p>
                            Frøya Laks er et norsk oppdrettsanlegg som produserer laks på øya
                            Frøya i Trøndelag. Bedriften har gokus på bærekraftig produksjon av
                            laks, og har implementert flere tiltak for å redusere miljøpåvirkningen
                            fra sin virksomhet.
                        </p>

                        <p>
                            For eksempel har Frøya Laks jobbet aktivt med å redusere forbruket av
                            for til laksen, ved å blant annet utvikle mer effektive fortyper. Dette fører
                            til mindre utslipp av næringsstoffer i havet og reduserer risikoen for 
                            algeoppblomstring. Videre har bedriften fokus på å redusere bruken av
                            medikamenter i oppdrettsanlegget, og bruker kun legemilder når det er
                            nødvendig for å ivareta fiskevelferden.
                        </p>
                </div>
                <div class="col">
                    <img src="@/assets/Images/laks-ferdig-pa-band.jpg" alt="" srcset="" class="img-fluid border border-0">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md mb-4">
                    <div class="card">
                        <img src="" alt="" class="card-img-top">
                        <div class="card-body">
                            <h4 class="card-title">
                                Les mer om Frøyas
                                tiltak innenfor
                                bærekraft
                            </h4>
                            <router-link to="/AboutUsNorSustainable">
                                <input type="button" value="les mer" class="btn">
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <p>
                        Frøya Laks har også en åpen og transparent tilnærming til sin virksomhet,
                        og kommuniserer jevnlig med naboer, lokale myndigheter og samfunnet
                        generelt om sine aktiviteter og miljøtiltak. Bedriften jobber også med å 
                        utvikle nye teknologier og metoder for å gjøre oppdrettsvirksomheten 
                        enda mer bærekraftig og miljøvennlig.
                        I tillegg til miljøtiltakene, fokuserer Frøya Laks også på dyrevelferd og 
                        etikk i sin virksomhet. Bedriften har blant annet et eget etisk råd som 
                        overvåker driften, og sørger for at fiskevelferden ivaretas på en best mulig 
                        måte.
                        Alt i alt er Frøya Laks en bedrift som har tatt bærekraft på alvor, og som 
                        jobber kontinuerlig med å utvikle og forbedre sin virksomhet for å 
                        redusere miljøpåvirkningen og ivareta både dyrevelferd og 
                        samfunnsansvar.
                    </p>
                </div>
            </div>
        </article>
    </div>
<nor-footer></nor-footer>
</template>


<script>
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'
import NorFooter from '@/components/shared/NorFooter.vue'
export default {
  components: { MainNorNavbar, NorFooter },
    setup() {
        
    },
}
</script>

<style scoped>
h4{
    color: black;
}
</style>