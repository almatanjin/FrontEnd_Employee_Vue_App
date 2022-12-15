

<template>

    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    <div class="login">
        <h3>Login</h3>
      
        
        <input type="text" placeholder="Enter Email" v-model="form.email" />
        
        <input type="password" placeholder="Enter Password" v-model="form.password" />
        <button @click="login()" >Login</button>
        <router-link to="/signUp">SignUp</router-link>
    </div>
    

</template>
<script setup>



import axios from 'axios';
import { reactive , onMounted} from 'vue';
import router from '@/router';


let form = reactive({
    email:"",
    password:""
});

const login = async()=>{
    await axios.post('http://127.0.0.1/api/login',form).then(res=>{
       
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