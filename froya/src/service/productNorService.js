import { ref } from "vue";

const productNorService = (function(){
    const productNor = ref([
        {
            ProductName: "back Loin",
            ProductImage: "froya-laks-bacloin.jpg",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "BackLoin350gNor"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "froya-laks-bacloin.jpg",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin350gNor"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "froys-laks-midloin-kopi.jpg",
            ProductWeight: 150,
            ProductPrice: 199,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin150gNor"
        },
        {
            ProductName: "back Loin",
            ProductImage: "froys-laks-midloin-kopi.jpg",
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

    const addAmount = (e) => {
        return productNor[e].ProductAmount++
    }

    return{
        getAllProductsNor,
        addAmount
    }
}());

export default productNorService;