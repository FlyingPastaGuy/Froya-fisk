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
                        <input type="button" value="Betal" class="btn">
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
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

/*
    productTotal er total prisen for 
    alle produktene som er lagt til 
    og udateTotal skal holde prisen 
    oppdatert
*/

let productTotal = ref(0)

const updateTotal = () => {
    productTotal.value = 0

    for(let i = 0; i< producktArray.length; i++){
        productTotal.value = productTotal.value + producktArray[i].ProductSubtotal
    }

}
/*
    addproduct øker antall produkter,men oppdaterer også
    subtotalen og reduseproduct reduserer antall og oppdaterer
    subtotalen ved å ta ProductSubtotal - ProductPrice for å
    få oppdaterte nummere.
    e her er i når v-for loopen linje 16-28.
    begge har også updateTotal() i seg for å holde productTotal 
    oppdatert
*/
const addproduct = (e) => {

    let updateAmount = producktArray[e].ProductAmount++
    let NewSubtotal = producktArray[e].ProductPrice * producktArray[e].ProductAmount;

    producktArray[e].ProductSubtotal = NewSubtotal
    producktArray[e].ProductAmount == updateAmount

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
/*
    deleteProduct sletter selve produktet fra handlekurven,
    men spør om du er sikker på at du hvil gjøre det
*/
const deleteProduct = (e) => {
    if(confirm("er du sikker på at du ønsker å fjerne dette produktet") == true){
        producktArray.shift(e)
    }else{
        return false
    }
    updateTotal();
}

/*
    henter bilder, men hvis den ikke finner det så henter det et 
    annet bilde som finnes
*/
const getProductImage = (e) => {
            let ProductImage;

            try{
                ProductImage = require(`@/assets/Images/${producktArray[e].ProductImg}`);
            } catch{
                ProductImage = require(`@/assets/Images/froys-laks-midloin-kopi.jpg`);
            }
            return ProductImage;
        }
    /*
        updateTotal er her fordi vi ønsker at totalen 
        skal være riktig med en gang vi kommer inn
    */
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