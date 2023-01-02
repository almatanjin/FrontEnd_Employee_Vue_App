<template>
  <navbar-vue />
  <div class="card mx-auto shadow-lg p-3 mb-5" :class="theme === 'light' ? 'dark-theme' : 'light-theme'">
  <h5 class="card-h">Profile</h5>
  <div class="card-body">
    <h5 class="card-header">Name : {{name}}</h5>
    <br />
    <h5 class="card-header">Email : {{email}}</h5>
    <br />
    <a class="navbar-brand" href="#"><router-link to="/updateprofile"><button  class="btn btn-dark">Update</button></router-link></a>
    <a class="navbar-brand" href="#"><button  class="btn btn-danger" @click="deleteAccount()">Delete</button></a>
  </div>
</div>
</template>
<script setup>
import navbarVue from './navbar.vue';
import axios from '@/services/axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";


const name = ref('')
const email = ref('')
const toaster = createToaster({ /* options */ });

async function deleteAccount(){
  alertify.confirm('', 'Are you sure you want to delete your account?', async function(){ 
    await axios.delete('http://127.0.0.1/api/deleteaccount')
  localStorage.removeItem('token')
  localStorage.removeItem('user-info')

  // toaster.error("Deleted",{
  //   position:"top-right",
  //   duration:1200
  // })
  
  router.push({name:'registerVue'})
  alertify.success('Deleted') }
                , function(){ 
                  router.push({name:'ProfileVue'})
                  alertify.error('Cancel')});


  
  // await axios.delete('http://127.0.0.1/api/deleteaccount')
  // localStorage.removeItem('token')
  // localStorage.removeItem('user-info')

  // toaster.error("Deleted",{
  //   position:"top-right",
  //   duration:1200
  // })
  
  // router.push({name:'registerVue'})
  
}


onMounted(()=>{
 
  const user = localStorage.getItem('user-info');
 
  name.value = JSON.parse(user).name
  email.value = JSON.parse(user).email

 
})

</script>
<style>
.tab{
  text-align: left;
}

.card{
  width: 400px;
  
  height: 250px;
  margin-top: 30px;
  font-weight: bold;
}
.card  :hover , .btn :hover{
  border-color: cyan;

  
  
}
.card-header{
  background-color: white;
}


 

.card-header{
  background-color: white;
  text-align: left;
  border-top-left-radius: 5px;
  border-color: rgb(6, 30, 83);
  
}
.logo{
  margin-top: 100px;
}

</style>