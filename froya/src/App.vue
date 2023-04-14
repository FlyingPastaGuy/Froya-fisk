<template>
  <router-view></router-view>
</template>


<script>

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

@font-face {
  font-family: 'GothemLight';
  src: url('@/assets/fonts/Gotham-OTF/Gotham-Light.otf') format('otf');
}
@font-face {
  font-family: GothemBook;
  src: url('@/assets/fonts/Gotham-OTF/Gotham-Book.otf') format('otf');
}


body{
    background-color: #151517;
}
h1,h2,h3,h4,h5{
  color:white;
  font-family: GothemLight;
}
p{
  color: white;
  font-family: GothemBook;
}

.btn{
  font-family: GothemLight;
}
</style>
