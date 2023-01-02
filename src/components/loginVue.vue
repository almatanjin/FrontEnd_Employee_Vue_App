

<template>
    <!-- <nav>
        <router-link to="/login">Login</router-link>|
    <router-link to="/registration">Sign Up</router-link>
    </nav> -->

    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    <div class="login">
        <h3>Login</h3>
      
        
        <input type="text" placeholder="Enter Email" v-model="form.email" />
        
        <input type="password" placeholder="Enter Password" v-model="form.password" />
        <button @click="login()" id="b" >Login</button>
        <div>
            <p id="or">or</p>
        </div>
        <div>
        <router-link to="/registration"><button id="c">SignUp</button></router-link>
    </div>
    </div>
    

</template>
<script setup>



import axios from '@/services/axios';
import { reactive , onMounted} from 'vue';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({});


let form = reactive({
    email:"",
    password:""
});

const login = async()=>{
    await axios.post('http://127.0.0.1/api/login',form).then(res=>{
       
        if(res.data.success){
            toaster.success(res.data.message,{
             position: 'top-right',
             duration:1200
    })
            localStorage.setItem('token',res.data.data.token)
           
            localStorage.setItem("user-info",JSON.stringify(res.data.user_info))
            router.push({name:'home'})


        }
        else{
            toaster.error(res.data.message,{
             position: 'top-right',
             duration:1200
    })
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