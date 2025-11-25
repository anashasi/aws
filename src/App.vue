<template>
  <div id="app">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="vue-link">
        <span class="logo-text">Vue</span>
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo-text {
  font-size: 3em;
  font-weight: bold;
  color: #42b883;
  text-decoration: none;
  display: inline-block;
  padding: 1.5em;
}
.vue-link:hover .logo-text {
  color: #42b883aa;
}
</style>

