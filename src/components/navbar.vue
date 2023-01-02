<template>
  <ul class="nav nav-tabs ">

    <li><a class="nav-link a" href="#"><router-link to='/'><button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Home"><span
      class="material-symbols-outlined">
      home
    </span></button></router-link></a></li>
    <li><a class="nav-link" href="#"><router-link to='/Profile'><button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Profile"><span
              class="material-symbols-outlined">
              account_circle
            </span></button></router-link></a></li>
    <li><a class="nav-link" href="#"><router-link to='/add'><button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Employee"><span class="material-symbols-outlined">
      person_add
      </span></button></router-link></a></li>
    <li><a class="nav-link" href="#"><router-link to='/admins'><button type="button" class="btn btn-dark">Admin
            Pannel</button></router-link></a></li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><button
          type="button" class="btn btn-dark">{{ name }}</button></a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#"><router-link to='/Profile'><button type="button"
                class="btn btn-light">Profile</button></router-link></a></li>
        <li><a class="dropdown-item" href="#"><router-link to="/" @click="logout()"><button type="button"
                class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Log Out" ><span class="material-symbols-outlined">
                  logout
                </span>
                
              </button> </router-link></a>
              </li>
           <slot>
            
           </slot>   
              
      </ul>
    </li>
  </ul>
  <img class="logo logo object-center inline" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
</template>
<script setup>

import axios from '@/services/axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({});

const employee = ref({})
const name = ref('')
const load = ref(true)




async function logout() {

  const result = await axios.post('http://127.0.0.1/api/logout')
    .catch(error => {
      toaster.error(error.message, {
        position: 'top-right',
        duration: 1200
      })
    })
  if (result.data.success) {

    
    toaster.success(result.data.message, {
      position: 'top-right',
      duration: 1200
    })
    localStorage.removeItem('token');
    localStorage.removeItem('user-info')
  }

  router.push({ name: 'loginVue' })
}
onMounted(() => {

  const user = localStorage.getItem('user-info');

  name.value = JSON.parse(user).name.toUpperCase()


})

</script>
