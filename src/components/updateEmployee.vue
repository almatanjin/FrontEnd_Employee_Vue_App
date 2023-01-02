<template>
   <navbarVue />
    <h3 class="pad">Update Employee</h3>
    <form action="" class="add">
        <input type="text" placeholder="Enter Name" v-model="employee.name" />
        
        <input type="text" placeholder="Enter Position" v-model="employee.position" />
        
        <input type="text" placeholder="Enter Adddress" v-model="employee.address" />
        <input type="text" placeholder="Enter Contact Number" v-model="employee.contact" />
        <button @click.prevent="updateEmployee()">Save</button>
    </form>

</template>
    
<script>
import axios from '@/services/axios';
import { createToaster } from "@meforma/vue-toaster";
import navbarVue from './navbar.vue';

// const toaster = createToaster({ /* options */ });
export default {
    name: "updateEmployee",
    data() {
        return {
            employee: {
                name: '',
                position: '',
                address: '',
                contact: ''
            },
            toaster : createToaster({ })

        }
    },
    components:{
        navbarVue
    },

    methods:{
        async updateEmployee(){
        let result= await axios.put("http://127.0.0.1/api/employees/"+this.$route.params.id,{
        name:this.employee.name,
        position:this.employee.position,
        address:this.employee.address,
        contact:this.employee.contact
    });
    if(result.status==200){
        
        this.toaster.success(result.data,{
            position: 'top-right',
            duration:1200
        })
        
         this.$router.push({name:'home'});

    }
            
        }
    },
    async mounted(){
    const result=await axios.get("http://127.0.0.1/api/employees/"+this.$route.params.id)
    this.employee=result.data
   
    
}
}

</script>
<style>
.pad{
    margin-top: 24px;
    margin-bottom: 24px;
}
</style>