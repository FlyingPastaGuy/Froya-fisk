<template class="body">
    <section class="video"> 
        <video class="w-100" autoplay loop muted>
            <source src="@/assets/video/pexels-cottonbro-studio.mp4" type="video/mp4" />
        </video>
    </section>
    
<eng-navbar></eng-navbar>

<section class="container ">
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <article class="col">
            <div class="card bg-transparent border-0 mb-5">
                <div class="card-body">
                    <h1 class="card-titlight">Fresh Norwegian salmon</h1>
                    <p class="card-text">From the cold and clear water off Frøya on the Trøndelag coast.</p>
                    <router-link to="">
                        <input type="button" value="Read more about our products" class="btn btn-outline-light" style="border-radius: 0%;">
                    </router-link>
                </div>
            </div>
        </article>
    </div>
</section> 

<section class="container">
    <h3 class="text-wrap text-lg-start px-3" >Frøya's salmon is not popular with sushi chefs for no reason</h3>

    <div class="row row-cols-1 row-cols-md-3 g-4">
        <article class="col">
            <div class="card bg-transparent border-0 mb-5">
                <img src="../../assets/Images/2hours.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                <div class="card-body">
                    <h3 class="card-title text-light">PACKED WITHIN TWO HOURS</h3>
                    <p class="card-text">From the time the salmon is fresh until it is packed and ready for rapid cooling,
                        it normally only takes two hours. This way you are guaranteed salmon of the finest quality
                        and with the best taste when you choose Frøya salmon
                    </p>
                    <router-link to="" class="pt-4">
                        <input type="button" value="Read more about Frøya" class="btn btn-outline-light" style="border-radius: 0%;">
                    </router-link>
                </div>
            </div>
        </article>

        <article class="col" >
            <div class="card bg-transparent border-0">
                <img src="../../assets/Images/Loins.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                <div class="card-body">
                    <h3 class="card-title text-light">BACK LOIN OR MID LOIN</h3>
                    <p class="card-text">The sushi lover's first choice is the delicate back loin.
                        You get beautiful, uniform and firm slices of fish. 
                        The middle part is slightly fatter and juicier. 
                        sets an extra good taste and gives a nice, delicate 
                        mouthfeel when you cook the fish on the grill.
                    </p>
                </div>
            </div>
        </article>

        <article class="col">
            <div class="card bg-transparent border-0">
                <img src="../../assets/Images/gradernord.png" alt="" class="card-img-top align-self-start cardImg" style="width: 50%;">
                <div class="card-body">
                    <h3 class="card-title text-light">FROM THE FRØYA PÅTRØNDELAG COAST</h3>
                    <p class="card-text">It's no secret that the environment is important.
                        The marine environment around the island of Frøya forms an ideal basis
                        for marine diversity and is among the best in the world.
                        Tides and strong currents continuously bring in clean,
                        nutrient-rich seawater.
                    </p>
                </div>
            </div>
        </article>
    </div>

</section>

<our-products-eng></our-products-eng>

<section class="container" style="margin-bottom: 15rem; margin-top: 10rem;">
<div class="row mb-3 justify-content-start bearekraftigRow">
    <div class="col-6 flex-fill">
        <h1 style="margin-bottom: 3rem;">EXPERIENCE SUSTAINABLE SALMON FROM FRØYA</h1>
        <h2 style="max-width: 40rem;">
            We at Frøya Laks are proud to be a leading producer of sustainably farmed salmon. 
            Our philosophy is to respect the boundaries of nature, take care of our local communities 
            and at the same time produce salmon of the highest quality.
            Healthy and delicious at the same time. We believe that the best meal is also the healthiest,
            and our sustainable salmon from Frøya gives you just that - a tasty and healthy experience
            With a production process that is caring and responsible, you can enjoy our salmon with a clear conscience.
        </h2>
    </div>
    <div class="col-6 clearfix center-block" >
        <img src="@/assets/Images/laks-ferdig-pa-band.jpg" class="img-fluid bearekraftImg" alt="">
    </div>
</div>

<router-link to="">
    <input type="button" value="Read more about sustainability" class="btn btn-outline-light" style="border-radius: 0%;">
</router-link> 
</section>

<hr class="my-5" style="color:#D1D1D1;">


<section class="container text-center" style="margin-bottom: 15rem; margin-top: 10rem;">
    <h3>YOU CAN FIND OUR PRODUCTS AT THE FOLLOWING CHAINS</h3>

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
    <h3 class="px-3">Tasty recipes</h3>
    <p class="text-wrap px-3">See our tempting recipes and get inspired.  
        Frøya salmon is suitable both for everyday use and for festive occasions.
        Just as good in summer as in winter.
    </p>
</section>

<section class="container">
<div class="row row-cols-1 row-cols-md-3 g-4">
    <article class="col">
        <div class="card h-100 border-0" style="background-color: #151517;">
            <img src="@/assets/Images/Froya-til-fest-forrett-med-gin-marinert-froyalaks.jpg" alt="" class="card-img-top align-self-center cardImg">
            <div class="card-body " style="background-color: white;">
                <p class="card-text text-dark text-wrap" >Gin-marinated Frøya salmon Marinated salmon with cucumber, gin and currants</p>
                <router-link to="">
                    <input type="button" value="see recipe" class="btn btn-outline-dark" style="border-radius: 0%;">
                </router-link>
            </div>
        </div>
    </article>

    <article class="col">
        <div class="card h-100 border-0" style="background-color: #151517;">
            <img src="@/assets/Images/Laksparmesancrust.webp" alt="" class="card-img-top align-self-center cardImg">
            <div class="card-body" style="background-color: white;">
                <p class="card-text text-dark text-wrap">Oven-baked salmon with herbs & garlic crust, green mashed potatoes & herb oil</p>
                <router-link to="">
                    <input type="button" value="see recipe" class="btn btn-outline-dark" style="border-radius: 0%;">
                </router-link>
            </div>
        </div>
    </article>

    <article class="col">
        <div class="card h-100 border-0" style="background-color: #151517;">
            <img src="@/assets/Images/Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg" alt="" class="card-img-top align-self-center cardImg">
            <div class="card-body" style="background-color: white;">
                <p class="card-text text-dark text-wrap">Pan-fried salmon with champagne beurre blanc, asparagus beans and Hasselbäck potatoes</p>
                <router-link to="">
                    <input type="button" value="see recipe" class="btn btn-outline-dark" style="border-radius: 0%;">
                </router-link>
            </div>
        </div>
    </article>

</div>

</section>



<eng-footer></eng-footer>
</template>

<script>

import EngNavbar from '../../components/shared/EngNavbar.vue';
import EngFooter from '../../components/shared/EngFooter.vue';
import OurProductsEng from '@/components/English-site/HomePage/OurProductsEng.vue';

export default {
    setup() {
        
    },
    components:{
        EngNavbar,
        EngFooter,
        OurProductsEng,
    }
}
</script>

<style scoped>

html, body{
margin: 0;
padding: 0;
max-width: 1400px;
}


.video{
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

