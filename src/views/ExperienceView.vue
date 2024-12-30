<template>
  <div class="timeline time" v-for="exp in experiencies" :key="exp.date">
    <h3>-> {{ exp.date_init }}</h3>
    <div class="timeline-item">
      <div class="section">
        <div class="section-header d-flex justify-content-start">
          <h3 v-if="exp.date_end">Na {{ exp.company }}:</h3>
          <h3 v-if="!exp.date_end">Atualmente na {{ exp.company }}:</h3>
        </div>
        <h5 class="mt-4" v-for="section in exp.responsibilities" :key="section">- {{ section }}</h5>
      </div>
    </div>
    <h3 v-if="exp.date_end">-> {{ exp.date_end }}</h3>
  </div>
  <h3 class="mt-3">Presente</h3>
</template>

<script setup>
import { useCurriculumStore } from '@/stores/curriculumStore'
const store = useCurriculumStore()
const experiencies = store.experiences
</script>

<style scoped>
.section {
  width: 100%;
  padding: 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

.timeline {
  width: 100%;
}

.timeline-item {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  /* border-left: 0.25rem solid #0b5ed7; */
  background-color: #343434;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #ffffff;
}

.timeline-content p {
  margin: 0.5rem 0 0;
}

.time {
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid #0b5ed7;
}

h5 {
  color: #ffffff;
}
</style>
