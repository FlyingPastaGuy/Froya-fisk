<template>
    <section class="container mt-5">
        <article class="mb-5">
            <div class="text-align-self-start">
                <h4>Receive newsletter?</h4>
                <p>Be the first ones to receive new recipes and other updates</p>
                <div class="input-group ">
                    <input type="email" placeholder="Email Address" class="form-control align-self-start" style="border-radius: 0%; width: 10rem; font-size: 1.25rem; ">
                    <input type="button" value="Sign Up" class="btn btn-outline-secondary ms-3" style="border-radius: 0%;">
                </div>
            </div>
            <hr class="my-5" style="color:#D1D1D1;">
        </article>
        <div class="row">
            <div class="col-8 col-md-4">
                <h5>Frøya</h5>
                            <ul>
                                <li>
                                    <router-link to="/About-us" class="Links">
                                        <a>About Frøya</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Products" class="Links">
                                        <a>Product</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Recipes" class="Links">
                                        <a>Recipes</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Contact-us" class="Links">
                                        <a>Contact</a>
                                    </router-link>
                                </li>

                            <h5 class="link-underline-light">Social Media</h5>
                                <div class="row">
                                    <div class="col-2">
                                        <i class="bi bi-instagram fs-4 "></i>
                                    </div>
                                    <div class="col-2">
                                        <i class="bi bi-facebook fs-4 "></i>
                                    </div>
                                    <div class="col-2">
                                        <i class="bi bi-youtube fs-4 "></i>
                                    </div>
                                </div>
                            </ul>
            </div>
            <div class="col-8 col-md-4">
                <h5>Resources</h5>
                            <ul>
                                <li>
                                    <router-link to="/Om-oss" class="Links">
                                        <a>Privacy Policy</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Produkter" class="Links">
                                        <a>Terms and Cindition</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Oppskrifter" class="Links">
                                        <a>Blog</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Kontakt-oss" class="Links">
                                        <a>Contact us</a>
                                    </router-link>
                                </li>
                            </ul>
            </div>
                <div class="col-8 col-md-4">
                    <h5>Product</h5>
                            <ul>
                                <li>
                                    <router-link to="/Om-oss" class="Links">
                                        <a>Project managment</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Produkter" class="Links">
                                        <a>Time tracker</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Oppskrifter" class="Links">
                                        <a>Time schedule</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Kontakt-oss" class="Links">
                                        <a>Lead generate</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Om-oss" class="Links">
                                        <a>Remote Collavoration</a>
                                    </router-link>
                                </li>
                            </ul>
                </div>
            </div>
            <div class="row justify-content-evenly">
                <div class="col-12 col-md-4"> 
                    <p>ALL RIGHT RESERVED INSULA AS <i class="bi bi-c-circle"></i> 2023</p> 
                </div>
                <div class="col offset-md-5"> 
                    <p>FRØYA IS OWNED BY INSULA AS</p> 
                </div>
            </div>
    </section>    

</template>

<style scoped>
.card{
    background-color:#151517 ;
}

ul{
    list-style: none;
    padding-left:0rem ;
}

li{
    margin-bottom: 1rem;
}

.Links{
    text-decoration:none
}

a,i{
    color: white;
}

.input-group{
    width: 20rem;
}
.center{
    left: 32rem;
}

h5{
    text-decoration: underline;
}
</style>

