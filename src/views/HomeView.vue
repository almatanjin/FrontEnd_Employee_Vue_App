<template>
<navbar-vue />
  <div class="home">
<h3 class="pad">Employees</h3>
    <div class="spinner-border" role="status" v-if="load">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <table class="table table-dark table-striped w-75">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Address</th>
        <th>Contact Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in employee.data " :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.position ?? "Software Engineer" }}</td>
        <td>{{ item.address ?? "N/A" }}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="'/update/' + item.id"><button type="button" class="btn btn-dark btn-sm mr-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
              id="button1"><span class="material-symbols-outlined">
                edit
              </span></button></router-link>
          <button  class="btn btn-danger btn-sm" id="button2"
            @click.prevent="deleteEmployee(item.id)"><span class="material-symbols-outlined">
              delete
            </span></button>
        </td>
      </tr>
    </tbody>
  </table>

  <Bootstrap5Pagination align="center" :data="employee" @pagination-change-page="Employeeload"></Bootstrap5Pagination>

</template>

<script setup>

import axios from '@/services/axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";
import navbarVue from '@/components/navbar.vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
const toaster = createToaster({});

const employee = ref({})
const name = ref('')
const load = ref(true)

async function Employeeload(page = 1) {
  let result = await axios.get("http://127.0.0.1/api/employees?page=" + page).then(data => {
    employee.value = data.data
    if (data.status == 200) {
      load.value = false
    }
  })

}
onMounted(() => {
  load.value = true
  Employeeload()
  const user = localStorage.getItem('user-info');

  name.value = JSON.parse(user).name.toUpperCase()


})
async function deleteEmployee(id) {
  var delay = alertify.get('notifier','delay');
 alertify.set('notifier','delay', 1);

  alertify.confirm('', 'Are you sure you want to delete your account?', async function(){ 
    const result = await axios.delete("http://127.0.0.1/api/employees/" + id)
 

 
  
  Employeeload()
  alertify.success('Deleted') }
                , function(){ 
                  Employeeload()
                  alertify.error('Cancel')});

  // const result = await axios.delete("http://127.0.0.1/api/employees/" + id)
  // toaster.success(result.data, {
  //   position: 'top-right',
  //   duration: 1200
  // })
  // Employeeload()
}
// async function logout() {

//   const result = await axios.post('http://127.0.0.1/api/logout')
//     .catch(error => {
//       toaster.error(error.message, {
//         position: 'top-right',
//         duration: 1200
//       })
//     })
//   if (result.data.success) {

    
//     toaster.success(result.data.message, {
//       position: 'top-right',
//       duration: 1200
//     })
//     localStorage.removeItem('token');
//     localStorage.removeItem('user-info')
//   }

//   router.push({ name: 'loginVue' })
// }


</script>
<style>
table {
  margin-left: auto;
  margin-right: auto;
}


#button1 {
  margin-right: 10px;
}

.nav {
  margin-top: 0px;
  background-color: rgb(44, 42, 42);
  padding: 20px;
}

.nav-link {
  font-weight: bold;
}

.a {
  margin-left: 170px;
}

</style>