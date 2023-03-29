<template>
    <div class="row">
        <product-nor-item v-for="(productNor,i) in ProductNor" :key="i" 
        
        :ProductName="productNor.ProductName"
        :ProductImage="productNor.ProductImage"
        :ProductWeight="productNor.ProductWeight"
        :ProductPrice="productNor.ProductPrice"
        :ProductInventory="productNor.ProductInventory"
        :ProductLink="productNor.ProductLink"
        
        
        ></product-nor-item>
    </div>
</template>

<script>
import ProductNorItem from './ProductNorItem.vue';
import ProductNorService from '@/service/productNorService.js';

export default {
    setup() {
        const ProductNor = ProductNorService.getAllProductsNor();

        return{
            ProductNor
        }
    },components: {
        ProductNorItem
    }
}
</script>