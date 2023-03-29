import { ref } from "vue";

const productNorService = (function(){
    const productNor = ref([
        {
            ProductName: "back Loin",
            ProductImage: "logo.png",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductInventory:true,
            ProductLink: ""
        },
        {
            ProductName: "back Loin",
            ProductImage: "",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductInventory:true,
            ProductLink: ""
        },
        {
            ProductName: "back Loin",
            ProductImage: "",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductInventory:true,
            ProductLink: ""
        },
        {
            ProductName: "back Loin",
            ProductImage: "",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductInventory:false,
            ProductLink: ""
        },
    ]);
    const getAllProductsNor = () => {
        return productNor
    }

    return{
        getAllProductsNor
    }
}());

export default productNorService;