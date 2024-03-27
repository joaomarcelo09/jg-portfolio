<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="sidebar">
    <TheWelcome />

    <div class="sidebar-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>

  <!-- Page content -->
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */

.sidebar-links {
  margin-top: 7rem;
}
.sidebar a {
  display: block;
  color: black;
  padding: 10px;
  margin-left: 10px;
  text-decoration: none;
  border-radius: 10px 0px 0px 10px;
}

/* Active/current link */
.sidebar a.router-link-exact-active {
  background-color: #04aa6d;
  color: white;
}

.sidebar a.router-link-exact-active:hover(.active) {
  background-color: transparent;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar-links {
    margin-top: 2rem;
    border: black;
  }
  .sidebar a {
    float: left;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
  div.content {
    margin-left: 0;
    max-height: 250px;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar-links {
    margin-top: 2rem;
    border: black;
  }
  .sidebar a {
    float: left;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
  div.content {
    margin-left: 0;
    max-height: 250px;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    width: 100%;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  header nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
