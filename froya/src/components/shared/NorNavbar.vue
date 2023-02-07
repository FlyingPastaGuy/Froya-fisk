<template>
<div class="back">
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <router-link to="/" class="Links">
                <p class="nav-link text-light">hjem</p>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Kontakt-oss" class="Links">
                <p class="nav-link text-light">Kontakt oss</p>
            </router-link>        
        </li>
        <li class="nav-item">
            <router-link to="/Om-oss" class="Links">
                <p class="nav-link text-light">Om-oss</p>
            </router-link>
        </li>
        <li>
            <img src="../../assets/logo/Froya_logo_hvit.png" alt="" srcset="">
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

            <p class="nav-link text-light">handlekurv</p>

        </li>
    </ul>
</div>
</template>

<style scoped>
.back{
    background-color: #151517;
}

.Links{
    text-decoration:none
}
</style>