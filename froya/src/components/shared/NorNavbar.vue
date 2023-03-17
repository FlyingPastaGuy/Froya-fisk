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

</template>

<style scoped>
.Links{
    text-decoration:none
}
</style>