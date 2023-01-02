<template >
  <div :class="theme === 'light' ? 'light-theme' : 'dark-theme'">
      <router-view />
      <br />

      <button class="btn" @click="changetheme"><span class="material-symbols-outlined">
        dark_mode
        </span></button>
        <footer-vue :class="theme === 'light' ? 'light-theme' : 'dark-theme'" />

  </div>
  

</template>
<script setup>

import { ref } from 'vue';
import footerVue from './components/footer.vue';

const theme = ref('light')

function changetheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  color: rgb(8, 118, 161);
}

.logo {
  width: 100px;
}

.register input,
.add input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  display: block;
}

.register button,
.add button,
.login button {
  width: 120px;

  color: aliceblue;
  background-color: black;
}

#b {
  width: 300px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  border: none;

}

#c {
  width: 300px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  border: none;
  background-color: grey;

}

#or {
  margin-top: 15px;
}

.light-theme {
  background-color: white;
  color: black;

}
.light-theme footer{
  background-color: white;
  color: black;
}

.dark-theme {
  background-color: rgb(58, 54, 54);
  color: white;
}

.main-body{
  height:100vh;
  padding: 0 2px 0 2px;
}

</style>

