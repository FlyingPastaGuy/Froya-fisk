<template>
<main-eng-navbar></main-eng-navbar>
    <div class="bg-white py-5">
        <article class="container">
            <div class="row py-5">
                <div class="col-12 col-md-5">
                    <img src="@/assets/Images/Halv-Mid-loin_1N.png" alt="" srcset="" class="img-fluid border border-0">
                    <p>
                        This Piece is preferable to light
                        heat treatment;
                    </p>
                    <p>
                        Ultra fresh (pre-rigor) Salmon; skin deep and with 2-3cm,
                        brown muscle.
                    </p>
                    <p>
                        Suitable for heat treatment "au pin" in a pan, ovn 
                        or grill
                    </p>
                    <p>
                        perfect ingredient for tartar, salmon Skagen and others.
                        Used as sashimi and sushi salmon where the brown muscle
                        is cut away. Possibly used in maki
                    </p>
                </div>
                <div class="col-12 col-md-7">
                    <h2>Mid loin</h2>
                    <p>Weight: 150g</p>
                    <p>Price: 199kr</p>
                    <p>Availability: in stock</p>
                    <p>Notice! there is 30 items left in stock!</p>
                    <div class="input-group">
                        <label class="form-label me-3">Amount</label>
                        <input type="button" value="-" class="length btn btn-outline-secondary" @click="reduseProduct()">
                        <input type="text" :placeholder="{amount}" class="length text-center text-outline-secondary" v-model="amount">
                        <input type="button" value="+" class="length  btn btn-outline-secondary rounded-0" @click="addProduct()">
                    </div>
                    <input type="button" class="btn btn-dark rounded-0 mt-5 my-5 py-3 px-5" value="ADD TO CART" data-bs-toggle="modal" data-bs-target="#MidLoin150GModal">
                </div>
            </div>
        </article>

        <div class="modal fade" id="MidLoin150GModal" tabindex="-1" aria-labelledby="MidLoin150GModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-black">
                    <h1 class="modal-title fs-5" id="MidLoin150GModalLabel">FRØYA mid loin</h1>
                    <input type="button" value="" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                </div>
                <div class="modal-body row">
                    <div class="col">
                        <img src="@/assets/Images/Froya-Hel-Mid-loin_1N.png" alt="" srcset="" class="img-fluid border border-0">
                    </div>
                    <div class="col">
                        <p>
                            This Piece is preferable to light heat treatment;
                            Ultra fresh (pre-rigor) salmon; skin deep and with 2-3cm, brown muscle.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <input value="CONTINUE SHOPPING" type="button" class="btn btn-outline-secondary rounded-0" data-bs-dismiss="modal">
                    <router-link to="/Checkout">
                        <input value="CHECKOUT" type="button" class="btn btn-dark rounded-0" data-bs-dismiss="modal" aria-label="Close">
                    </router-link>
                </div>
                </div>
            </div>
        </div>
        <product-carusel-eng></product-carusel-eng>
    </div>
<eng-footer></eng-footer>
</template>

<script>

import { ref } from 'vue'
import ProductCaruselEng from '../ProductCaruselEng.vue'
import MainEngNavbar from '@/components/shared/MainEngNavbar.vue'
import EngFooter from '@/components/shared/EngFooter.vue'
export default {
    components: {ProductCaruselEng, MainEngNavbar, EngFooter   },
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