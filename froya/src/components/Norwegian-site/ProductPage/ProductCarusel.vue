<template>


    <section class="container text-center my-3 bg-white">
        <hr>
    <div class="mb-5">
        <h3 class="text-wrap text-lg-start px-3 text-dark" >Våre Produkter</h3>
        <p class="text-wrap text-lg-start px-3" style="max-width: 60%;">
            Det er ingen hemmelighet at omgivelsene er viktige.  
            Havmiljøet rundt øya Frøya danner et ideelt grunnlag for marint mangfold og er blant de ypperste i verden. 
        </p>
    </div>

    <div id="carouselControls" class="carousel slide row mx-auto my-auto">
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

        <div class="carousel-inner">

            <div class="carousel-item active ">
                <div class="cards-wrapper row row-cols-1 row-cols-md-4 g-4" >

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black ">FRØYA  Back Loin</h4>
                        <img src="@/assets/Images/Froya-Hel-Back-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 350g</p>
                                <p class="card-text fw-bold">pris: 299kr</p>
                                <p  class="card-text false"> ikke på lager <i class="bi bi-x"></i></p>
                            <router-link to="/BackLoin350gNor">
                                <input type="button" value="Back Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>
                    
                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Back Loin</h4>
                        <img src="@/assets/Images/Froya-Halv-Back-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 150g</p>
                                <p class="card-text fw-bold">pris: 199kr </p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/BackLoin150gNor">
                                <input type="button" value="Back Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>
        
                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Mid Loin</h4>
                        <img src="@/assets/Images/Halv-Mid-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 150g</p>
                                <p class="card-text fw-bold">pris: 199kr</p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/MidLoin150gNor">
                                <input type="button" value=" Mid Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Mid Loin</h4>
                        <img src="@/assets/Images/Froya-Hel-Mid-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 350g</p>
                                <p class="card-text fw-bold">pris: 299kr</p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/MidLoin350gNor">
                                <input type="button" value="Mid Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                </div>
            </div>

            <div class="carousel-item">
                <div class="cards-wrapper row row-cols-1 row-cols-md-4 g-4" >

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Back Loin</h4>
                        <img src="@/assets/Images/Froya-Hel-Back-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 350g</p>
                                <p class="card-text fw-bold">pris: 299kr</p>
                                <p  class="card-text false"> ikke på lager <i class="bi bi-x"></i></p>
                            <router-link to="/BackLoin350gNor">
                                <input type="button" value="Back Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Back Loin </h4>
                        <img src="@/assets/Images/Froya-Halv-Back-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 150g</p>
                                <p class="card-text fw-bold">pris: 199kr</p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/BackLoin150gNor">
                                <input type="button" value="Back Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Mid Loin</h4>
                        <img src="@/assets/Images/Halv-Mid-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 150g</p>
                                <p class="card-text fw-bold">pris: 199kr</p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/MidLoin150gNor">
                                <input type="button" value="Mid Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                    <article class="col-6 col-md-2 col-lg-3">
                    <div class="card mt-4 text-wrap">
                        <h4 class="mb-0 p-3 bg-black">FRØYA Mid Loin</h4>
                        <img src="@/assets/Images/Froya-Hel-Mid-loin_1N.png" class="card-img-top align-self-start cardImg rounded-0 "  alt="">
                        <div class="card-body text-center font-monospace">
                                <p class="card-text fw-bold">vekt: 350g</p>
                                <p class="card-text fw-bold">pris: 299kr</p>
                                <p  class="card-text true"> På lager <i class="bi bi-check"></i></p>
                            <router-link to="/MidLoin350gNor">
                                <input type="button" value="Mid Loin" class="btn btn-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </div>
                    </article>

                </div>
        </div>
    </div>
</div>
    </section>
</template>



<style scoped>
.carousel-control-prev,
.carousel-control-next {
    background-color:  #151517;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-70%);
}

@media screen and (min-width: 577px) {
    .cards-wrapper {
    display: flex;
    }
}
img{
    height: 10rem;
}

.true{
    color: #30BD57;
}

.false{
    color: #ee2828;
}

h1,h2,h5,p{
    color:#232323;
}

</style>