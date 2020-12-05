<template>
<div class='gholder'>
<div class='mainbody'>
  <div class='profilediv'>
    <div class='homephoto'>
      <div class='innerimg'>

      </div>
    </div>
    <h4>Mr. X</h4>
    <p class='intro-text'>3D Artist</p>
    <button class='c-button'>EDIT PROFILE</button>
  </div>
  <div class='contentbox'>
    <div class='iconbox'>
      <i class="icofont-briefcase"></i>
      <i class="icofont-image"></i>
      <i class="icofont-badge"></i>
      <i class="icofont-envelope-open"></i>
      <i class="icofont-newspaper"></i>

    </div>
    <h5 class='aboutheader'>My Portfolio</h5>
    <p class='lead'>Hi there, I’m Mr X!</p>
    <div>

      <p class='introtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum”</p>
    </div>
    <div class='share-sig'>
      <div>
      <button  class='share-btn'><i class='fa fa-share-alt'> </i>Share </button>
      <i class="icofont-facebook"></i>
      <i class="icofont-twitter"></i>
      <i class="icofont-link-alt"></i>
      <i class="icofont-linkedin"></i>
      <i class="icofont-pinterest"></i>
      </div>
      <div class='sig-div'>
        <img src='../assets/images/sig.jpg' alt='signature'/>
      </div>
    </div>
    <div class='p-info-div' >
     
      <div class='personal-info'>
        <h4 class='p-header'>Personal Info</h4>

  <p> <strong>Name:</strong>Mr X</p>
  <p> <strong>Age:</strong>23</p>
  <p> <strong>Phone:</strong>+1- 774235672</p>

       
   <p><strong>Location:</strong> Houston, Tx</p>
 <p>  <strong>Email:</strong> erica@gmail.com</p>
  <p> <strong>Discord:</strong>Eric#4869</p>
 <p>  <strong>Remote:</strong> Available</p>
      </div>
      <div class='lingos'>
        <h4 class='p-header'>Skills</h4>
       
            <p>Painting</p>
            <div class="bg-dark">
              <div class="bg-dark" style="height:14px;width:85%"></div>
            </div>
            <p>3D Modelling</p>
            <div class="bg-dark">
              <div class="bg-dark" style="height:14px;width:65%"></div>
            </div>
            <p>Pottery</p>
            <div class="bg-dark">
              <div class="bg-dark" style="height:14px;width:75%"></div>
            </div>
            <p>Drawing</p>
            <div class="bg-dark">
              <div class="bg-dark" style="height:14px;width:95%"></div>
            </div>
           
      </div>
    </div>

    
        <div class='contactdiv'>
          <div class="container-contact100" style="background-image: url('images/bg-01.jpg');">
            <div class="wrap-contact100">
              <form class="contact100-form validate-form">
                <ul class="social-icon"> 
                  <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="0.2s"></a></li>
                  <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="0.4s"></a></li>
                  <li><a href="#" class="fa fa-linkedin wow fadeInUp" data-wow-delay="0.6s"></a></li>
                  <li><a href="#" class="fa fa-instagram wow fadeInUp" data-wow-delay="0.8s"></a></li>
                  <li><a href="#" class="fa fa-google-plus wow fadeInUp" data-wow-delay="1.0s"></a></li>
              </ul>
                <span class="contact100-form-title">
                  CONTACT ME IF YOU NEED AN ART OR DRAWING
                </span>
        
                <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                  <span class="label-input100">Tell us your name *</span>
                  <input class="input100" type="text" name="name" placeholder="Enter your name">
                </div>
        
                <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                  <span class="label-input100">Enter your email *</span>
                  <input class="input100" type="text" name="email" placeholder="Enter your email">
                </div>
        
                <div class="wrap-input100">
                  <span class="label-input100">Subject</span>
                  <input class="input100" type="text" name="web" placeholder="Subject">
                </div>
        
                <div class="wrap-input100 validate-input" data-validate = "Message is required">
                  <span class="label-input100">Message</span>
                  <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
                </div>
        
                <div class="container-contact100-form-btn">
                  <div class="wrap-contact100-form-btn">
                    <div class="contact100-form-bgbtn"></div>
                    <button class="contact100-form-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
        
            <span class="contact100-more">
                For Orders +1- 774235672
            </span>
          </div>
          </div>
        
  </div>

</div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>


.mainbody {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  column-gap: 4%;
  width: 70%;
  margin: 0 auto;
  margin-top:120px ;
}
.profilediv {
  height: 500px;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
}
.homephoto {
  display: block;
  position: relative;
  width: 80%;
  height: 60%;
  margin: 0px auto;
  margin-top: 10%;
  background-color: #fff;
  border-radius: 200px;
  border: 18px solid #fff;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
}
.innerimg {
  background-image: url("../assets/images/prof.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  position: absolute;
  margin-left: 30px;
  top: -18px;
  bottom: -18px;
  width: auto;
  height: auto;
  left: -18px;
  right: -18px;
  background-position: calc(50% + 1.45371px) calc(50% + 3.79917px);
}
.c-button{
  display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    margin-bottom: .75em;
    margin-right: .25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid #7066ff;
    color: #222;
    text-shadow: none;
    background-color: #fff;
    border-radius: 30px;
    font-family: 'Poppins', Helvetica, sans-serif;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 10px -8px rgba(0,0,0,.22);

}
.c-button:hover{
  box-shadow: none;

}
.iconbox{
  position: absolute;
  right: -60px;
  display: flex;
  flex-direction: column;
  top: 0;
  box-sizing: border-box;

}
.iconbox i{
font-size: 35px;
margin: 20px 0px;
cursor: pointer;
}
.iconbox i:hover{
color: rgba(57, 73, 76, 0.35);

}
.introtext{
    font-size: 20px;
    color: #aaa;
    font-weight: 300;
    margin-bottom: 10px;
}
.contentbox {
  position: relative;
  display: block;
  height: auto;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  padding: 40px;
  background-color: white;
}

.aboutheader {
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 50px;
}
.introtext {
  text-align: justify;
}

.share-sig {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgb(185, 185, 185);
  width: 100%;
  padding: 10px 0px;
  margin: 20px 0px;
  padding-bottom: 40px;
}
.share-btn {
  padding: 5px 0px;
  width: 110px;
  background: transparent;
  border: 2px solid green;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border-radius: 35px;
}
.share-btn i {
margin-right: 10px;

}
.share-btn:hover{
  box-shadow: 0 4px 2px -2px rgb(192, 192, 192);
}
.personal-info p{
font-size: 16px;
}
.personal-info p strong{
margin-right: 15px;

}
.bg-dark{
  background-color: rgba(143, 143, 143, 0.705);
}
.sig-div img {
  float: right;
  height: 40px;
  width: 60px;
}

.p-info-div {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 10px;
}
.p-header {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 40px;
}
.workexp,
.portfoliodiv,
.testimonialsdiv,
.contactdiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: rgb(0, 153, 255);
}
.work-expdiv{
  margin: 50px 0px;
}
.workexp h3 {
  font-size: 18px;
  font-weight: bold;
}
.s-workp {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.portfoliodiv {
  background-color: rgb(179, 235, 245);
}
.headlist{
  display: inline-flex;
}
.headlist li{
margin: 0px 10px;
list-style: none;

}

.testimonialsdiv {
  background-color: rgb(179, 245, 201);
}

/* contact form */

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #adadad;
}
input:-moz-placeholder {
  color: #adadad;
}
input::-moz-placeholder {
  color: #adadad;
}
input:-ms-input-placeholder {
  color: #adadad;
}

textarea::-webkit-input-placeholder {
  color: #adadad;
}
textarea:-moz-placeholder {
  color: #adadad;
}
textarea::-moz-placeholder {
  color: #adadad;
}
textarea:-ms-input-placeholder {
  color: #adadad;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Contact ]*/

.container-contact100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.wrap-contact100 {
  max-width: 960px;
  background: #fff;
  border-radius: 2px;
  padding: 66px 115px 59px 115px;
  position: relative;
}

/*==================================================================
[ Form ]*/

.contact100-form {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact100-form-title {
  display: block;
  width: 100%;
  font-family: Raleway-Black;
  font-size: 30px;
  color: #333333;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: left;
  padding-bottom: 32px;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;
  background-color: transparent;
  margin-bottom: 35px;
}

.rs1-wrap-input100 {
  width: calc((100% - 30px) / 2);
}

.label-input100 {
  font-family: Raleway-SemiBold;
  font-size: 14px;
  color: #555555;
  line-height: 1.5;
}

.input100 {
  display: block;
  width: 100%;
  background: #f2f2f2;
  border-radius: 2px;

  font-family: Raleway-SemiBold;
  font-size: 20px;
  color: #686868;
  line-height: 1.2;
  padding: 0 28px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  margin-top: 10px;
}

/*---------------------------------------------*/
input.input100 {
  height: 62px;
}

textarea.input100 {
  min-height: 162px;
  padding-top: 19px;
  padding-bottom: 13px;
}

.input100:focus {
  background: #e6e6e6;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-contact100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
}

.wrap-contact100-form-btn {
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  overflow: hidden;
}

.contact100-form-bgbtn {
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: #df2351;
  background: -webkit-linear-gradient(
    right,
    #2f91ff,
    #00c513,
    #2f91ff,
    #00c513
  );
  background: -o-linear-gradient(right, #2f91ff, #00c513, #2f91ff, #00c513);
  background: -moz-linear-gradient(right, #2f91ff, #00c513, #2f91ff, #00c513);
  background: linear-gradient(right, #2f91ff, #00c513, #2f91ff, #00c513);
  top: 0;
  left: -100%;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.contact100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 150px;
  height: 62px;

  font-family: Raleway-Bold;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
}

.wrap-contact100-form-btn:hover .contact100-form-bgbtn {
  left: 0;
}

/*------------------------------------------------------------------
[ Responsive ]*/

@media (max-width: 992px) {
  .wrap-contact100 {
    padding: 66px 80px 59px 80px;
  }
}

@media (max-width: 768px) {
  .rs1-wrap-input100 {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-contact100 {
    padding: 66px 15px 59px 15px;
  }
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  bottom: calc((100% - 34px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 10px;
  pointer-events: none;

  font-family: Raleway-SemiBold;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f12a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 16px;
  bottom: calc((100% - 34px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 18px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*==================================================================
[ Contact more ]*/

.contact100-more {
  display: block;
  max-width: 960px;
  font-family: Raleway-SemiBold;
  font-size: 20px;
  color: #fff;
  line-height: 1.4;
  text-align: center;
  padding: 40px 0 10px 0;
}
/* ....................................................................................... */

.section-title {
  padding-bottom: 62px;
}

#about .section-title {
  padding-top: 82px;
}

#about .section-title h1 {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

#about,
#gallery,
#contact {
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
}

#gallery,
#contact, footer {
  text-align: center;
}

.overlay {
  background: #304352;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
}



/*---------------------------------------
    Pre Loader Style              
-----------------------------------------*/

.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: none repeat scroll 0 0 #fff;
}

.sk-spinner-pulse {
  width: 60px;
  height: 60px;
  background-color: #e44c65;
  border-radius: 100%;
  margin: 40px auto;
  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
          animation: sk-pulseScaleOut 1s infinite ease-in-out; }

@-webkit-keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

@keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }



/*---------------------------------------
    Main Navigation             
-----------------------------------------*/

.navbar-default {
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.04);
  border: none;
  margin-bottom: 0px !important;
}

.navbar-default .navbar-brand {
  color: #304352;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
}

.navbar-default .navbar-nav li a {
    color: #777;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    padding-right: 22px;
    padding-left: 22px;
}

.navbar-default .navbar-nav li a span {
  position: relative;
  display: block;
  padding-bottom: 2px;
}

.navbar-default .navbar-nav li a span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.navbar-default .navbar-nav li a:hover span:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.navbar-default .navbar-nav li.active a span:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  background-color: #304352;
}

.navbar-default .navbar-nav > li a:hover {
    color: #304352 !important;
}

.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    color: #777;
    background-color: transparent;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    color: #304352;
    background-color: transparent;
}

.navbar-default .navbar-toggle {
     border: none;
     padding-top: 10px;
  }

.navbar-default .navbar-toggle .icon-bar {
    border-color: transparent;
  }

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus { 
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  
  .navbar-default .navbar-nav li a span:before {
    background: transparent !important;
  }
  .navbar-default .navbar-nav li.active a {
    background: transparent;
    background: none;
    color: #304352 !important;
  }
  .navbar-default .navbar-nav li.active a span:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}



/*---------------------------------------
    Home Section              
-----------------------------------------*/

#home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
        align-items: center;
  height: 100vh;
  text-align: center;
}

#home h1 {
  color: #ffffff;
}

#home .col-md-8 {
  padding-left: 62px;
}



/*---------------------------------------
    About Section              
-----------------------------------------*/

#about {
  background: #f0f0f0;
}

#about .item {
  width: 100%;
  display: block;
}

#about .about-thumb {
  background: #ffffff;
  border-radius: 4px;
  padding: 100px;
  position: relative;
}

#about .about-img img {
  border: 8px solid #ffffff;
  position: absolute;
  left: -120px;
  bottom: -325px;
  padding: 12px;
}

#about .team-thumb {
  width: 100%;
  height: 400px;
  margin: 32px 0;
  text-align: center;
  background: #ffffff;
  border-radius: 4px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#about .team-thumb .image-holder {
  position: relative;
  top: 40px;
  display: inline-block;
  margin-bottom: 40px;
  padding: 10px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#about .team-thumb .heading {
  font-weight: bold;
  position: relative;
  top: 10px;
  -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

#about .team-thumb:hover {
  background: #304352;
}

#about .team-thumb:hover .image-holder {
  top: -40px;
  margin-bottom: 0px;
}

#about .team-thumb:hover .heading {
  top: -10px;
}

#about .team-thumb .description {
  font-size: 18px;
  width: 80%;
  margin: 0 auto;
  opacity: 0;
  -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

#about .team-thumb:hover .description {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

#about .team-thumb:hover p.description {
  color: #ffffff;
}



/*---------------------------------------
    Galllery section              
-----------------------------------------*/

#gallery {
  background: #ffffff;
}

#gallery .gallery-thumb {
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(90, 91, 95, 0.15);
  cursor: pointer;
  display: block;
  margin-bottom: 25px;
  position: relative;
  top: 0px;
  transition: all 0.4s ease-in-out;
}

#gallery .gallery-thumb:hover {
  box-shadow: 0px 16px 22px 0px rgba(90, 91, 95, 0.3);
  top: -5px;
}

#gallery .gallery-thumb img {
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 100%;
}



/*---------------------------------------
    Contact section              
-----------------------------------------*/

#contact, footer {
  background: #304352;
  color: #ffffff;
}

#contact .form-control {
  background: transparent;
  box-shadow: none;
  border: 1px solid #f9f9f9;
  color: #ccc;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 14px;
  transition: all 0.4s ease-in-out;
}

#contact .form-control:focus {
  border-color: #e44c65;
  color: #ffffff;
}

#contact input {
  height: 55px;
}

#contact input[type="submit"] {
  background: #e44c65;
  border:none;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 1px;
}

#contact input[type="submit"]:hover {
  background: #222;
  color: #ffffff;
}



/*---------------------------------------
    Footer section             
-----------------------------------------*/

footer {
  padding-bottom: 80px;
}



/*---------------------------------------
    Social icons style              
-----------------------------------------*/

.social-icon {
  padding: 0;
  margin: 0;
}

.social-icon li {
  list-style: none;
  display: inline-block;
}

.social-icon li a {
  border-radius: 4px;
  border: 1px solid #815353;
  color: #743c3c;
  font-size: 20px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  margin: 10px 10px 42px 10px;
  padding: 0px;
}

.social-icon li a:hover {
  background: #ffffff;
  color: #e44c65;
}



/*---------------------------------------
   Back top         
-----------------------------------------*/

.go-top {
  background-color: #ffffff;
  box-shadow: 1px 1.732px 12px 0px rgba( 0, 0, 0, .14 ), 1px 1.732px 3px 0px rgba( 0, 0, 0, .12 );
  transition : all 1s ease;
  bottom: 2em;
  right: 2em;
  color: #222;
  font-size: 26px;
  display: none;
  position: fixed;
  text-decoration: none;
  width: 40px;
  height: 40px;
  line-height: 35px;
  text-align: center;
  border-radius: 100%;
}

.go-top:hover {
  background: #e44c65;
  color: #ffffff;
}



/*---------------------------------------
   Responsive Mobile         
-----------------------------------------*/

@media (max-width: 980px) {
/* 
  #home, .overlay {
    height: 50vh;
  }
*/
  #about .team-thumb {
    margin-top: 32px;
  }

}


@media (max-width: 767px) {

  #home, .overlay {
    height: 100vh;
  }

  #about .about-thumb {
    padding: 32px;
    margin-bottom: 32px;
    text-align: center;
  }

  #about .col-md-3 img {
    position: relative;
    top: 0;
    left: 0;
  }

}



@media (max-width: 650px) {

  h1 {
    font-size: 1.6rem;
  }

  p {
    font-size: 18px;
  }

  img {
    width: 100%;
  }

  #about,
  #gallery,
  #contact {
    padding-top: 80px;
    padding-bottom: 80px;
  }

}
</style>