<template>
<main-nor-navbar></main-nor-navbar>
<div>
    <payout-nor></payout-nor>
</div>
<nor-footer></nor-footer>
</template>

<script>
import NorFooter from '@/components/shared/NorFooter.vue'
import MainNorNavbar from '@/components/shared/MainNorNavbar.vue'
import PayoutNor from '@/components/Norwegian-site/PayoutPage/PayoutNor.vue'
export default {
  components: { 
    NorFooter, 
    MainNorNavbar,
    PayoutNor 
    },
    setup() {
        
    },
}
</script>