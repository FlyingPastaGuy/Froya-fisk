<template>
<main-eng-navbar></main-eng-navbar>
<div class="bg-white">
    <article class="container py-5 my-5">
        <h2 class="text-black">Frøya salmon with garlic & parmesan-crust</h2>
        <p>Green mashed potatoes & herbal oil</p>
            <div class="row">
                <div class="col">
                    <h6>ingredients</h6>
                    <p>650 g Frøya midloin (1 big package)</p>
                    <h6>Parmesan-topping</h6>
                    <ul>
                        <li>
                            <p>50g grated parmesan</p>
                        </li>
                        <li>
                            <p>50g breadcrumbs of light bread</p>
                        </li>
                        <li>
                            <p>2 clove of garlic</p>
                        </li>
                        <li>
                            <p>1 pot chives</p>
                        </li>
                        <li>
                            <p>1 pot of basil</p>
                        </li>
                        <li>
                            <p>3 tbs melted butter</p>
                        </li>
                        <li>
                            <p>1 handful of hazelnuts</p>
                        </li>
                        <li>
                            <p>
                                Flake salt / freshly ground pepper
                            </p>
                        </li>
                    </ul>
                    <h6>potato and pea mash</h6>
                    <ul>
                        <li>
                            <p>10 hard-boiled potatoes</p>
                        </li>
                        <li>
                            <p>1 bag of peas</p>
                        </li>
                        <li>
                            <p>2dl milk</p>
                        </li>
                        <li>
                            <p>3 tbs dairy butter</p>
                        </li>
                        <li>
                            <p>1/4 grated nutmeg</p>
                        </li>
                        <li>
                            <p>1 lemon</p>
                        </li>
                        <li>
                            <p>1pk broccolini</p>
                        </li>
                        <li>
                            <p>Flake salt / pepper</p>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="row text-center">
                        <div class="col-3">45 min</div>
                        <div class="col-3">medium</div>
                        <div class="col-3"> 8 people</div>
                    </div>
                    <img class="img-thumbnail border-0" src="@/assets/Images/Laksparmesancrust.webp" alt="">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h6>Approach</h6>
                    <p class="text-wrap" style="width:24 rem">
                        Leave the salmon at room temperature for 20 minutes before frying.
                        Set the oven to 180 degrees.
                    </p>
                    <ol>
                        <li>
                            <p>Cut the fish into two blanks and place in an ovenproof dish.</p>
                        </li>
                        <li>
                            <p>
                                Add breadcrumbs, grated parmesan, finely chopped garlic, salt and
                                pepper in a bowl. finely chop a handful of basil leaves and
                                chives. Pour over melted butter.
                            </p>
                        </li>
                        <li>
                            <p>Mix everything well and spread over the salmon.</p>
                        </li>
                        <li>
                            <p>
                                Let the fish roast in the oven for about 10 minutes. The time depends
                                the thickness of the piece of fish and how pink the core you want.
                                Feel free to take a random sample along the way.
                            </p>
                        </li>
                        <li>
                            <p>put on the grill for the last minute to get a golden topping</p>
                        </li>
                    </ol>
                </div>
                <div class="col">
                    <h6>Potato and pea mash</h6>
                    <ol>
                        <li>
                            <p> 
                                Peel potatoes. Cut in half and cook in lightly salted water for approx. 10 minutes to them
                                are tender.
                            </p>
                        </li>
                        <li>
                            <p>
                                Add the peas in the last 2-3 minutes. Pour off the water. Add butter,
                                the juice and grated rind from half a lemon and mash to a coarse stuffing.
                            </p>
                        </li>
                        <li>
                            <p>
                                Season with salt and pepper.
                            </p>
                        </li>
                        <li>
                            <p>Coarsely chop hazelnuts and sprinkle over.</p>
                        </li>
                        <li>
                            <p>Place broccolini in boiling lightly salted water for approx 2min</p>
                        </li>
                    </ol>
                    <h6>herbal oil</h6>
                    <p>
                        Put the rest of the basil and chives in a blender together with olive oil,
                        a little lemon juice and salt. drive to a smooth mixture,
                        serve the salmon with broccolini, mashed potatoes, herb oil and preferably a Green
                        salad if you wish.
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
        MainEngNavbar,
        EngFooter

    }
}
</script>


<style scoped>
p{
    color: black;
}

</style>