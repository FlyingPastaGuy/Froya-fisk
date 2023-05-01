import { ref } from "vue"

const productEngService = (function(){
    const productEng = ref([
        {
            ProductName: "back Loin",
            ProductImage: "Froya-Hel-Back-loin_1N.png",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "BackLoin350gEng"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "Froya-Hel-Mid-loin_1N.png",
            ProductWeight: 350,
            ProductPrice: 299,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin350gEng"
        },
        {
            ProductName: "mid Loin",
            ProductImage: "Halv-Mid-loin_1N.png",
            ProductWeight: 150,
            ProductPrice: 199,
            ProductAmount:1,
            ProductInventory:true,
            ProductLink: "MidLoin150gEng"
        },
        {
            ProductName: "back Loin",
            ProductImage: "Froya-Halv-Back-loin_1N.png",
            ProductWeight: 150,
            ProductPrice: 199,
            ProductAmount:1,
            ProductInventory:false,
            ProductLink: "BackLoin150gEng"
        },
    ]);

    const getAllProductsEng = () => {
        return productEng
    }
    return{
        getAllProductsEng,
    }
}());

export default productEngService;