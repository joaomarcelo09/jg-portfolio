<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="sidebar">
    <TheWelcome />

    <div class="sidebar-links">
      <RouterLink to="/">Sobre mim</RouterLink>
      <RouterLink to="/projects">Projetos</RouterLink>
    </div>
  </div>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  display: flex;
  margin: 0;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #2d2d2d;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-links {
  margin-top: 3rem;
  width: 100%;
  text-align: center;
}

.sidebar a {
  display: block;
  color: #e0e0e0;
  padding: 15px 20px;
  margin: 10px 0;
  text-decoration: none;
  border-radius: 0 10px 10px 0;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.sidebar a:hover {
  background-color: #555555;
}

.sidebar a.router-link-exact-active {
  background-color: #04aa6d;
  color: #ffffff;
}

.content {
  margin-left: 250px;
  padding: 20px;
  flex-grow: 1;
  background-color: #000000;
  min-height: 100vh;
  box-sizing: border-box;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
    width: 100%;
    text-align: center;
  }
  .content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    float: none;
  }
}
</style>
