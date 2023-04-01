<template>
<main-nor-navbar></main-nor-navbar>
    <div class="bg-white py-5">
        <article class="container ">
            <div class="row py-5">
                <div class="col">
                    <img src="@/assets/Images/froya-laks-bacloin.jpg" alt="" srcset="" class="img-fluid border border-0">
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
                <div class="col">
                    <h2>Mid loin</h2>
                    <p>Vekt: 150g</p>
                    <p>Pris: 199kr</p>
                    <div class="row justify-content-start">
                        <div class="col-2">
                            <p>Availability:</p>
                        </div>
                        <div class="col-2">
                            <p>på lager</p>
                        </div>
                    </div>
                    <p>NB! Bare 30 stk igjen på lager!</p>
                    <div class="input-group">
                        <label class="form-label me-3">Antall</label>
                        <input type="button" value="-" class="length" @click="reduseProduct()">
                        <input type="text" :placeholder="{amount}" class="length text-center" v-model="amount">
                        <input type="button" value="+" class="length" @click="addProduct()">
                    </div>
                    <input type="button" class="btn btn-dark rounded-0 mt-5 my-5" value="LEGG I HANDELKURV">
                </div>
            </div>
        </article>
    </div>
<nor-footer></nor-footer>
</template>

<script>
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'
import NorFooter from '@/components/shared/NorFooter.vue'
import { ref } from 'vue'
export default {
  components: { MainNorNavbar, NorFooter },
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