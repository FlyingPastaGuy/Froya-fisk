<template>
<main-nor-navbar></main-nor-navbar>
    <div class="bg-white py-5">
        <article class="container">
            <div class="row py-5">
                <div class="col-12 col-md-5">
                    <img src="@/assets/Images/Froya-Hel-Mid-loin_1N.png" alt="" srcset="" class="img-fluid border border-0">
                    <p>
                        Dette stykket er å foretrekke til lett
                        varmebehandling;
                    </p>
                    <p>
                        Ultrafersk (pre-rigor) laks; dypskinnet og med 2-3cm,
                        brunmuskel.
                    </p>
                    <p>
                        Egner seg for varmebehandling "au pin" i panne, ovn 
                        og grill
                    </p>
                    <p>
                        perfekt ingrediens til tartar, laks Skagen o.l.
                        Brukes som sashimi og sushilaks hvor brunmuskelen
                        skjæres bort. Anvendes evt. i maki
                    </p>
                </div>
                <div class="col-12 col-md-7">
                    <h2>Mid loin</h2>
                    <p>Vekt: 150g</p>
                    <p>Pris: 199kr</p>
                    <p>Availability: på lager</p>
                    <p>NB! Bare 30 stk igjen på lager!</p>
                    <div class="input-group">
                        <label class="form-label me-3">Antall</label>
                        <input type="button" value="-" class="length btn btn-outline-secondary" @click="reduseProduct()">
                        <input type="text" :placeholder="{amount}" class="length text-center text-outline-secondary" v-model="amount">
                        <input type="button" value="+" class="length  btn btn-outline-secondary rounded-0" @click="addProduct()">
                    </div>
                    <input type="button" class="btn btn-dark rounded-0 mt-5 my-5 py-3 px-5" value="LEGG I HANDELKURV" data-bs-toggle="modal" data-bs-target="#MidLoin350GModal">
                </div>
            </div>
        </article>

        <div class="modal fade" id="MidLoin350GModal" tabindex="-1" aria-labelledby="MidLoin350GModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-black">
                    <h1 class="modal-title fs-5" id="MidLoin350GModalLabel">FRØYA mid loin</h1>
                    <input type="button" value="" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                </div>
                <div class="modal-body row">
                    <div class="col">
                        <img src="@/assets/Images/Froya-Hel-Mid-loin_1N.png" alt="" srcset="" class="img-fluid border border-0">
                    </div>
                    <div class="col">
                        <p>
                            Dette stykket er å foretrekke til lett varmebehandling;
                            Ultrafersk (pre-rigor) laks; dypskinnet og med 2-3cm. brunmuskel.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <input value="FORTSETT Å HANDLE" type="button" class="btn btn-outline-secondary rounded-0" data-bs-dismiss="modal">
                    <router-link to="/handlekurv" >
                        <input value="GÅ TIL KASSEN" type="button" class="btn btn-dark rounded-0" data-bs-dismiss="modal" aria-label="Close">
                    </router-link>
                </div>
                </div>
            </div>
        </div>
        <product-carusel></product-carusel>
    </div>
<nor-footer></nor-footer>
</template>

<script>
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'
import NorFooter from '@/components/shared/NorFooter.vue'
import ProductCarusel from '../ProductCarusel.vue'
import { ref } from 'vue'
export default {
  components: { MainNorNavbar, NorFooter, ProductCarusel  },
    setup() {
        
        let amount = ref(1)

        const addProduct = () => {
                amount.value++
        }
        const reduseProduct = () => {
            if(amount.value>1){
                amount.value--

            } else{
                amount.value = 1

            }
            
        }

        return{
            amount,
            addProduct,
            reduseProduct
        }

    },
}
</script>

<style scoped>
    h2,p{
        color: #000;
    }
    p{
        margin: 0.2rem;
    }
    .length{
        width: 2rem;
    }

</style>