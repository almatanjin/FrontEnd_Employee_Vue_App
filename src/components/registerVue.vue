<template>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />

    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="form.name" />
        <input type="text" placeholder="Enter Email" v-model="form.email" />
        <input type="password" placeholder="Enter Password" v-model="form.password" />
        <input type="password" placeholder="Confirm Password" v-model="form.c_password" />
        <button @click="signUp()">Sign Up</button>
        <router-link to="/">Login</router-link>
    </div>
    
</template>
<script setup>



import axios from 'axios';
import { reactive , onMounted} from 'vue';
import router from '@/router';


let form = reactive({
    name:"",
    email:"",
    password:"",
    c_password:""
});

const signUp = async()=>{
    await axios.post('http://127.0.0.1/api/register',form).then(res=>{
       
        if(res.data.success){
            localStorage.setItem('token',res.data.data.token)
            router.push({name:'home'})


        }
        else{
            alert(res.data.message)
        }
        
      
       
    })
}
onMounted(()=>{
    let user = localStorage.getItem('token');
    if(user){
        router.push({'name':'home'})
    }
})

</script>