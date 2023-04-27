
<template>
    <main-eng-navbar></main-eng-navbar>
    <payout-eng></payout-eng>
    <eng-footer></eng-footer>
</template>

<script>
import PayoutEng from '@/components/English-site/PayoutPage/PayoutEng.vue'
import MainEngNavbar from '../../components/shared/MainEngNavbar.vue';
import EngFooter from '../../components/shared/EngFooter.vue';

export default {
  components: { 
    PayoutEng,
    MainEngNavbar,
    EngFooter,
  },
    setup() {
        
    },

}
</script>


