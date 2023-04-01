import { createRouter, createWebHistory } from "vue-router";

//Norwagian views/pages
import HomeNorView from '../views/Norwegian-site/HomeNorView.vue';
import ContactUsNorView from '../views/Norwegian-site/ContactUsNorView.vue';
import AboutUsNorView from '../views/Norwegian-site/AboutUsNorView.vue';
import ProductsNorView from '../views/Norwegian-site/ProductsNorView.vue';
import RecipesNorView from '../views/Norwegian-site/RecipesNorView';

//Norwagian Recipes
import GinMarinatedSalmonNor from '@/components/Norwegian-site/RecipesPage/Recipes/GinMarinatedSalmonNor.vue';
import SalmonWithGarlicAndParmesanCrustNor from '@/components/Norwegian-site/RecipesPage/Recipes/SalmonWithGarlicAndParmesanCrustNor.vue';
import SalmonAndChampagneBeurreBlancNor from '@/components/Norwegian-site/RecipesPage/Recipes/SalmonAndChampagneBeurreBlancNor.vue';

//Norwagian AboutUs
import AboutUsNorSustainable from '@/components/Norwegian-site/AboutUsPage/AboutUsNorSustainable.vue'

//Norwagian Products
import BackLoin350gNor from '@/components/Norwegian-site/ProductPage/Products/BackLoin350gNor.vue'
import MidLoin150gNor from '@/components/Norwegian-site/ProductPage/Products/MidLoin150gNor.vue'
import MidLoin350gNor from '@/components/Norwegian-site/ProductPage/Products/MidLoin350gNor.vue'
import BackLoin150gNor from '@/components/Norwegian-site/ProductPage/Products/BackLoin150gNor.vue'

//English views/pages
import HomeEngView from '../views/English-site/HomeEngView.vue';
import AboutUsEngView from '../views/English-site/AboutUsEngView.vue';
import ContactUsEngView from '../views/English-site/ContactUsEngView.vue';
import ProductsEngView from '../views/English-site/ProductsEngView.vue';
import RecipesEngView from '../views/English-site/RecipesEngView.vue';

const routes = [
///Norwagian views/pages
    {
        path: '/',
        name: 'hjem',
        component: HomeNorView
    },
    {
        path: '/Kontakt-oss',
        name: 'Kontakt-oss',
        component: ContactUsNorView
    },
    {
        path: '/Om-oss',
        name: 'Om-oss',
        component: AboutUsNorView
    },
    {
        path: '/Produkter',
        name: 'Produkter',
        component: ProductsNorView
    },
    {
        path: '/Oppskrifter',
        name: 'Oppskrifter',
        component: RecipesNorView
    },
    ///Norwagian Recipes
    {
        path:'/GinMarinatedSalmonNor',
        name:'GinMarinatedSalmonNor',
        component: GinMarinatedSalmonNor
    },
    {
        path:'/SalmonWithGarlicAndParmesanCrustNor',
        name:'SalmonWithGarlicAndParmesanCrustNor',
        component: SalmonWithGarlicAndParmesanCrustNor
    },
    {
        path:'/SalmonAndChampagneBeurreBlancNor',
        name:'SalmonAndChampagneBeurreBlancNor',
        component: SalmonAndChampagneBeurreBlancNor
    },
    //Norwagian AboutUs
    {
        path:'/AboutUsNorSustainable',
        name:'AboutUsNorSustainable',
        component: AboutUsNorSustainable
    },
    //Norwagian Products
    {
        path:'/BackLoin350gNor',
        name:'BackLoin350gNor',
        component:BackLoin350gNor
    },
    {
        path:'/MidLoin150gNor',
        name:'MidLoin150gNor',
        component:MidLoin150gNor
    },
    {
        path:'/MidLoin350gNor',
        name:'MidLoin350gNor',
        component: MidLoin350gNor
    },
    {
        path:'/BackLoin150gNor',
        name:'BackLoin150gNor',
        component:BackLoin150gNor
    },

///English views/pages
    {
        path: '/Home',
        name: 'Home',
        component: HomeEngView
    },
    {
        path: '/About-us',
        name: 'About-us',
        component: AboutUsEngView
    },
    {
        path: '/Contact-us',
        name: 'Contact-us',
        component:ContactUsEngView
    },
    {
        path: '/Products',
        name: 'Products',
        component: ProductsEngView
    },
    {
        path: '/Recipes',
        name: 'Recipes',
        component: RecipesEngView
    }
];

const router = createRouter(
    {
        history:createWebHistory(),
        routes
    }
)

export default router