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
/*
@font-face {
  font-family: GothemLight;
  src:  url(./assets/fonts/Gotham-OTF/Gotham-Light.otf) ;
}
@font-face {
  font-family: GothemBook;
  src: url(./assets/fonts/Gotham-OTF/Gotham-Book.otf);
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
  font-size: 1.25rem;
}*/
body{
    background-color: #151517;
}
h1,h2,h3,h4,h5{
  color:white;
}
p{
  color: white;
}

.btn{
  font-size: 1.25rem;
}

</style>
