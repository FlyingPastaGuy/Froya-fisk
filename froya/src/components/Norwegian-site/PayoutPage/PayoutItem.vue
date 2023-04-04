<template>
    <tbody>
        <tr>
            <td><img :src="getProductImage()" alt="" class="card-img-top rounded-0"></td>
            <td><p>{{ProductPrice}}</p></td>
            <td>
                <div class="input-group">
                    <input type="button" value="-" class="length">
                    <input type="text" :value="ProductAmount" class="length text-center">
                    <input type="button" value="+" class="length" @click="addproduct()">
                </div>
                
            </td>
            <td><p>{{subtotal}}</p></td>
            
        </tr>
    </tbody>
</template>

<script>
export default {
    setup(props) {
        let subtotal = props.ProductPrice * props.ProductAmount;

        const addproduct = () => {
            
        }

        const getProductImage = () => {
            let ProductImage;

            try{
                ProductImage = require(`@/assets/Images/${props.ProductImg}`);
            } catch{
                ProductImage = require(`@/assets/Images/froys-laks-midloin-kopi.jpg`);
            }
            return ProductImage;
        }

        return {
            subtotal,
            getProductImage,
            addproduct,
        }
    },
    props: {
        ProductImg: String,
        ProductPrice: Number,
        ProductAmount: Number,
    },
}
</script>


<style scoped>
p{
    color:black
}
.length{
        width: 2rem;
        
    }
</style>