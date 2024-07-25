<script setup lang="ts">
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import AditionalView from './AditionalView.vue'
import EducationView from './EducationView.vue'
</script>

<template>
  <div class="container mt-5">
    <AboutView />
    <ExperienceView />
    <AditionalView />
    <EducationView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}
</style>
