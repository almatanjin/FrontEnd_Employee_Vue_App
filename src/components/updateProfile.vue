<template>
        
          <navbar-vue />
          <h3 class="pad">Update Profile</h3>
          <form class="add">
            <input type="text" v-model="name"/>
            <input type="text" v-model="email"/>
            <button type="button" class="btn btn-dark" @click="update">Update</button>
          </form>
          
      
</template>
<script setup> 
import navbarVue from './navbar.vue';

import { ref } from 'vue';
import { onMounted } from 'vue';
import axios from '@/services/axios';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});
const name = ref('')
const email = ref('')
async function update(e){
    e.preventDefault()
   
    const result= await axios.put("http://127.0.0.1/api/updateuser",{
        name:name.value,
        email:email.value
    });
    
    if(result.status == 200 && result.data.status === "success"){
     
        toaster.success("Updated",{
          position:"top-right",
          duration:1200})

        localStorage.setItem('user-info', JSON.stringify(result.data.data))
        
        
    }
    router.push({name:'ProfileVue'})
            
}
onMounted(()=>{
 
  const user = localStorage.getItem('user-info');
 
  name.value = JSON.parse(user).name
  email.value = JSON.parse(user).email

 
})
</script>