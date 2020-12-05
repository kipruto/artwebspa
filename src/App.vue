<template>
  <div id="app">
        <header id="header">
            <div class="header-content clearfix">
                <a class="logo" href="#"><img src="images/logo.png" alt=""></a>
                <nav class="navigation" role="navigation">
                    <ul class="primary-nav">
                        <li>   <router-link to='/'>Home</router-link></li>
                        <li>     <router-link to='/gallery'>Artworks</router-link></li>
                        <li>  <router-link to='/portfolio'>My Portfolio</router-link></li>
                        <li>  <router-link to='/register'>Register</router-link></li>
                        <li>   <router-link  class='btn--blue-x'  to='/gallery'>Upload<i class='ml-2 fa fa-upload'></i></router-link></li>
                    </ul>
                </nav>
                <a href="#" class="nav-toggle">Menu<span></span></a>
            </div>
        </header>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
 
Footer

  }
}
</script>

<style>

  @import './assets/css/styles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: auto;
  margin: 0px auto;;
}

</style>
