//TIL HOVEDSIDEN
<template>
<nav class="navbar navbar-expand-xxl shadow-5-strong sticky-top p-0 my-4">
    <div class="container-fluid row g-0 fixed-top pt-5 d-flex">

            <div class="col-xxl-6 col-lg-4 mx-5 flex-grow-1">
                <router-link to="/" class="Links navbar-brand ">
                    <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
                </router-link>
            </div>
            <div class="col-3 col-sm-1  mx-auto">
                <button @click="canvasOn= true" class="Links btn" type="button">
                    <h2 class="MenyBtn">Meny</h2>
                </button> 
            </div>
            <div class="col-3 col-sm-1 mx-auto">
                <router-link to="/handlekurv" class="Links align-items-center">
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
                            <p class="nav-link text-light mt-4 ">Om oss</p>
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
                    <li class="nav-item btn-group" role="group" aria-label="Basic radio toggle button group">
                        <router-link to="/" class="Links nav-link">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                                <label class="btn btn-outline-light text-dark mt-4" for="btnradio1" style="border-radius: 0%; font-size: 2rem;">Norwegian</label>
                        </router-link>  
                        <router-link to="/Home" class="Links nav-link">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                                <label class="btn btn-outline-dark text-light mt-4" for="btnradio2" style="border-radius: 0%; font-size: 2rem;">English</label>
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

