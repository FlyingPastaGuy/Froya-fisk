<template>
<nav class="navbar navbar-expand-lg shadow-5-strong sticky-top p-0 my-4">
    <div class="container-fluid mt-4">
        <router-link to="/" class="Links ms-5 ps-3">
            <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
        </router-link>
        <div class="align-self-end">
            <button @click="canvasOn= true" class="btn" type="button">
                <h2 class="MenyBtn me-4">Meny</h2>
            </button>    
            <router-link to="/handlekruv" class="links me-4">
                <img src="../../assets/Images/Vector.png" alt="" srcset=""> 
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
                            <p class="nav-link text-light mt-5 ">Om-oss</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Produkter" class="Links">
                            <p class="nav-link text-light mt-5">Produkter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Oppskrifter" class="Links">
                            <p class="nav-link text-light mt-5">Oppskrifter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Kontakt-oss" class="Links">
                            <p class="nav-link text-light mt-5">Kontakt oss</p>
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

.navbar{
    background-color: #151517;
}

p{
    font-size: 3rem;
}

</style>

