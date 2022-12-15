
<template>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><router-link to="/"><button type="button" class="btn btn-dark">Back</button></router-link></a>
        </div>
      </nav>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    <h3 class="pad">Add Employee</h3>

<form action="" class="add">
    <input type="text" placeholder="Enter Name" v-model="name"/>
    <input type="text" placeholder="Enter Position" v-model="position" />
    <input type="text" placeholder="Enter Adddress" v-model="address"/>
    <input type="text" placeholder="Enter Contact Number" v-model="contact"/>
    <button @click.prevent="addEmployee()">Add</button>
</form>

</template>
<script setup>
// import { onMounted } from 'vue';
import router from '@/router';
import {ref} from 'vue';
import axios from 'axios';
const name = ref('')
const position =  ref('')
const address =  ref('')
const contact =  ref('')
async function addEmployee(){
    let result= await axios.post("http://127.0.0.1/api/employees",{
        name:name.value,
        position:position.value,
        address:address.value,
        contact:contact.value
    });
    if(result.status==200){
        
         router.push({name:'home'})
    }
}

</script>