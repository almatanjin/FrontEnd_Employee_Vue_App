<template>
    <!-- <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><router-link to="/"><button type="button" class="btn btn-dark">Back</button></router-link></a>
        </div>
      </nav> -->
      <!-- <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link a" aria-current="page" href="/"><button type="button" class="btn btn-dark">Home</button></a>
        </li>
        <li><a class="nav-link" href="#"><router-link to='/add'><button type="button" class="btn btn-dark">Add Employee</button></router-link></a></li>
        <li><a class="nav-link" href="#"><router-link to='/admins'><button type="button" class="btn btn-dark">Admin Pannel</button></router-link></a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><button type="button" class="btn btn-dark">{{name}}</button></a>
    
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><router-link to='/Profile'><button type="button" class="btn btn-light">Profile</button></router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/" @click="logout()"><button type="button" class="btn btn-light">Logout</button></router-link></a></li>
          </ul>
        </li>
      </ul>
      <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" /> -->
    <navbar-vue />
      <div class="home">
    
        <h3 class="pad">Admins</h3>
      </div>
      <table class="table table-dark table-striped w-75">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
         
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in admins" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.position ?? "HR Admin" }}</td>
          </tr>
        </tbody>
      </table>
</template>

<script setup>
import navbarVue from './navbar.vue';
import axios from '@/services/axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import router from '@/router';

const admins = ref({})


async function Adminload() {
  let result = await axios.get("/users")
  console.log(result)
  admins.value = result.data.data
}
onMounted(() => {
  Adminload()
})

</script>
