import { createRouter, createWebHistory } from "vue-router";

//Norwagian views/pages
import HomeNorView from '../views/Norwegian-site/HomeNorView.vue';
import ContactUsNorView from '../views/Norwegian-site/ContactUsNorView.vue';
import AboutUsNorView from '../views/Norwegian-site/AboutUsNorView.vue';
import ProductsNorView from '../views/Norwegian-site/ProductsNorView.vue';
import RecipesNorView from '../views/Norwegian-site/RecipesNorView';

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