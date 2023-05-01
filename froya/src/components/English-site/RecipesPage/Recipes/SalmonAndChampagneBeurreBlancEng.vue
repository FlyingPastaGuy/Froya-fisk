<template>
<main-eng-navbar></main-eng-navbar>
<div class="bg-white">
    <article class="container py-5 my-5">
        <h2 class="text-black">salmon and champagne beurre blanc</h2>
        <p>
            pan fried salmon with champagne beurre blanc, asparagus beans and hazelnut
            potatoes
        </p>
            <div class="row">
                <div class="col">
                    <h6>MID LOIN</h6>
                    <p>for 4 personer persons you need: 800 gram Frøya midloin</p>
                    <h6>asparagus beans</h6>
                    <ul>
                        <li>
                            <p>2 packages asparagus beans</p>
                        </li>
                        <li>
                            <p>2 tbs Olive oil</p>
                        </li>
                        <li>
                            <p>1 lemon</p>
                        </li>
                    </ul>
                    <h6>Sauce: Beurre Blanc with champagne</h6>
                    <ul>
                        <li>
                            <p>50 gram butter</p>
                        </li>
                        <li>
                            <p>2 finely chopped shallots</p>
                        </li>
                        <li>
                            <p>4 dl dry champagne</p>
                        </li>
                        <li>
                            <p>3 dl good fishing power</p>
                        </li>
                        <li>
                            <p>5 dl cream</p>
                        </li>
                    </ul>
                    <h6>Hasselback potatoes</h6>
                    <ul>
                        <li>
                            <p>
                                medium-sized potatoes, e.g
                                Amadine
                            </p>
                        </li>
                        <li>
                            <p>6 tbs melted butter</p>
                        </li>
                        <li>
                            <p>1/2 tsp paprika</p>
                        </li>
                        <li>
                            <p>salt og pepper</p> 
                        </li>
                    </ul>
                    <h6>to serving</h6>
                    <ul>
                        <li>
                            <p>Salmon eller trout roe</p>
                        </li>
                        <li>
                            <p>1 lemon</p>
                        </li>
                        <li>
                            <p>Herbs</p>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <div class="row text-center">
                        <div class="col-3">20 min</div>
                        <div class="col-3">medium</div>
                        <div class="col-3">4 people</div>
                    </div>
                    <img class="img-thumbnail border-0" src="@/assets/Images/Froya-til-fest-hovedrett-med-laks-og-champagne-beurre-blanc.jpg" alt="">
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <h6>Approach</h6>
                    <p>Sauce: Beurre Blanc with champagne</p>
                    <ol>
                        <li>
                            <p> 
                            Place the plate on medium heat. Melt half off
                            the butter, add the shallots that you saute in the butter.
                            The onion should only sink a little, it should not brown like that
                            be sure to stand by the pot.
                            </p>
                        </li>
                        <li>
                            <p>
                                Add the champagne and bring to the boil on medium
                                heat until half is left
                            </p>
                        </li>
                        <li>
                            <p>
                                Add fish stock and cook until this is reduced to
                                half quantity
                            </p>
                        </li>
                        <li>
                            <p>
                                Add cream and let it boil gently until you have one
                                smooth sauce
                            </p>
                        </li>
                        <li>
                            <p>
                                Strain the sauce through a fine-mesh sieve and whisk in
                                the rest of the butter
                            </p>
                        </li>
                        <li>
                            <p>Sett to the side</p>
                        </li>
                    </ol>
                </div>
                <div class="col">
                    <h6>Hasselback potatoes</h6>
                    <ol>
                        <li>
                            <p>
                                Set the oven to 225 degrees, find
                                a baking tray or an ovenproof dish. Peel
                                the potatoes and cut off the bottom so that they
                                stands completely flat.
                            </p>    
                        </li>
                        <li>
                            <p>
                                Melt the butter and grease the mould.
                            </p>
                        </li>
                        <li>
                            <p>
                                Cut thin slices into the potato, but don't
                                through, see picture.
                            </p>
                        </li>
                        <li>
                            <p>
                                Place the potatoes in the form, brush well
                                butter, season with salt, pepper and paprika
                            </p>
                        </li>
                        <li>
                            <p>
                                Bake the potatoes in the middle of the oven 45-60
                                minutes depending on the oven. The potatoes should
                                have a beautiful dark golden expression
                            </p>
                        </li>
                    </ol>
                </div>
                <div class="col">
                    <h6>Asparagus beans</h6>
                    <ol>
                        <li>
                            <p>
                                Trim the beans. cook them quickly for 2 minutes. rinse
                                them in cold water so that they keep their colour.
                            </p>
                        </li>
                        <li>
                            <p>
                                When you serve, drizzle oil and lemon over
                                the beans
                            </p>
                        </li>
                    </ol>
                    <h6>Frøya salmon</h6>
                    <ol>
                        <li>
                            <p>cut the salmon into portions</p>
                        </li>
                        <li>
                            <p>
                                Fry it on a medium-high heat for 2-3
                                minutes on each side. The fish should be pink
                                core.
                            </p>
                        </li>
                        <li>
                            <p>
                                Salt and pepper
                            </p>
                        </li>
                    </ol>
                    <p>
                        Serving: When everything is ready, add one
                        heated plate fish, potatoes and beans.
                        the sauce is gently heated before serving.
                        dander on the roe.
                    </p>
                </div>
            </div>
            <router-link to="/Recipes">
                <input type="button" class="btn btn-outline-dark" style="border-radius: 0%;" value="All recipes">
            </router-link>
    </article>
</div>
<eng-footer></eng-footer>
</template>


<script>
import MainEngNavbar from '@/components/shared/MainEngNavbar.vue'
import EngFooter from '@/components/shared/EngFooter.vue'


export default {
    setup() {
        
    },components: {
        EngFooter,
        MainEngNavbar

    }
}
</script>

        MainEngNavbar

<style scoped>
p{
    color: black;
}

</style>