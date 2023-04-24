<template>
    <div class="row">
        <product-eng-item v-for="(productEng,i) in ProductEng" :key="i"
        
        :ProductName="productEng.ProductName"
        :ProductImage="productEng.ProductImage"
        :ProductWeight="productEng.ProductWeight"
        :ProductPrice="productEng.ProductPrice"
        :ProductInventory="productEng.ProductInventory"
        :ProductLink="productEng.ProductLink"        
        
        ></product-eng-item>
    </div>
</template>

<script>
import ProductEngItem from './ProductEngItem.vue'
import ProductEngService from '@/service/productEngService.js'
export default {
    setup() {
        const ProductEng = ProductEngService.getAllProductsEng();

        return{
            ProductEng
        }
    },
    components: {
        ProductEngItem 
        },
}
</script>