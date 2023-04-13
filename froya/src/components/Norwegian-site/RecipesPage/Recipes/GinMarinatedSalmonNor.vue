<template>
<main-nor-navbar></main-nor-navbar>
<div class="bg-white py-3">
    <article class="container py-5 my-5">
        <h2 class="text-black">Ginmarinert Frøya laks</h2>
        <p>Marinert laks med agruk, gin og rips</p>
            <div class="row">
                <div class="col">
                    <h6>ingredienser</h6>
                    <p>Til 4 personer trenger du:</p>
                    <ul>
                        <li>
                            <p>70 gram sukker</p>
                        </li>
                        <li>
                            <p>70 gram salt</p>
                        </li>
                        <li>
                            <p>1 ts revet sitronskall</p>
                        </li>
                        <li>
                            <p>1/2 ts hel sort pepper kunst i morter</p>
                        </li>
                        <li>
                            <p>1 ts enebær knust i morter</p>
                        </li>
                        <li>
                            <p>1/2 ts rosepepper knust i morter</p>
                        </li>
                        <li>
                            <p>70 ml gin (klassisk gin)</p>
                        </li>
                        <li>
                            <p>300 gram Frøya backloin </p>
                        </li>
                        <li>
                            <p> 1 agruk</p>
                        </li>
                    </ul>
                    <p>
                        Til servering Rips, mynteblader og 
                        babyleaf salat (finn en som også har 
                        noen røde blader), olivenolje
                    </p>
                </div>
                <div class="col">
                    <div class="row text-center">
                        <div class="col-2">45 min</div>
                        <div class="col-2">medium</div>
                        <div class="col-2"> 8 people</div>
                    </div>
                    <img class="img-thumbnail border-0" src="@/assets/Images/Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg" alt="">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h6>Fremgangsmåte</h6>
                    <p>
                        Bland alle krydderne, salt og sukker med
                        gin. Legg halvparten av blandingen i en
                        glassform. Legg fisken oppå og ta deretter
                        resten av blandingen på fisken. Dekk formen
                        godt med plast og sett det i kjøleskapet 
                        over natten. Når du skal tilbrede fisken til
                        servering
                    </p>
                </div>
                <div class="col">
                    <ol>
                        <li>
                            <p> 
                            skyll fisken, men bevar marinaden. Tørk fisken med et 
                            kjøkkenpapir
                            </p>
                        </li>
                        <li>
                            <p>
                                Høvle agurk med en ostehøvel legg på kjøkkenpapir slik 
                                at fukten trekkes opp 
                            </p>
                        </li>
                        <li>
                            <p>
                                Skjær fisken tynt i lengder
                            </p>
                        </li>
                        <li>
                            <p>
                                Legg den opp på tallerken med rips, agurk salat, rise 
                                olje over. Ta ett drag med pepperkvern over før 
                                servering
                            </p>
                        </li>
                    </ol>
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