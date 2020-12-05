import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
const resourceUri = 'http://localhost:4000/gallery';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    likes: 5,
    comments:[],
    posts: []
    },

    getters:{
      countLikes: state =>{
        return state.likes
      },
       getALLPosts: state =>{
         return  state.posts
       },
       getALLComments: state =>{
         return  state.comments
       }
    },

    mutations :{
      SET_POSTS: (state, posts)=>{
             state.posts = posts
      },
      
      ADD_LIKE : (state, posts) => {
        state.posts = posts
      },
      NEW_COMMENT : (state, posts) => {
        state.posts = posts
      },
      
      EDIT_POST: (state, posts) => {
      state.posts = posts
 
       },
      ADD_POST: (state, post)=>{
        state.posts.unshift(post)
      },

     DELETE_POST: (state, deletedPost)=>{
      state.posts = state.posts.filter(post => post._id !== deletedPost);

     },
     UPDATE_POST: (state, updatedPost)=>{
      const index = state.posts.findIndex(post=> post.id === updatedPost)
      if(index !== -1){
        state.posts.splice(index, 1, updatedPost);
      }
    }
    },
    actions:{
      async fetchPosts({commit}){
        const response =await axios.get(resourceUri);
        commit('SET_POSTS', response.data)

      }, async deletePost({commit}, id){
         await axios.delete(`${resourceUri}/${id}`);
        commit('DELETE_POST', id)

      }, async addPost({commit}, file){
        const response =await axios.post(resourceUri, file);
        commit('ADD_POST', response.data)
      },
      async addLike({commit}, {id, likes} ){
       const response =  await axios.patch(`${resourceUri}/${id}` , likes);
        commit('ADD_LIKE', response.data)
        
      },   
       async newComment({commit}, {id, comment}){
        const response =  await axios.patch(`${resourceUri}/${id}` , comment);
        commit('NEW_COMMENT', response.data)
        
      },
      async updatePost({commit}, {id, post}){
        const response = await axios.patch(`${resourceUri}/${id}`, post);
        console.log(response.data)
        commit('EDIT_POST', response.data)
        
      },

    }
})