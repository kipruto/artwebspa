<template>
<div class="lholder">
	<section class="login-section">
		<div class="container h-100">
				<div class="log-file">
					<div class="brand">
						<img src=".././assets/images/logo.png" alt="img">
					</div>
				<div class="contact-wrapper">
  <header class="login-cta">
    <h2>Account Login</h2>
  </header>
  <form>
    <div class="form-row">
      <input type="text" required  v-model="User.email">
      <span ><i class="fa fa-user mx-3"></i>Username or Email</span>
    </div>
    <div class="form-row">
      <input type="password" required v-model="User.password">
      <span ><i class="fa fa-lock mx-3"></i>Password</span>
    </div>
    <div class="form-row"></div>
    <div class="form-row">
      <button type="submit" v-on:click="login">Login to your Account!</button>
    </div>
  </form>
  <div class="socials-wrapper">
    <header>
      <h2>Login with your Social Account</h2>     </header>
    <ul>
      <li><a href="#" class="facebook"><i class="fa fa-facebook-square"></i></a></li>
      <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#" class="twitch"><i class="fa fa-twitch"></i></a></li>
      <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
    </ul><p class='text-center'>
     Don't have an Account? <router-link to='/register'>REGISTER</router-link>
    </p>
  </div>
</div>
				
				</div>
		</div>
	</section>
</div>
</template>

<script>
import axios from 'axios'
export default {

data(){
  return{
    User:{
    email: '',
    password: ''
  }
  }
},
  methods:{
    async login(){
           const request = await axios.post('http://localhost:4000/login', {
        password: this.User.password,
        email: this.User.email
      })

console.log(request)


    }
  }

}
</script>

<style>

</style>