//IKKE TIL HOVEDSIDE
<template>
<nav class="navbar navbar-expand-xxl shadow-5-strong sticky-top p-0 mt-5 overflow-auto">
    <div class="container-fluid row g-0 fixed-top pt-5 d-flex">

            <div class="col-xxl-6 col-lg-4 mx-5 flex-grow-1">
                <router-link to="/" class="Links navbar-brand ">
                    <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
                </router-link>
            </div>
            <div class="col-3 col-sm-1 mx-auto">
                <button @click="canvasOn= true" class="Links btn" type="button">
                    <h2 class="MenyBtn">Meny</h2>
                </button> 
            </div>
            <div class="col-3 col-sm-1 mx-auto ">
                <router-link to="/handlekruv" class="Links align-items-center">
                        <h2><i class="bi bi-bag"></i></h2>
                </router-link>
            </div>
    </div>
</nav>




<div class="offcanvas offcanvas-top" :class="{show: canvasOn }" tabindex="-1" id="offcanvas">
    <div class="offcanvas-header align-self-end me-5 mt-4">
        <button type="button" @click="canvasOn= false" class="btn-close btn-close-white"></button>
    </div>
    <div class="offcanvas-body align-self-center">
        <div class="back container-fluid justify-content-md-center">
                <ul class="navbar-nav ">
                    <li class="nav-item ">
                        <router-link to="/Om-oss" class="Links ">
                            <p class="nav-link text-light mt-4">Om-oss</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Produkter" class="Links">
                            <p class="nav-link text-light mt-4">Produkter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Oppskrifter" class="Links">
                            <p class="nav-link text-light mt-4">Oppskrifter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Kontakt-oss" class="Links">
                            <p class="nav-link text-light mt-4">Kontakt oss</p>
                        </router-link>  
                    </li>
                    <li class="nav-item">
                        <router-link to="/Home" class="Links">
                            <p class="nav-link text-light mt-4">english site</p>
                        </router-link>  
                    </li>                   
                </ul>
        </div>
    </div>
</div>

</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        
        const canvasOn = ref(false)
        return{
            canvasOn,
        }
    },
}
</script>

<style scoped>

.navbar{
    background-color: #090909;
    height: 11rem;
    max-height: 12rem;

}
.container-fluid{
    background-color: #090909;
    height: 8rem;
    max-height: 10rem;
}
.Links{
    text-decoration:none;
    position: relative;
}


.offcanvas{
    background-color: #090909;;
    height: 100%;
}

p{
    font-size: 3rem;
}

</style>

