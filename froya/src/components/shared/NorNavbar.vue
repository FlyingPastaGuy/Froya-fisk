<template>
<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid ms-5">
        <router-link to="/" class="Links">
                            <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
        </router-link>
    </div>
    <div class="back container-fluid justify-content-center py-5">
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/Om-oss" class="Links">
                            <p class="nav-link text-light">Om-oss</p>
                        </router-link>
                    </li>
                    <li class="nav-item mx-5">
                        <router-link to="/Produkter" class="Links">
                            <p class="nav-link text-light">Produkter</p>
                        </router-link>
                    </li>
                    <li class="nav-item mx-5">
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
</nav>
    <button @click="canvasOn= true" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
    </button>
<div class="offcanvas offcanvas-end" :class="{show: canvasOn}" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" @click="canvasOn= false" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
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
    text-decoration:none
}
</style>

<style scoped>
i{
    color: white;
}
</style>