<template>
  <div class="app">
    <div class="main-content">
      <div class="header">
        <div class="header-left">
          <TheWelcome />
        </div>
        <div class="header-center">
          <RouterLink to="/">Informações</RouterLink>
          <RouterLink to="/projects">Projetos</RouterLink>
        </div>
        <div class="header-right"></div>
      </div>

      <div class="router-view">
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
import Footer from './components/FooterSocial.vue'
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 80px;
  box-sizing: border-box;
}

.header {
  width: 100%;
  background-color: #2d2d2d;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-left {
  flex: 1;
}

.header-center {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.header-right {
  flex: 1;
}

.header a {
  color: #e0e0e0;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.header a:hover {
  background-color: #555555;
}

.header a.router-link-exact-active {
  background-color: #04aa6d;
  color: #ffffff;
}

.router-view {
  padding: 80px 20px 20px;
  margin-bottom: 30px;
  background-image: url('/src/components/icons/fundoport.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
