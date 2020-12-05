<template>
  <div class="gholder">
    <div class="card mainbox">
      <section class="hero">
        <div class="container bg-white">
          <div class="row border-bottom p-0 m-0">
            <h4 class="activity my-4 ml-4">Activity Feed</h4>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div v-for="post in getPosts" :key="post._id">
                <div class="cardbox">
                  <div class="cardbox-heading">
                    <div class="dropdown float-right">
                      <div>
                        <b-dropdown
                          id="dropdown-1"
                        >
                          <b-dropdown-item v-on:click="editItem(post._id)">Edit</b-dropdown-item>
                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item type="button" v-on:click="deleteItem(post._id)">Delete</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                    <div class="media m-0">
                      <div class="d-flex mr-3">
                        <a href=""
                          ><img
                            class="img-fluid rounded-circle"
                            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg"
                            alt="User"
                        /></a>
                      </div>
                      <div class="media-body">
                        <p class="m-0">{{ post.author }}</p>
                       <span class='authorname'
                            ><i class="icon ion-md-pin"></i> James Smith  </span
                          >
                        <small
                          ><span
                            ><i class="icon ion-md-time"></i>
                            {{ post.date }}</span
                          ></small
                        >
                      </div>
                    </div>
                    <p> {{ post.artdescription }}
                    <small class='ml-2'>{{post.arttags}}</small>

                    </p>
                    <small>Category: {{post.artcategory}}</small>
               
                  </div>
                  <div class="cardbox-item">
                    <img class="img-fluid"  :src="'.././uploads/'+ post.image">
                  </div>
                  <div class="cardbox-base">
                    <ul class="float-right">
                      <li>
                        <a><i class="fa fa-comments"></i></a>
                      </li>
                      <li>
                        <a><em class="mr-5"></em></a>
                      </li>
                      <li>
                        <a><i class="fa fa-share-alt"></i></a>
                      </li>
                      <li>
                        <a><em class="mr-3">3</em></a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          ><i class="fa fa-thumbs-up" v-on:click="likePost(post._id)"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                            class="img-fluid rounded-circle"
                            alt="User"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                            class="img-fluid rounded-circle"
                            alt="User"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                            class="img-fluid rounded-circle"
                            alt="User"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                            class="img-fluid rounded-circle"
                            alt="User"
                        /></a>
                      </li>
                      <li>
                        <a
                          ><span> {{post.likes}} Likes</span></a
                        >
                      </li>
                    </ul>
                  </div>
                 <div class='commentbox p-3'>
                          <p>   {{post.comments}}</p>
                    </div>
                  <div class="cardbox-comments">
                    
                 
                    <span class="comment-avatar float-left">
                      <a href=""
                        ><img
                          class="rounded-circle"
                          src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg"
                          alt="..."
                      /></a>
                    </span>
                    <div class="search">
                      <input placeholder="Write a comment" type="text" v-model="Comments.comments" @keydown.enter="addComment(post._id)"/>
                      <button class='mr-10'><i class="fa fa-camera"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container p-0 state-h">
          <div class="wrapper p-2">
            <div class="card card-6">
              <div class="card-heading">
                <h2 class="title">Share your Art</h2>
              </div>
              <div class="card-body">
                <form @submit.prevent="onSubmit()"  method="post" enctype="multipart/form-data" >
                  <div class="form-row">
                    <div class="name">Description</div>
                    <div class="value">
                      <div class="input-group mt-0">
                        <textarea
                          class="textarea--style-6"
                          name="artdescription" 
                          placeholder="Write a short description about your artwork"
                          v-model="Post.artdescription"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="name">Category</div>
                    <div class="value">
                      <div class="input-group">
                        <input
                          class="input--style-6"
                          type="text"
                          name="artcategory" 
                          placeholder="Category"
                          v-model="Post.artcategory"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="name">Tags</div>
                    <div class="value">
                      <input
                        class="input--style-6"
                        type="text"
                        name="arttags" 
                        placeholder="Enter tags, use tailing commas ,"
                        v-model="Post.arttags"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="name">Upload Image</div>
                    <div class="value">
                      <div class="input-group js-input-file">
                        <input  @change="onSelectedFile" class="label--file" type="file"  ref='file' name="image"/>
                      </div>
                      <div class="label--desc">
                        Upload your Images/ Videos/ GIFs for your post. Max file
                        size 3 MB
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                      class="btn--radius-2 btn--blue-2"  id="addbtn"
                      name="submitted"
                      type="submit" 
                    >
                      SUBMIT
                    </button>
                     <button 
                      class="btn--radius-2 btn--blue-2" id="editbtn"
                      name="submitted"
                      type="button" v-on:click='onUpdate()'
                    >
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
  import axios from 'axios'
const url = 'http://localhost:4000/gallery';

export default {
  name: "gallery",
  data() {
    return {
      posts: [],
      Post: {
          artdescription: '',
          arttags: '',
          artcategory: '',
          comments: '',
          likes: 0,
          image: '',
          Imagefile: ''
      },
       Liked: {
          likes: ''
      },
      Comments: {
        comments: ''
      },
      Uploadfile: {
        image :  ''
      },
      fetchedID: ''

    };


  },
  

  async mounted() {
 $('#editbtn').hide();
    this.$store.dispatch('fetchPosts');
  },
  computed: {
    ...mapGetters(["countLikes"]),
    ...mapGetters( ["getALLComments"]),
  
    ...mapState({
        getPosts: state=> state.posts,
        getComments: state=>state.comments
    })

  },
  methods: {
    
    ...mapMutations(["ADD_LIKE", "ADD_POST", "DELETE_POST"]),

    ...mapActions(["addPost"]),
    onSelectedFile(){
      this.Post.Imagefile = event.target.files[0]

    },
    onSubmit(){
       this.addPost(this.Post);
      //   this.Post = { },
      // this.Post.image = ''

    },
    ...mapActions(["updatePost"]),
        onUpdate(){
          const id = this.fetchedID
          const post = this.Post
       this.updatePost({ 
  id: id, 
  post: post,
});
        this.Post = { },
      this.Post.image = ''

    },
    async editItem(id){
 $('#addbtn').hide();
 $('#editbtn').show();

     const response =  await axios.get(`${url}/${id}`);
     this.Post.artdescription = response.data.artdescription
     this.Post.artcategory = response.data.artcategory
     this.Post.arttags = response.data.arttags
     this.fetchedID = response.data._id

    },
      ...mapActions(["deletePost"]),
      deleteItem: function(post){
        this.deletePost(post);

        
    },
    ...mapActions(["addLike"]),
    async likePost(id) {
    const response =  await axios.get(`${url}/${id}`);
    var liked = response.data.likes + 1
     this.Liked.likes = liked
      this.addLike({
        id: id,
        likes: this.Liked
      });
    },
    ...mapActions(["newComment"]),
    addComment(id){
      this.newComment({
        id: id,
        comment: this.Comments
      });
      this.Comments.comments = ''
      
    },


    // onFileSelected(event) {
    //   let image =event.target.files[0];
    //   let reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onload = e =>{
    //     this.Post.image = e.target.result;
    //   }

    // },
    
  },
};
</script>

<style>
</style>