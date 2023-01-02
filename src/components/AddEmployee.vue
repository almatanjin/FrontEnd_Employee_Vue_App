
<template>
    <navbar-vue />
    <h3 class="pad">Add Employee</h3>

    <form action="" class="add">
        <input type="text" placeholder="Enter Name" v-model="name" />
        <input type="text" placeholder="Enter Position" v-model="position" />
        <input type="text" placeholder="Enter Adddress" v-model="address" />
        <input type="tel" placeholder="Enter Contact Number" v-model="contact" />
        <button @click.prevent="addEmployee()" type="button" class="btn btn-dark">Add</button>
    </form>

   

</template>
<script setup>
// import { onMounted } from 'vue';

import navbarVue from './navbar.vue';
import router from '@/router';
import { ref } from 'vue';
import axios from '@/services/axios';
import { createToaster } from "@meforma/vue-toaster";
import SweetAlert from 'sweetalert';




const toaster = createToaster({});
const name = ref('')
const position = ref('')
const address = ref('')
const contact = ref('')
async function addEmployee() {
    let result = await axios.post("http://127.0.0.1/api/employees", {
        name: name.value,
        position: position.value,
        address: address.value,
        contact: contact.value
    });
    if (result.status == 200) {
        console.log(result.data)

        // toaster.success(result.data, {
        //     position: 'top-right',
        //     duration:1200
        // })

        SweetAlert('Success', 'Added successfuly', 'success');

        router.push({ name: 'home' })
    }
}

</script>