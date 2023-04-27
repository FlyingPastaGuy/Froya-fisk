<template>
<main-eng-navbar></main-eng-navbar>
    <section class="container py-5">
        <article class="container ">
            <div class="row my-4">
                <div class="col-12 col-md ">
                    <h3>About Frøya</h3>
                    <p>
                        sustainability is important for Frøya
                    </p>

                        <p>
                            Frøya salmon is a norwegian breeding facility that produces salmon at the island
                            Frøya in Trøndelag. The compeny has focus at sustainabil production of
                            salmon, and has implemented measures to reduce their environmental impact.
                        </p>

                        <p>
                            An example is how Frøya salmon has worked actively to reduce consumption av
                            salmon, by developing a more effective fortyper. This leads
                            to less emission of harmful nutrients in the sea and reduce the risk of 
                            algal blooms. Frøya has also sett fouces on reducing the use of
                            medications in the breeding fecility, and only use legemilder medicine when it is
                            needed to protect the fish walfare.
                        </p>
                </div>
                <div class="col">
                    <img src="@/assets/Images/laks-ferdig-pa-band.jpg" alt="" srcset="" class="img-fluid border border-0">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md mb-4">
                    <article class="card h-100 w-75 border-0">
                        <img src="@/assets/Images/froya-jenta-jobb.jpg" alt="" class="card-img-top align-self-start cardImg">
                        <div class="card-body">
                            <h4 class="card-title">
                                Read more about Frøyas
                                neasures for 
                                sustainability
                            </h4>
                            <router-link to="/AboutUsEngSustainable">
                                <input type="button" value="READ MORE" class="btn btn-outline-dark" style="border-radius: 0%;">
                            </router-link>
                        </div>
                    </article>
                </div>
                <div class="col">
                    <p>
                        Frøya salmon do also have an open and transparent approach to their compeny,
                        and communicates evenly with their neighbours, local authorities and society in
                        general about their activities and environmental measures. Frøya also works to  
                        develope new technology and methods to make the compeny more sustainabil and 
                        enviromentally friendly.
                        In addition to the environmental measures Frøya takes, so do they focus on animal welfare and 
                        ethics in their business. Frøya does also have their own ethics advicery that 
                        monitors the daily operation, and makes sure that fish welfare is as best as it could be.
                        all in all is Frøya salmon a compeny that takes sustainability seriously, and 
                        is continuously works to develop and improve their company to reduce
                        their environmental impact and take care of animal walfare and 
                        social responsibility.
                    </p>
                </div>
            </div>
        </article>
    </section>
<eng-footer></eng-footer>
</template>
<script>
import MainEngNavbar from '../../components/shared/MainEngNavbar.vue';
import EngFooter from '../../components/shared/EngFooter.vue';

export default {
    setup() {
        
    },
    components:{
        MainEngNavbar,
        EngFooter,
        
    }
}
</script>

<style scoped>
h4{
    color: black;
}
</style>