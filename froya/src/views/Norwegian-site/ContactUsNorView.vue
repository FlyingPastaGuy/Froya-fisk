<template>
<nor-navbar></nor-navbar>
    <div class="bg-white">
        <article class="container py-5 my-5">
            <div class="row">
                <div class="col">
                    <h3>Frøya Salmon As</h3>
                    <p>Salg & Markedsføring</p>
                    <p>Oslo Fiskehall,</p>
                    <p>akerhusstrande 23</p>
                    <p>0150 Oslo</p>

                        <div>
                            <h3>Email</h3>
                            <p>post@froyasalmon.no</p>
                        </div>
                        <div>
                            <h3>Hovedkontor</h3>
                            <p class="pt-4">Havet 45</p>
                            <p>8370 Leknes</p>
                            <p class="pt-4">+47 45634390</p>
                        </div>
                </div>
                <div class="col">
                    <h2>Lurer du på noe? Send oss en melding</h2>

                    <div>
                        <div class="">
                            <label class="form-label">Navn</label>
                            <input class="form-control" type="text">
                        </div>
                        <div>
                            <label class="form-label">Email</label>
                            <input class="form-control" type="text">
                        </div>
                        <div>
                            <label class="form-label">Melding</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <input type="button" value="Send" class="btn btn-dark mt-4 text-center w-100 py-4 rounded-0">
                    </div>
                </div>
            </div>
            
        </article>
    </div>
<nor-footer></nor-footer>
</template>

<script>
import NorNavbar from '@/components/shared/NorNavbar.vue'
import NorFooter from '@/components/shared/NorFooter.vue'

export default {
  components: { NorNavbar, NorFooter },
    setup() {
        
    },
}
</script>

<style scoped>
p,h3,h2{
    color: #000;
}
textarea{
    height: 10rem;
}

</style>