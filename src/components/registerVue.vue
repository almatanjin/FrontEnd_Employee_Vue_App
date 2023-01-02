<template>
    <!-- <div class="nav">
        <li><a class="nav-link" href="#"><router-link to='/login'><button type="button" class="btn btn-dark">Login</button></router-link></a></li> -->
   
    <!-- <router-link to="/registration">Sign Up</router-link> -->
    <!-- </div> -->
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />

    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="form.name" />
        <input type="text" placeholder="Enter Email" v-model="form.email" />
        <input type="password" placeholder="Enter Password" v-model="form.password" />
        <input type="password" placeholder="Confirm Password" v-model="form.c_password" />
        <button @click="signUp()" id="b" class="btn btn-secondary">Sign Up</button>
        <div>
            <p id="or">or</p>
        </div>
        <div>
        <router-link to="/login"><button id="c">Login</button></router-link>
    </div>
        <!-- <div>
            <p id="or">or</p>
        </div>
        <div>
        <router-link to="/"><button id="c">Login</button></router-link>
    </div> -->
    </div>
    
</template>
<script setup>



import axios from '@/services/axios';
import { reactive , onMounted} from 'vue';
import router from '@/router';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({});


let form = reactive({
    name:"",
    email:"",
    password:"",
    c_password:""
});

const signUp = async()=>{
    const res = await axios.post('http://127.0.0.1/api/register',form)
    .catch(error => {
        console.log(error.response.data.message)
        alert(error.response.data.message)
    })

    if(res.data.success){
        toaster.success(res.data.message,{
             position: 'top-right',
             duration:1300})
        localStorage.setItem('token',res.data.data.token)
        localStorage.setItem("user-info",JSON.stringify(res.data.user_info))
        return router.push({name:'home'})
    }

    alert(res.data.message)
}
onMounted(()=>{
    let user = localStorage.getItem('token');
    if(user){
        router.push({'name':'home'})
    }
})

</script>
