<template>
<main-nor-navbar></main-nor-navbar>
    <div>
        <article class="container">
            <div class="row">
                <div class="col">
                    <h3>Om Frøya</h3>
                    <p>
                        Bærekraft er viktig 
                        for Frøya
                    </p>

                    <div>
                        <p>
                            Frøya Laks er et norsk oppdrettsanlegg som produserer laks på øya
                            Frøya i Trøndelag. Bedriften har gokus på bærekraftig produksjon av
                            laks, og har implementert flere tiltak for å redusere miljøpåvirkningen
                            fra sin virksomhet.
                        </p>
                    </div>
                        <p>
                            For eksempel har Frøya Laks jobbet aktivt med å redusere forbruket av
                            for til laksen, ved å blant annet utvikle mer effektive fortyper. Dette fører
                            til mindre utslipp av næringsstoffer i havet og reduserer risikoen for 
                            algeoppblomstring. Videre har bedriften fokus på å redusere bruken av
                            medikamenter i oppdrettsanlegget, og bruker kun legemilder når det er
                            nødvendig for å ivareta fiskevelferden.
                        </p>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
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