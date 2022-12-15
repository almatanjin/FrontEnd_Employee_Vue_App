<template>
  <div class="dropdown">
    <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span style="color:skyblue">{{ name }} </span>
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <nav>
        <!-- <li><a class="dropdown-item" href="#"><router-link to="#"><span>{{name}} </span></router-link></a></li> -->

        <li><a class="dropdown-item" href="#"><router-link to='/add'>Add Employee</router-link></a></li>
        <li><a class="dropdown-item" href="#"><router-link to="/" @click="logout()">Logout</router-link></a></li>
      </nav>
    </ul>
  </div>
  <div class="home">
    <nav class="nav">
     
    </nav>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />

    <h3 class="pad">Employees</h3>
  </div>
  <table class="table table-dark table-striped w-75">
    <thead>
      <tr>
        <th>name</th>
        <th>Position</th>
        <th>Address</th>
        <th>Contact Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in employee" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.position ?? "Software Engineer" }}</td>
        <td>{{ item.address ?? "N/A"}}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="'/update/' + item.id"><button type="button" class="btn btn-light btn-sm">Update</button></router-link>
          <button type="button" class="btn btn-danger btn-sm"
          
          @click="deleteEmployee(item.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>

import axios from 'axios';
import {ref} from 'vue';
import { onMounted } from 'vue';
import router from '@/router';

const employee=ref({})

async function Employeeload(){
  let result = await axios.get("http://127.0.0.1/api/employees")
  employee.value=result.data
}
onMounted(()=>{
  Employeeload()
})
async function deleteEmployee(id){
  await axios.delete("http://127.0.0.1/api/employees/"+id)
  Employeeload()
}
function logout(){
  alert('logout')
  localStorage.removeItem('token');
  router.push({name:'loginVue'})
}


</script>
<style>
table {
  margin-left: auto;
  margin-right: auto;
}
.pad {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>