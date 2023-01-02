<template>
  <div class="spinner-grow" role="status" v-if="load">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div>
    <img v-for="i in posts" :key="i" :src="i.image">
  </div>

</template>

<script setup>

import axios from '@/services/axios.js';
import { ref } from 'vue';
import { onMounted } from 'vue';
const posts = ref([])
const load = ref(true)
async function postload() {
 
  let result = await axios.get("/post")
  load.value=false
  posts.value = result.data.data
 
}
onMounted(() => {
  postload()
})

</script>