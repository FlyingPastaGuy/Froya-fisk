<template>
<main-nor-navbar></main-nor-navbar>
    <div>
        <article class="container mt-5">
            <div class="row">
                <div class="col-12 col-md me-5 mb-5">
                    <img src="@/assets/Images/laks-ferdig-pa-band.jpg" alt="" srcset="" class="img-fluid border border-0">
                </div>
                <div class="col ms-4">
                    <h2>BÆREKRAFT</h2>
                    <p class="text-wrap" style="width:10rem">
                        Bærekraft viktig
                        for Frøya
                    </p>
                    <p class="mt-5">
                        Frøya Laks er et norsk oppdrettsanlegg som produserer laks på øya 
                        Frøya i Trøndelag. Bedriften har fokus på bærekraftig produksjon av 
                        laks, og har implementert flere tiltak for å redusere miljøpåvirkningen 
                        fra sin virksomhet.
                    </p>
                    <p class="mt-5">
                        For eksempel har Frøya Laks jobbet aktivt med å redusere forbruket av 
                        for til laksen, ved å blant annet utvikle mer effektive fôrtyper. Dette fører 
                        til mindre utslipp av næringsstoffer i havet og reduserer risikoen for 
                        algeoppblomstring. Videre har bedriften fokus på å redusere bruken av 
                        medikamenter i oppdrettsanlegget, og bruker kun legemidler når det er 
                        nødvendig for å ivareta fiskevelferden.
                    </p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <p class="text-wrap" style="width:35rem">
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
                <div class="col"></div>
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
