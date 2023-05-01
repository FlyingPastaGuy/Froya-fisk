import { ref } from "vue";

const productNorService = (function(){
    const productNor = ref([
        {
            ProductName: "back Loin",
            ProductImage: "Froya-Hel-Back-loin_1N.png",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "BackLoin350gNor"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "Froya-Hel-Mid-loin_1N.png",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin350gNor"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "Halv-Mid-loin_1N.png",
            ProductWeight: 150,
            ProductPrice: 199,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin150gNor"
        },
        {
            ProductName: "back Loin",
            ProductImage: "Froya-Halv-Back-loin_1N.png",
            ProductWeight: 150,
            ProductPrice: 199,
            ProductAmount:1,
            ProductInventory:false,
            ProductLink: "BackLoin150gNor"
        },
    ]);
    const getAllProductsNor = () => {
        return productNor
    }
    return{
        getAllProductsNor,
    }
}());

export default productNorService;