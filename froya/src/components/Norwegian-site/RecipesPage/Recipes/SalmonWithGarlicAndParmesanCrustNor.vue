<template>
<main-nor-navbar></main-nor-navbar>
<div class="bg-white">
    <article class="container py-5 my-5">
        <h2 class="text-black">Frøya laks med hvitløk & permesan-crust</h2>
        <p>Grønn potetmøs & urteolje</p>
            <div class="row">
                <div class="col">
                    <h6>ingredienser</h6>
                    <p>650 g Frøya midloin (1 stor pakke)</p>
                    <h6>Parmesan-topping</h6>
                    <ul>
                        <li>
                            <p>50g revet parmesan</p>
                        </li>
                        <li>
                            <p>50g brødrasp av lyst brød</p>
                        </li>
                        <li>
                            <p>2 fedd hvitløk</p>
                        </li>
                        <li>
                            <p>1 potte gressløk</p>
                        </li>
                        <li>
                            <p>1 potte basilikum</p>
                        </li>
                        <li>
                            <p>3 ss smeltet smør</p>
                        </li>
                        <li>
                            <p>1 neve hasselnøtter</p>
                        </li>
                        <li>
                            <p>
                                Flaksalt / nykvernet pepper
                            </p>
                        </li>
                    </ul>
                    <h6>potet & ertemos</h6>
                    <ul>
                        <li>
                            <p>10 kokefaste poteter</p>
                        </li>
                        <li>
                            <p>1 pose erter</p>
                        </li>
                        <li>
                            <p>2dl melk</p>
                        </li>
                        <li>
                            <p>3 ss meierismør</p>
                        </li>
                        <li>
                            <p>1/4 revet muskatnøtt</p>
                        </li>
                        <li>
                            <p>1 sitron</p>
                        </li>
                        <li>
                            <p>1pk brokkolini</p>
                        </li>
                        <li>
                            <p>Flaksalt / pepper</p>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="row text-center">
                        <div class="col-3">45 min</div>
                        <div class="col-3">medium</div>
                        <div class="col-3"> 8 people</div>
                    </div>
                    <img class="img-thumbnail border-0" src="@/assets/Images/Laksparmesancrust.webp" alt="">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h6>Fremgangsmåte</h6>
                    <p class="text-wrap" style="width:24 rem">
                        La laksen ligge i romtemperatur 20min før steking.
                        Sett ovnen på 180 grader.
                    </p>
                    <ol>
                        <li>
                            <p>Skjær fisken i to emner og legg i en ildfast form.</p>
                        </li>
                        <li>
                            <p>
                                Ha brødrasp, revet parmesan, finhakket hvitløk, salt og
                                pepper i en bolle. finhakk en neve basilikumblader og
                                gressløk. Hell over smeltet smør.
                            </p>
                        </li>
                        <li>
                            <p>Bland alt godt sammen og fordel over laksen.</p>
                        </li>
                        <li>
                            <p>
                                La fisken steke i ovnen i ca 10min. Tiden avhenger av
                                tykkelsen på fiskestykket og hvor rosa kjerne du ønsker.
                                Ta gjerne en stikkprøve underveis.
                            </p>
                        </li>
                        <li>
                            <p>sett på grillen siste minuttet for å få gyllen topping</p>
                        </li>
                    </ol>
                </div>
                <div class="col">
                    <h6>Potet & ertemos</h6>
                    <ol>
                        <li>
                            <p> 
                                Skrell poteter. Del i to og kok i lettsaltet vann i ca. 10 minutter til de
                                er møre
                            </p>
                        </li>
                        <li>
                            <p>
                                Tilsett ertene de siste 2-3 minuttene. Hell av vannet. Tilsett smør,
                                saften og revet skall fra en halv sitron og mos til en grov stappe.
                            </p>
                        </li>
                        <li>
                            <p>
                                smak til med salt og pepper.
                            </p>
                        </li>
                        <li>
                            Grovhakk hasselnøtter og strø over.
                        </li>
                        <li>
                            <p>Ha brokkolini i fosskokende lettsaltet vann i ca 2min</p>
                        </li>
                    </ol>
                    <h6>urteolje</h6>
                    <p>
                        Ha resten av basilikum og gressløk i en blander sammen med olivenolje,
                        litt sitronsaft og salt. kjør til en jevn blanding,
                        server laksen med brokkolini, potetmos, urte-olje og gjerne en Grønn
                        salat om du ønsker.
                    </p>
                </div>
            </div>
            <router-link to="/Oppskrifter">
                <input type="button" class="btn btn-outline-dark" style="border-radius: 0%;" value="Alle oppskrifter">
            </router-link>
    </article>
</div>
<nor-footer></nor-footer>
</template>


<script>
import NorFooter from '@/components/shared/NorFooter.vue'
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'

export default {
    setup() {
        
    },components: {
        NorFooter,
        MainNorNavbar
    }
}
</script>


<style scoped>
p{
    color: black;
}

</style>