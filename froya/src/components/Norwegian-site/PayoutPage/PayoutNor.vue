<template>
    <div class="bg-white">
        <article class="container">
            <div class="row">
                <div class="col">
                    <table>
                        <thead>
                            <tr>
                                <th>produkt</th>
                                <th>pris</th>
                                <th>antall</th>
                                <th>subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product,i) in producktArray" :key="i">
                                <td><img :src="getProductImage(i)" alt="" class="card-img-top rounded-0"></td>
                                <td><p>{{product.ProductPrice}}</p></td>
                                <td>
                                    <div class="input-group">
                                        <input type="button" value="-" class="length">
                                        <input type="text" :placeholder="product.ProductAmount" class="length text-center">
                                        <input type="button" value="+" class="length" @click="addproduct(i)">
                                    </div>
                                    
                                </td>
                                <td><p>{{product.ProductSubtotal}}</p></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">

                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { reactive } from 'vue'
//import PayoutItem from './PayoutItem.vue'
export default {
//components: { PayoutItem },
    setup() {
        let producktArray = reactive([
            {   
                ProductImg: '',
                ProductPrice: 199,
                ProductAmount: 2,
                ProductSubtotal: 199*2
            },
            {   
                ProductImg: '',
                ProductPrice: 199,
                ProductAmount: 3,
                ProductSubtotal: 199*3
            }
        ])


const addproduct = (e) => {

    let updateAmount = producktArray[e].ProductAmount++
    let NewSubtotal = producktArray[e].ProductPrice * producktArray[e].ProductAmount;

    producktArray[e].ProductSubtotal = NewSubtotal
    producktArray[e].ProductAmount == updateAmount

    alert(producktArray[e].ProductSubtotal)

}

const getProductImage = (e) => {
            let ProductImage;

            try{
                ProductImage = require(`@/assets/Images/${producktArray[e].ProductImg}`);
            } catch{
                ProductImage = require(`@/assets/Images/froys-laks-midloin-kopi.jpg`);
            }
            return ProductImage;
        }

        return{
            producktArray,
            getProductImage,
            addproduct
        }
    },
}
</script>


<style scoped>
p{
    color: #000;
}
</style>