<template>
    <section class="contain">
        <div class="container">
            <h2>VÅRE PRODUKTER</h2>
            <p>
                Det er ingen hemmelighet at omgivelsene er viktige. Havmiljøet rundt øya Frøya
                danner et <br> ideelt grunnlag for marint mangfold og er blant de ypperste i verden.
            </p>
            <section class="row justify-content-center">
                <article class="col-3 p-3">
                    <div class="card">
                        <img src="" alt="" srcset="">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="card-title">FRØYA</h5>
                                </div>
                                <div class="col">
                                    <p class="card-text">back loin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="col-3 p-3">
                    <div class="card">
                        <img src="" alt="" srcset="">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="card-title">FRØYA</h5>
                                </div>
                                <div class="col">
                                    <p class="card-text">back loin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="col-3 p-3">
                    <div class="card">
                        <img src="" alt="" srcset="">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="card-title">FRØYA</h5>
                                </div>
                                <div class="col">
                                    <p class="card-text">back loin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <input type="button" value="Se våre produkter" class="btn btn-outline-light mb-3">
        </div>
    </section>
</template>


<style scoped>
.contain{
    background-color: white;
    border-radius: 1rem;
}
h1,p,h2,h5{
    color: black;
}

.card{
    width: 15rem;
}
.btn{
    color: black;
    border-color: black;
    background-color: white;
}
.btn:hover{
    color: white;
    border-color: white;
    background-color: black;
}

.card-body{
    background-color:#232323;
}

.card-title,.card-text{
    color: white;
}

</style>