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