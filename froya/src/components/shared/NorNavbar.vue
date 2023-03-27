<template>
<nav class="navbar navbar-expand-lg sticky-top p-0 my-4">
    <div class="container-fluid">
        <router-link to="/" class="Links">
            <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
        </router-link>
        <button @click="canvasOn= true" class="btn" type="button">
            <i class="bi bi-list"></i>
        </button>        
    </div>
</nav>


<div class="offcanvas offcanvas-top" :class="{show: canvasOn }" tabindex="-1" id="offcanvas">
    <div class="offcanvas-header align-self-end">
        <button type="button" @click="canvasOn= false" class="btn-close btn-close-white" ></button>
    </div>
    <div class="offcanvas-body align-self-center">
        <div class="back container-fluid justify-content-center">
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/Om-oss" class="Links">
                            <p class="nav-link text-light">Om-oss</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Produkter" class="Links">
                            <p class="nav-link text-light">Produkter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Oppskrifter" class="Links">
                            <p class="nav-link text-light">Oppskrifter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Kontakt-oss" class="Links">
                            <p class="nav-link text-light">Kontakt oss</p>
                        </router-link>  
                    </li>
                </ul>
            </div>  
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
}
i{
    color: white;
    font-size: 2rem;
}
.offcanvas{
    background-color: #151517;
}

p{
    font-size: 1.5rem;
}

</style>

