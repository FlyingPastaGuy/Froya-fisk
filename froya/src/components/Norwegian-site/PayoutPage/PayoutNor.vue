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
                                        <input type="button" value="-" class="length" @click="reduseproduct(i)">
                                        <input type="text" :placeholder="product.ProductAmount" class="length text-center">
                                        <input type="button" value="+" class="length" @click="addproduct(i)">
                                    </div>
                                    
                                </td>
                                <td><p>{{product.ProductSubtotal}}</p></td>
                                <td><input type="button" value="" class="btn-close" @click="deleteProduct(i)"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <div>
                        <h3>Din ordre oppsumert</h3>
                        <div>
                            <p>total</p>
                            <p>{{productTotal}}</p>
                            <hr>
                            <p>Pris før frakt</p>
                            <p>{{productTotal}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
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

let productTotal = ref(0)

const updateTotal = () => {
    productTotal.value = 0

    for(let i = 0; i< producktArray.length; i++){
        productTotal.value = productTotal.value + producktArray[i].ProductSubtotal
    }

}

const addproduct = (e) => {

    let updateAmount = producktArray[e].ProductAmount++
    let NewSubtotal = producktArray[e].ProductPrice * producktArray[e].ProductAmount;

    producktArray[e].ProductSubtotal = NewSubtotal
    producktArray[e].ProductAmount == updateAmount

    //alert(producktArray[e].ProductSubtotal)

    updateTotal();

}

const reduseproduct = (e) => {
    if(producktArray[e].ProductAmount > 1){
        let updateAmount = producktArray[e].ProductAmount--
        let NewSubtotal = producktArray[e].ProductSubtotal - producktArray[e].ProductPrice  ;

        producktArray[e].ProductSubtotal = NewSubtotal
        producktArray[e].ProductAmount == updateAmount

        alert(producktArray[e].ProductSubtotal)
    }else{
        deleteProduct(e)
    }
    updateTotal();
}

const deleteProduct = (e) => {
    if(confirm("er du sikker på at du ønsker å fjerne dette produktet") == true){
        producktArray.shift(e)
    }else{
        return false
    }
    updateTotal();
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

        updateTotal();

        return{
            producktArray,
            getProductImage,
            addproduct,
            reduseproduct,
            updateTotal,
            productTotal,
            deleteProduct
        }
    },
}
</script>


<style scoped>
p,h1,h2,h3{
    color: #000;
}
</style>